// Импортируем типы из Webpack
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import loader from "mini-css-extract-plugin/types/loader";

// Функция для создания массива загрузчиков (loaders), используемых в Webpack
export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/, // Регулярное выражение для поиска TypeScript файлов
        use: "ts-loader", // Указываем использование ts-loader для компиляции TypeScript
        exclude: /node_modules/, // Исключаем папку node_modules
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const imageLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    return [typescriptLoader, cssLoader, svgLoader, imageLoader]; // Возвращаем массив
}
