const CleanCSS = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require("moment");
const htmlmin = require("html-minifier");
require('dotenv').config()

const conf = {
    dir: {
        input: "src",
        output: "dist"
    }
};

module.exports = function (config) {
    // Directory Management
    config.addPassthroughCopy("src/assets");


    config.addLayoutAlias("post", "post.njk");
    config.addLayoutAlias("base", "base.njk");

    config.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    config.addPlugin(pluginRss);

    // Meta Keywords: My own script
    config.addNunjucksFilter("keyJoin",
        function (tags, keywords) {
            return [...(tags ? tags : []), ...(keywords ? keywords : [])].join(', ');
        }
    );

    // Copy paste from Jérôme Coupé
    config.addNunjucksFilter("date", function (date, format) {
        return moment(date).format(format);
    });

    config.addTransform("htmlmin", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });

    return conf
}


