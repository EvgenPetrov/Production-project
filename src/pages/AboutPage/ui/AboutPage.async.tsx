import { lazy } from "react";

export const AboutPageAsync = lazy(
    () =>
        new Promise<{ default: React.ComponentType<any> }>((resolve) => {
            setTimeout(() => {
                import("./AboutPage").then((module) =>
                    resolve({ default: module.AboutPage })
                );
            }, 1500);
        })
);
