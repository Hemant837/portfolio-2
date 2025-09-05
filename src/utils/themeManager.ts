// Theme management utility
type Theme = "light" | "dark";

export const getInitialTheme = (): Theme => {
  // Check if theme is stored in localStorage
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme") as Theme;

    if (storedTheme) {
      return storedTheme;
    }

    // Check user preference
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  // Default to light
  return "light";
};

export const setTheme = (theme: Theme): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
};

export const toggleTheme = (): Theme => {
  const currentTheme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  setTheme(newTheme);
  return newTheme;
};
