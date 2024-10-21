/*
  manages light/dark mode.
*/

{
  // check if user has set a preference for dark mode
  function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }

  // immediately load saved (or default) mode before page renders

  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

  let settingFlag = currentThemeSetting == "dark" ? "true" : "false";

  document.documentElement.dataset.dark = settingFlag;
  
  const onLoad = () => {
    // update toggle button to match loaded mode
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
    const settingFlag = currentThemeSetting == "dark" ? "true" : "false";
    document.querySelector(".dark-toggle").checked = settingFlag;
  };

  // after page loads
  window.addEventListener("load", onLoad);

  // when user toggles mode button
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked;
    document.documentElement.dataset.dark = value;
    window.localStorage.setItem("dark-mode", value);
  };
}
