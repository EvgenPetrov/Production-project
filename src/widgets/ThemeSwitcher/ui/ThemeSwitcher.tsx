import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import Moon from "shared/assets/icons/moon.png";
import Sun from "shared/assets/icons/sun.png";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            <img
                className={classNames(cls.icons, {}, [className])}
                src={theme === Theme.DARK ? Moon : Sun}
                alt="Theme icon"
            />
        </Button>
    );
};
