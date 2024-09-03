import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/SideBar";
import { Suspense } from "react";

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames("app container", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
