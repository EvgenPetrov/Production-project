// Импортируем необходимые плагины и типы из Webpack
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

// Функция для создания массива плагинов, используемых в Webpack
export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html, // Указываем путь к HTML-шаблону
        }),
        new webpack.ProgressPlugin(), // Плагин для отображения прогресса сборки
    ];
}
