module.exports = function(eleventyConfig) {
    // Copy `assets/` to `_site/assets`
    eleventyConfig.addPassthroughCopy("assets");

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_templates"
        }
    }
}