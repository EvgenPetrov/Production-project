import "./styles/index.scss";
import { Link } from "react-router-dom";
import { AppRouter } from "./providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"about"}>О сайте</Link>
            <AppRouter />
        </div>
    );
};
