const { expect } = require('chai');
console.log('expect: ', expect);
const { give, ask } = require('../dist/god');

describe('test ask function of god', function() {
  it('not exist', function() {
    expect(ask('foo')).to.be.equal(null)
  })
  it('exist string', function() {
    give('name', 'ys');
    expect(ask('name')).to.be.equal('ys');
  })
  it('exist object', function() {
    give('data', { data: 'ok' });
    expect(ask('data')).to.deep.equal({ data: 'ok' })
  })
})