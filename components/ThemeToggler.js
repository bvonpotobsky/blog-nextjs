import { useTheme } from "next-themes";

// Theme icons
import Moon from "../assets/icons/Moon.jsx";
import Sun from "../assets/icons/Sun.jsx";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme("light");

  return (
    <section className="w-full text-center">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <Moon />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <Sun />
        </button>
      )}
    </section>
  );
};
