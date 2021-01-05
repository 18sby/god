const { expect } = require('chai');
const { give, clean, ask } = require('../dist/god');

describe('test clean function of god', function() {
  it('clean key',function() {
    give('fruit', 'apple');
    expect(ask('fruit')).to.be.equal('apple');
    clean('fruit');
    expect(ask('fruit')).to.be.equal('apple');
  })
})