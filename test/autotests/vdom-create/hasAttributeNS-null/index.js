var expect = require('chai').expect;

module.exports = function(helpers) {
    var virtualEl = helpers.vdom.createElement('option', { selected: null });

    expect(virtualEl.$__hasAttribute('selected')).to.equal(false);

    return virtualEl.actualize(helpers.document);
};
