// Импортируем типы для конфигурации резолвера Webpack
import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";

// Функция для создания резолвера, который позволяет не указывать расширения файлов при импорте
export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"], // Указываем поддерживаемые расширения файлов
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: { "@": path.resolve(__dirname, "src") },
    };
}
