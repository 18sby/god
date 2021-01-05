const { expect } = require('chai');
const { give, ask } = require('../dist/god');

describe('test give function of god', function() {
  it('give key', function() {
    expect(ask('text')).to.be.equal(null);
    give('text', 'give is ok?', { readonly: true });
    expect(ask('text')).to.be.equal('give is ok?');
  })
  it('give readonly key', function() {
    give('text', 'readonly could change?');
    expect(ask('text')).to.be.equal('give is ok?');
  })
})