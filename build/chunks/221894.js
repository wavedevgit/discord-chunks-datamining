/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
function t(e) {
  let t = "true false yes no null",
    n = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
    r = {
      className: "attr",
      variants: [{
        begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/
      }, {
        begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/
      }, {
        begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/
      }]
    },
    i = {
      className: "template-variable",
      variants: [{
        begin: /\{\{/,
        end: /\}\}/
      }, {
        begin: /%\{/,
        end: /\}/
      }]
    },
    o = {
      className: "string",
      relevance: 0,
      begin: /'/,
      end: /'/,
      contains: [{
        match: /''/,
        scope: "char.escape",
        relevance: 0
      }]
    },
    a = {
      className: "string",
      relevance: 0,
      variants: [{
        begin: /"/,
        end: /"/
      }, {
        begin: /\S+/
      }],
      contains: [e.BACKSLASH_ESCAPE, i]
    },
    s = e.inherit(a, {
      variants: [{
        begin: /'/,
        end: /'/,
        contains: [{
          begin: /''/,
          relevance: 0
        }]
      }, {
        begin: /"/,
        end: /"/
      }, {
        begin: /[^\s,{}[\]]+/
      }]
    }),
    l = {
      className: "number",
      begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
    },
    c = {
      end: ",",
      endsWithParent: !0,
      excludeEnd: !0,
      keywords: t,
      relevance: 0
    },
    u = {
      begin: /\{/,
      end: /\}/,
      contains: [c],
      illegal: "\\n",
      relevance: 0
    },
    d = {
      begin: "\\[",
      end: "\\]",
      contains: [c],
      illegal: "\\n",
      relevance: 0
    },
    f = [r, {
      className: "meta",
      begin: "^---\\s*$",
      relevance: 10
    }, {
      className: "string",
      begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
    }, {
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0
    }, {
      className: "type",
      begin: "!\\w+!" + n
    }, {
      className: "type",
      begin: "!<" + n + ">"
    }, {
      className: "type",
      begin: "!" + n
    }, {
      className: "type",
      begin: "!!" + n
    }, {
      className: "meta",
      begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
    }, {
      className: "meta",
      begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
    }, {
      className: "bullet",
      begin: "-(?=[ ]|$)",
      relevance: 0
    }, e.HASH_COMMENT_MODE, {
      beginKeywords: t,
      keywords: {
        literal: t
      }
    }, l, {
      className: "number",
      begin: e.C_NUMBER_RE + "\\b",
      relevance: 0
    }, u, d, o, a],
    p = [...f];
  return p.pop(), p.push(s), c.contains = p, {
    name: "YAML",
    case_insensitive: !0,
    aliases: ["yml"],
    contains: f
  }
}
e.exports = t