type LocaleEntityData = {
    name: string;
    code: string;
    dir: string;
    flag: string;
};
declare class LocaleEntity {
    private data;
    constructor(data: LocaleEntityData);
    getName(): string;
    getCode(): string;
    getDir(): string;
    /**
     * Returns the SVG flag with custom width and height.
     * It replaces any existing width/height attributes in the SVG with the provided values.
     */
    getSvgFlag(width: number, height: number): string;
}
declare class Locales {
    private supportedLocales;
    private readonly locales;
    private currentLocale;
    /**
     * Initializes the Locales manager.
     * - Converts LocaleEntityData array into LocaleEntity instances.
     * - Sets the initial current locale based on document language or falls back to the first locale.
     */
    constructor(supportedLocales: LocaleEntityData[]);
    get(): LocaleEntity[];
    current(): LocaleEntity;
    /**
     * Sets the active locale to the one matching the provided language code.
     * - If the locale is found, it is set as the current locale.
     * - If not, it logs a warning and keeps the current locale unchanged.
     */
    setLocale(lang: string): Locales;
    has(lang: string): boolean;
    getByCode(lang: string): LocaleEntity | undefined;
}
export default Locales;
