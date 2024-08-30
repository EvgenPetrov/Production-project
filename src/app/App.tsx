import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AboutPage } from "../pages/AboutPage";
import { MainPage } from "../pages/MainPage";

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"about"}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage />} />
                    <Route path={"/"} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
