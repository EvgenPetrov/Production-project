// Импортируем типы из Webpack
import webpack from "webpack";

// Функция для создания массива загрузчиков (loaders), используемых в Webpack
export function buildLoaders(): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/, // Регулярное выражение для поиска TypeScript файлов
        use: "ts-loader", // Указываем использование ts-loader для компиляции TypeScript
        exclude: /node_modules/, // Исключаем папку node_modules
    };

    return [typescriptLoader]; // Возвращаем массив с одним загрузчиком
}
