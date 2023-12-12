const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const VitePrismPlugin = require("vite-plugin-prismjs").default;
const { markdownItExternalLinks } = require("./markdown-it-plugins");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({
    "./public/": "/public/",
    "./src/": "/"
  });

  // Copy all images directly
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.gif");
  eleventyConfig.addPassthroughCopy("**/*.svg");

  // Add the Vite plugin
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      plugins: [
        VitePrismPlugin({
          languages: [
            "markup",
            "markdown",
            "handlebars",
            "css",
            "shell",
            "clike",
            "javascript",
            "typescript",
            "json",
            "toml",
            "yaml",
            "docker",
            "nginx"
          ],
          theme: "okaidia",
          css: true,
        }),
      ],
    },
  });

  // configure custom md parser
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  
  // use md plugins
  md.use(markdownItExternalLinks);
  md.use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: '#'
  });
  
  eleventyConfig.setLibrary('md', md);

  // shortcodes

  eleventyConfig.addShortcode('trackingScript', () => (`<!-- Start Open Web Analytics Tracker -->
  <script type="text/javascript">
    //<![CDATA[
    var owa_baseUrl = 'https://analytics.austinfay.com/';
    var owa_cmds = owa_cmds || [];
    owa_cmds.push(['setSiteId', '8971c79f5fff28491209f91174a0c5b6']);
    owa_cmds.push(['setPageType', 'blog-post']);
    owa_cmds.push(['trackPageView']);
    owa_cmds.push(['trackClicks']);
    owa_cmds.push(['trackDomStream']);

    (function() {
        // don't track localhost
        const isLocalhost = window.location.hostname === 'localhost';
        if (isLocalhost) return;

        var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
        owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
        _owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
        var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
    }());
    //]]>
  </script>
  <!-- End Open Web Analytics Code -->`));

  eleventyConfig.addShortcode('preview', function(content, length) {
    // strip html tags
    content = content.replace(/(<([^>]+)>)/gi, "");
    // strip markdown links
    content = content.replace(/\[([^\]]+)\]\([^)]+\)/gi, "$1");

    // default the length to 200
    const _length = typeof length === 'number' ? length : 250;

    // return the preview
    return `${content.substring(0,  _length).trim()}...`;
  })

  return {
    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "hbs",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "hbs",

    // These are all optional:
    dir: {
      input: "content", // default: "."
      includes: "../_includes", // default: "_includes"
      data: "../_data", // default: "_data"
      output: "_site",
    },

    // -----------------------------------------------------------------
    // Optional items:
    // -----------------------------------------------------------------

    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

    // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
    // it will transform any absolute URLs in your HTML to include this
    // folder name and does **not** affect where things go in the output folder.
    pathPrefix: "/",
  };
};
