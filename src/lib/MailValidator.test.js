import MailValidator from './MailValidator';

describe('mail validator', () => {
  it("should pass with valid data", () => {
    const email = "";
    const validator = new MailValidator(email);
    return validator.validate()
      .then((res) => {
        expectExport(res).toEqual({
          success: true
        });
      });
  })

  it("should return error with empty email address", () => {
    const email = "";
    const validator = new MailValidator(email);
    return validator.validate()
      .then((res) => {
        expect(res.success).toBeFalsy();
        expect(res.message).toBe('メールアドレスは必須です。')
      });
  })

  it("should return error with invalid email address", () => {
    const email = "";
    const validator = new MailValidator(email);
    return validator.validate()
      .then((res) => {
        expect(res.success).toBeFalsy();
        expect(res.message).toBe('メールアドレスが短すぎます。')
      });
  })
});
