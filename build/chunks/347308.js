/** Chunk was on web.js **/
/** chunk id: 347308, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  return {
    name: "PHP template",
    subLanguage: "xml",
    contains: [{
      begin: /<\?(php|=)?/,
      end: /\?>/,
      subLanguage: "php",
      contains: [{
        begin: "/\\*",
        end: "\\*/",
        skip: true
      }, {
        begin: 'b"',
        end: '"',
        skip: true
      }, {
        begin: "b'",
        end: "'",
        skip: true
      }, e.inherit(e.APOS_STRING_MODE, {
        illegal: null,
        className: null,
        contains: null,
        skip: true
      }), e.inherit(e.QUOTE_STRING_MODE, {
        illegal: null,
        className: null,
        contains: null,
        skip: true
      })]
    }]
  }
}