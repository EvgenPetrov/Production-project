// Определение типов для режима сборки и путей к файлам

export type BuildMode = "production" | "development"; // Тип для режима сборки

export interface BuildPaths {
    entry: string; // Путь к точке входа
    build: string; // Путь к папке сборки
    html: string; // Путь к HTML-шаблону
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode; // Режим сборки
    paths: BuildPaths; // Пути к файлам
    isDev: boolean; // Флаг, указывающий на режим разработки
    port: number;
}
