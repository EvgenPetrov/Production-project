import { lazy } from "react";

export const MainPageAsync = lazy(
    () =>
        new Promise<{ default: React.ComponentType<any> }>((resolve) => {
            setTimeout(() => {
                import("./MainPage").then((module) =>
                    resolve({ default: module.MainPage })
                );
            }, 1500);
        })
);
