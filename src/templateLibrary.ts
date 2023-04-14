export class TemplateLibrary {
    // @ts-ignore
    static replace(templateText: string, dictionary: Record<string, string>): string {
        Object.entries(dictionary).forEach(([key, value]) => {
            templateText = templateText.replace(`$\{${key}}`, value)
        })
        return templateText
    }
}