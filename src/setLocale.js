import locale from './locale';

export default function setLocale(custom) {
  Object.keys(custom).forEach(type => {
    if (type === '__proto__' || type === 'constructor' || type === 'prototype') {
      throw new Error('Prototype pollution attempt detected.');
    }

    Object.keys(custom[type]).forEach(method => {
      locale[type][method] = custom[type][method];
    });
  });
}
