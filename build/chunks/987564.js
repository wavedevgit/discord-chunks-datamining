/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
function t(e) {
  let t = "if eq ne lt lte gt gte select default math sep";
  return {
    name: "Dust",
    aliases: ["dst"],
    case_insensitive: !0,
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
          endsWithParent: !0,
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
e.exports = t