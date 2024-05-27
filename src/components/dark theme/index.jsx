import useLocalStorage from "./usestorage";
import "./theme.css";

const DarkTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div className="light-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleTheme}>CHANGE THEME</button>
      </div>
    </div>
  );
};
export default DarkTheme;
