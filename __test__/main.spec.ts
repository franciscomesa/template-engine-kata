class TemplateLibrary {
  // @ts-ignore
  replace(s: string, dictionary: Record <string, string>): string {
    return s
  }

}

describe('Template library should', () => {
  new TemplateLibrary();
  describe('do not replace', () => {
    it('empty string', () => {
      const dictionary: Record <string, string> = { }

      const result = TemplateLibrary.replace('', dictionary)

      expect(result).toBe('');
    })

    it('text without variables', () => {
      const dictionary: Record <string, string> = { }

      const result = TemplateLibrary.replace('Menganito de tal', dictionary);

      expect(result).toBe('Menganito de tal')
    })

    it('text if dictionary does not have variables', () => {
      const dictionary: Record <string, string> = { }

      const result = TemplateLibrary.replace('Menganito ${apellido} de tal', dictionary)

      expect(result).toBe('Menganito ${apellido} de tal')
    })
  })

  describe('replace text when', () => {
    it.skip('Replace text with one variable', () => {})
    it.skip('Replace text with multiple variables', () => {})
  })

  describe ('Edge cases and exceptions', () =>  {
    // TODO: Empty string is an edge case?
  })

})

