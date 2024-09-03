import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames("app container", {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};
