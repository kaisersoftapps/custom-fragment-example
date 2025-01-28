/*
  We expect the "theme" object to be globally accessible across all Fragments.
*/
export const addDarkThemeSupport = () => {
  document.querySelector(":root").setAttribute("data-color-mode", theme.colorMode);
  document.querySelector(":root").setAttribute("data-theme", `${theme.colorMode}:${theme.colorMode}`);
  document.querySelector(":root").insertAdjacentHTML("afterbegin", `<link rel="stylesheet" href="https://forge.cdn.prod.atlassian-dev.net/atlaskit-tokens_${theme.colorMode}.css" />`);
}