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
    it('text without variables', () => {
      const dictionary: Record <string, string> = { }

      const result = TemplateLibrary.replace('Menganito de tal', dictionary);

      expect(result).toBe('Menganito de tal')
    })
  })

  describe('replace text when', () => {
    it('found one variable', () => {
        const dictionary: Record <string, string> = { pronombreFemenino: 'Ella' }

        const result = TemplateLibrary.replace('${pronombreFemenino} menganita de tal', dictionary)

        expect(result).toBe('Ella menganita de tal')
    })
    it('found multiple variables', () => {
      const dictionary: Record <string, string> = { pronombreFemenino: 'Ella', pronombreMasculino: 'El' }

      const result = TemplateLibrary.replace('${pronombreFemenino} menganita de tal. ${pronombreMasculino} menganito de tal', dictionary)

      expect(result).toBe('Ella menganita de tal. El menganito de tal')
    })
  })

  describe ('Edge cases and exceptions', () =>  {
    it.skip('throw exception if dictionary is null', () => {
      // Record type cannot be null at typescript.
      // Maybe using other structure like Map.
    })

    it.skip('throw exception if text is null', () => {
      // string primitive type cannot be null at typescript.
    })

    it('do not replace empty string', () => {
      const dictionary: Record <string, string> = { }

      const result = TemplateLibrary.replace('', dictionary)

      expect(result).toBe('');
    })

    it('do not replace text if dictionary does not have variables', () => {
      const dictionary: Record <string, string> = { }

      const result = TemplateLibrary.replace('Menganito ${apellido} de tal', dictionary)

      expect(result).toBe('Menganito ${apellido} de tal')
    })

    it('variables not found in the dictionary', () => {
      const dictionary: Record <string, string> = { pronombreFemenino: 'Ella' }

      const result = TemplateLibrary.replace('${pronombreFemenino} menganita de tal. ${pronombreMasculino} menganito de tal', dictionary)

      expect(result).toBe('Ella menganita de tal. ${pronombreMasculino} menganito de tal')
    })

    it('variables not used in the dictionary', () => {
      const dictionary: Record <string, string> = { pronombreFemenino: 'Ella', pronombreMasculino: 'El' }

      const result = TemplateLibrary.replace('Ella menganita de tal. ${pronombreMasculino} menganito de tal', dictionary)

      expect(result).toBe('Ella menganita de tal. El menganito de tal')
    })

    it.skip('empty string as a key in the dictionary', () => {
        // Record type cannot have empty string as a key at typescript.
    })
    // and the case of values that are not convertible to string (not serializable)...
    // How would you design the library in a way that is resilient, intuitive, and comfortable to use?
  })
})

