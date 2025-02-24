/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
function t(e) {
  let t = {
      match: [/^\s*(?=\S)/, /[^:]+/, /:\s*/, /$/],
      className: {
        2: "attribute",
        3: "punctuation"
      }
    },
    n = {
      match: [/^\s*(?=\S)/, /[^:]*[^: ]/, /[ ]*:/, /[ ]/, /.*$/],
      className: {
        2: "attribute",
        3: "punctuation",
        5: "string"
      }
    },
    r = {
      match: [/^\s*/, />/, /[ ]/, /.*$/],
      className: {
        2: "punctuation",
        4: "string"
      }
    },
    i = {
      variants: [{
        match: [/^\s*/, /-/, /[ ]/, /.*$/]
      }, {
        match: [/^\s*/, /-$/]
      }],
      className: {
        2: "bullet",
        4: "string"
      }
    };
  return {
    name: "Nested Text",
    aliases: ["nt"],
    contains: [e.inherit(e.HASH_COMMENT_MODE, {
      begin: /^\s*(?=#)/,
      excludeBegin: !0
    }), i, r, t, n]
  }
}
e.exports = t