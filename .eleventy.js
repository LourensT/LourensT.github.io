module.exports = function(eleventyConfig) {
  // Copy the `img/` directory
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("assets/styles.css");

  // Create a collection called "excerpts"
  eleventyConfig.addCollection("excerpts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("excerpts/*")
      .sort((a, b) => {
        // Sort by the dateCreated field (latest first)
        return new Date(b.data.dateCreated) - new Date(a.data.dateCreated);
      });
  });

  eleventyConfig.addFilter("formatISODate", function (isoDate, format) {
    const date = new Date(isoDate); 
    const map = { 
      '%Y': date.getUTCFullYear(),
      '%m': String(date.getUTCMonth() + 1).padStart(2, '0'),
      '%d': String(date.getUTCDate()).padStart(2, '0'),
      '%H': String(date.getUTCHours()).padStart(2, '0'),
      '%M': String(date.getUTCMinutes()).padStart(2, '0'),
      '%S': String(date.getUTCSeconds()).padStart(2, '0'),
    };
    return format.replace(/%[YmdHMS]/g, match => map[match]);
  });
  

  // Set the layouts directory
  // eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "liquid" // Enable Liquid in markdown files
  };
};