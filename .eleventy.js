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
  

  // Set the layouts directory
  // eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "liquid" // Enable Liquid in markdown files
  };
};