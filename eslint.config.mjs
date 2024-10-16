import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // Плагин для TypeScript
import pluginReact from "eslint-plugin-react"; // Плагин для React

export default {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Указываем расширения файлов, включая JSX и TSX
    languageOptions: {
        globals: globals.browser, // Определяем глобальные переменные для браузера
        ecmaFeatures: {
            jsx: true, // Явно разрешаем JSX в коде
        },
    },
    plugins: {
        react: pluginReact,
        "@typescript-eslint": tseslint,
    },
    extends: [
        "eslint:recommended", // Рекомендуемая конфигурация ESLint
        "plugin:react/recommended", // Поддержка и рекомендуемые правила для React
        "plugin:@typescript-eslint/recommended", // Рекомендуемые правила для TypeScript
    ],
    rules: {
        // Здесь можно добавить кастомные правила
    },
    settings: {
        react: {
            version: "detect", // Автоматическое определение версии React
        },
    },
};