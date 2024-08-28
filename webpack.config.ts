// Импортируем Webpack и функцию для создания конфигурации Webpack
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
    // Определяем пути, необходимые для сборки
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.ts"), // Точка входа для приложения
        build: path.resolve(__dirname, "build"), // Путь для выходного файла после сборки
        html: path.resolve(__dirname, "public", "index.html"), // Шаблон HTML для приложения
    };
    // Устанавливаем режим разработки
    const mode = env.mode || "development";
    const isDev = mode === "development"; // Определяем, что мы в режиме разработки
    const PORT = env.port || 3000;

    // Создаем конфигурацию Webpack, используя кастомную функцию buildWebpackConfig
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
    return config;
};
