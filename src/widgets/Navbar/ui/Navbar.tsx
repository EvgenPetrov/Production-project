import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Applink, AppLinkTheme } from "./AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <Applink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>
                    Главная
                </Applink>
                <Applink theme={AppLinkTheme.SECONDARY} to={"about"}>
                    О сайте
                </Applink>
            </div>
        </div>
    );
};
