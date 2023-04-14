class TemplateLibrary {
  // @ts-ignore
  replace(s: string, dictionary: Record <string, string>): string {
    return s
  }

}

describe('Template library should', () => {
  it('Do not replace empty string', () => {
    const template = new TemplateLibrary();
    const dictionary: Record <string, string> = { };

    const result = template.replace('', dictionary);

    expect(result).toBe('');
  });
});
