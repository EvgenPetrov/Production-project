import { FC } from "react";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const Applink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.Applink, {}, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </Link>
    );
};
