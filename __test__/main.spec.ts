class TemplateLibrary {
  // @ts-ignore
  static replace(s: string, dictionary: Record <string, string>): string {
      Object.entries(dictionary).forEach(([key, value]) => {
        s = s.replace(`$\{${key}}`, value);
      })
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
    it('Replace text with one variable', () => {
        const dictionary: Record <string, string> = { pronombreFemenino: 'Ella' }

        const result = TemplateLibrary.replace('${pronombreFemenino} menganita de tal', dictionary)

        expect(result).toBe('Ella menganita de tal')
    })
    it.skip('Replace text with multiple variables', () => {})
  })

  describe ('Edge cases and exceptions', () =>  {
    // TODO: Empty string is an edge case?
  })

})

