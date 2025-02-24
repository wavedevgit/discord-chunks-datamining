/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
function t(e) {
  let t = {
      className: "number",
      begin: /[$%]\d+/
    },
    n = {
      className: "number",
      begin: /\b\d+/
    },
    r = {
      className: "number",
      begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/
    },
    i = {
      className: "number",
      begin: /:\d{1,5}/
    };
  return {
    name: "Apache config",
    aliases: ["apacheconf"],
    case_insensitive: !0,
    contains: [e.HASH_COMMENT_MODE, {
      className: "section",
      begin: /<\/?/,
      end: />/,
      contains: [r, i, e.inherit(e.QUOTE_STRING_MODE, {
        relevance: 0
      })]
    }, {
      className: "attribute",
      begin: /\w+/,
      relevance: 0,
      keywords: {
        _: ["order", "deny", "allow", "setenv", "rewriterule", "rewriteengine", "rewritecond", "documentroot", "sethandler", "errordocument", "loadmodule", "options", "header", "listen", "serverroot", "servername"]
      },
      starts: {
        end: /$/,
        relevance: 0,
        keywords: {
          literal: "on off all deny allow"
        },
        contains: [{
          scope: "punctuation",
          match: /\\\n/
        }, {
          className: "meta",
          begin: /\s\[/,
          end: /\]$/
        }, {
          className: "variable",
          begin: /[\$%]\{/,
          end: /\}/,
          contains: ["self", t]
        }, r, n, e.QUOTE_STRING_MODE]
      }
    }],
    illegal: /\S/
  }
}
e.exports = t