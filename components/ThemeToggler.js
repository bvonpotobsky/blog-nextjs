import { useTheme } from "next-themes";

// Theme icons
import Moon from "../public/icons/Moon.jsx";
import Sun from "../public/icons/Sun.jsx";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme("light");

  return (
    <>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <Moon />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <Sun />
        </button>
      )}
    </>
  );
};
