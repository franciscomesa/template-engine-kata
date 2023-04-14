class TemplateLibrary {
  // @ts-ignore
  replace(s: string, dictionary: Record <string, string>): string {
    return s
  }

}

describe('Template library should', () => {
  describe('do not replace', () => {
    it('Do not replace empty string', () => {
      const template = new TemplateLibrary();
      const dictionary: Record <string, string> = { };

      const result = template.replace('', dictionary);

      expect(result).toBe('');
    })

    it('Do not replace text without variables', () => {
      const template = new TemplateLibrary();
      const dictionary: Record <string, string> = { };

      const result = template.replace('Fulanito de tal', dictionary);

      expect(result).toBe('Fulanito de tal');

    })

    it.skip('Do not replace text if dictionary does not have variables', () => {});

  })

  describe('replace text when', () => {
    it.skip('Replace text with one variable', () => {})
    it.skip('Replace text with multiple variables', () => {})
  })

  describe ('Edge cases and exceptions', () =>  {
    // TODO: Empty string is an edge case?
  })

})
