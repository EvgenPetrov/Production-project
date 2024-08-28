// Импортируем необходимые модули для создания конфигурации Webpack
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

// Функция для создания конфигурации Webpack на основе переданных опций
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options; // Извлекаем пути и режим из опций

    return {
        mode: mode, // Устанавливаем режим разработки
        entry: paths.entry, // Указываем точку входа
        output: {
            filename: "[name].[contenthash].js", // Настраиваем выходное имя файлов с использованием хэша содержимого
            path: paths.build, // Путь для выходного файла
            clean: true, // Очищаем папку сборки перед созданием новых файлов
        },
        plugins: buildPlugins(options), // Подключаем плагины
        module: {
            rules: buildLoaders(), // Подключаем загрузчики
        },
        resolve: buildResolvers(), // Подключаем резолверы для расширений файлов
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
