const plugin = require("tailwindcss/plugin");
const list = require("./listTheme");

const listTheme = list.map((theme) =>
  plugin(function ({ addVariant, e }) {
    addVariant(`${theme}`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${theme} .${e(`${theme}${separator}${className}`)}`;
      });
    });
  })
);

module.exports = listTheme;
