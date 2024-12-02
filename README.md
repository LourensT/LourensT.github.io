# Site documentation


The goal of this architecture is to make it as easy as possible to edit the content of the site, and to have a simple way to deploy changes to the site.

The site is built with [Eleventy](https://www.11ty.dev/), a static site generator that relies on Markdown files. The main portfolio page is `index.md`, and the content of the site is stored in the `posts` directory. The site is hosted on GitHub Pages, and I use a github workflow to deploy changes to the site every time I push to the main branch.

In an ongoing effort to host my own stuff, I am moving my reading blog here as well. The `excerpts.md` file uses the Markdown Template engine "Liquid" to render the excerpts from the `excerpts` 
directory. To do this, I have to add a collection of excerpts to the site, and I do this in the `.eleventy.js` file. Before, I was using [brick.do](https://brick.do/) to host the site, and this was good and easy: it is basically a hosted google doc, so there is no publishing step: every change is immediately published. So when transitioning to GitHub Pages, I wanted to make publishing as easy as possible. Currently, I can add a new excerpt by copying  the `excerpts/_template.md` file in the `excerpts` directory, and the site will automatically render it. Each file includes the creation date as a YAML, and the excerpts are sorted by date in reverse chronological order.


Moreover, to make the site a little bit prettier and handle some of the scripting, there is a [Nunjucks](https://mozilla.github.io/nunjucks/) template engine in the `_includes` directory. This is used to render the excerpts page, and style the blockquotes etc.


