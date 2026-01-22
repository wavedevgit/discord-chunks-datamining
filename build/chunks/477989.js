/** Chunk was on web.js **/
/** chunk id: 477989, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  let t = "if eq ne lt lte gt gte select default math sep";
  return {
    name: "Dust",
    aliases: ["dst"],
    case_insensitive: true,
    subLanguage: "xml",
    contains: [{
      className: "template-tag",
      begin: /\{[#\/]/,
      end: /\}/,
      illegal: /;/,
      contains: [{
        className: "name",
        begin: /[a-zA-Z\.-]+/,
        starts: {
          endsWithParent: true,
          relevance: 0,
          contains: [e.QUOTE_STRING_MODE]
        }
      }]
    }, {
      className: "template-variable",
      begin: /\{/,
      end: /\}/,
      illegal: /;/,
      keywords: t
    }]
  }
}