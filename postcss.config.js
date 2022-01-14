const purgeCss = require("@fullhuman/postcss-purgecss");

const IN_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    IN_PRODUCTION &&
      purgeCss({
        content: ["./index.html", "./src/**/*.vue"],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            ""
          );
          return (
            contentWithoutStyleBlocks.match(
              /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
            ) || []
          );
        },
        variables: true,
      }),
  ],
};
