/*
  We expect the "setHeight" function to be globally accessible across all Fragments.
*/
export const resizeWindow = () => {
  setHeight(document.querySelector(':root').scrollHeight + 'px');
}