import { setLocale } from '../src';

describe('Custom locale', () => {
  it('should get default locale', () => {
    const locale = require('../src/locale').default;
    expect(locale.string.email).to.equal('${path} must be a valid email');
  });

  it('should set a new locale', () => {
    const locale = require('../src/locale').default;
    const dict = {
      string: {
        email: 'Invalid email',
      },
    };

    setLocale(dict);

    expect(locale.string.email).to.equal(dict.string.email);
  });

  it('should update the main locale', () => {
    const locale = require('../src/locale').default;
    expect(locale.string.email).to.equal('Invalid email');
  });

  it('should not allow prototype pollution', () => {
    const payload = JSON.parse('{"proto":{"polluted":"Yes! Its Polluted"}}');

    setLocale(payload);

    expect(payload).to.not.have.own.property('polluted');
  })
});
