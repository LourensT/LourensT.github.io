# Personal Website: documentation
This repository contains the source code for my personal website, which you can find on [lourenstouwen.com](https://lourenstouwen.com) or [lourenst.github.io](https://lourenst.github.io).

My goal for this website is to make it as easy as possible to edit the content of the site and deploy changes.

The site is built with [Eleventy](https://www.11ty.dev/), a static site generator that relies on Markdown files. The main landing page is `index.md`. My humble reading blog is in the `excerpts` directory. The site is built from Markdown files, which makes editing pleasant.
The site is hosted on GitHub Pages, and I use a github workflow to deploy changes to the site every time I push to the main branch.

The `excerpts.md` file uses the Markdown Template engine "Liquid" to render the excerpts from the `excerpts` directory. To do this, I have to add a collection of excerpts to the site, and I do this in the `.eleventy.js` file. Before, I was using [brick.do](https://brick.do/) to host the site, and this was good and easy. It is basically a hosted google doc, so there is no publishing step: every change is immediately published. So when transitioning to GitHub Pages, I wanted to make publishing as easy as possible. I can add a new excerpt by copying the `excerpts/_template.md` file in the `excerpts` directory and changing its name, which will be its header on the page. Each file includes the creation date as a YAML, and the excerpts are sorted by date in reverse chronological order.

Moreover, to make the site a little bit prettier and handle some of the scripting, there are [Nunjucks](https://mozilla.github.io/nunjucks/) templates in the `_includes` directory.

Other things that may be useful to know:
* GitHub Pages automatically builds the site with Jekyll (an 11ty alternative), and you have to add a `.nojekyll` file to prevent Jekyll from building the site.
* You can use the `npx @11ty/eleventy --serve` command to run the site locally.
* the `.eleventyignore` file is used to exclude Markdown files from the build process.
* Non-markdown files that you want to include in the site need to be added to the `.eleventy.js` file.
* You can use a custom domain with GitHub Pages! Add a CNAME file to the root of the repository, and look here: [custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)