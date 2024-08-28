// Импортируем типы для конфигурации резолвера Webpack
import { ResolveOptions } from "webpack";

// Функция для создания резолвера, который позволяет не указывать расширения файлов при импорте
export function buildResolvers(): ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"], // Указываем поддерживаемые расширения файлов
    };
}
