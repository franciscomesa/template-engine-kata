
export type TemplateText = string

export class TemplateTextResult {
    errors: string[] = []
    result: TemplateText = ""

    addError(error: string) {
        this.errors.push(error)
    }

    setResult(result: string) {
        this.result = result
    }

    // TODO: hashErrors method

}

export class TemplateLibrary {
    static replace(templateText: string, dictionary: Record<string, string>): TemplateTextResult {
        Object.entries(dictionary).forEach(([key, value]) => {
            templateText = templateText.replace(`$\{${key}}`, value)
        })
        const result = new TemplateTextResult()
        result.setResult(templateText)

        return result
    }
}