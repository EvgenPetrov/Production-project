import "./styles/index.scss";
import { Link } from "react-router-dom";
import { AppRouter } from "./providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE THEME</button>
        </div>
    );
};
