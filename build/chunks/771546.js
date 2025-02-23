/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
function t(e) {
  let t = "(_?[ui](8|16|32|64|128))?",
    n = "(_?f(32|64))?",
    r = "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",
    i = "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?",
    o = {
      $pattern: "[a-zA-Z_]\\w*[!?=]?",
      keyword: "abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
      literal: "false nil true"
    },
    a = {
      className: "subst",
      begin: /#\{/,
      end: /\}/,
      keywords: o
    },
    s = {
      className: "variable",
      begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
    },
    l = {
      className: "template-variable",
      variants: [{
        begin: "\\{\\{",
        end: "\\}\\}"
      }, {
        begin: "\\{%",
        end: "%\\}"
      }],
      keywords: o
    };

  function c(e, t) {
    let n = [{
      begin: e,
      end: t
    }];
    return n[0].contains = n, n
  }
  let u = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE, a],
      variants: [{
        begin: /'/,
        end: /'/
      }, {
        begin: /"/,
        end: /"/
      }, {
        begin: /`/,
        end: /`/
      }, {
        begin: "%[Qwi]?\\(",
        end: "\\)",
        contains: c("\\(", "\\)")
      }, {
        begin: "%[Qwi]?\\[",
        end: "\\]",
        contains: c("\\[", "\\]")
      }, {
        begin: "%[Qwi]?\\{",
        end: /\}/,
        contains: c(/\{/, /\}/)
      }, {
        begin: "%[Qwi]?<",
        end: ">",
        contains: c("<", ">")
      }, {
        begin: "%[Qwi]?\\|",
        end: "\\|"
      }, {
        begin: /<<-\w+$/,
        end: /^\s*\w+$/
      }],
      relevance: 0
    },
    d = {
      className: "string",
      variants: [{
        begin: "%q\\(",
        end: "\\)",
        contains: c("\\(", "\\)")
      }, {
        begin: "%q\\[",
        end: "\\]",
        contains: c("\\[", "\\]")
      }, {
        begin: "%q\\{",
        end: /\}/,
        contains: c(/\{/, /\}/)
      }, {
        begin: "%q<",
        end: ">",
        contains: c("<", ">")
      }, {
        begin: "%q\\|",
        end: "\\|"
      }, {
        begin: /<<-'\w+'$/,
        end: /^\s*\w+$/
      }],
      relevance: 0
    },
    f = {
      begin: "(?!%\\})(" + e.RE_STARTERS_RE + "|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",
      keywords: "case if select unless until when while",
      contains: [{
        className: "regexp",
        contains: [e.BACKSLASH_ESCAPE, a],
        variants: [{
          begin: "//[a-z]*",
          relevance: 0
        }, {
          begin: "/(?!\\/)",
          end: "/[a-z]*"
        }]
      }],
      relevance: 0
    },
    p = [l, u, d, {
      className: "regexp",
      contains: [e.BACKSLASH_ESCAPE, a],
      variants: [{
        begin: "%r\\(",
        end: "\\)",
        contains: c("\\(", "\\)")
      }, {
        begin: "%r\\[",
        end: "\\]",
        contains: c("\\[", "\\]")
      }, {
        begin: "%r\\{",
        end: /\}/,
        contains: c(/\{/, /\}/)
      }, {
        begin: "%r<",
        end: ">",
        contains: c("<", ">")
      }, {
        begin: "%r\\|",
        end: "\\|"
      }],
      relevance: 0
    }, f, {
      className: "meta",
      begin: "@\\[",
      end: "\\]",
      contains: [e.inherit(e.QUOTE_STRING_MODE, {
        className: "string"
      })]
    }, s, e.HASH_COMMENT_MODE, {
      className: "class",
      beginKeywords: "class module struct",
      end: "$|;",
      illegal: /=/,
      contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, {
        begin: i
      }), {
        begin: "<"
      }]
    }, {
      className: "class",
      beginKeywords: "lib enum union",
      end: "$|;",
      illegal: /=/,
      contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, {
        begin: i
      })]
    }, {
      beginKeywords: "annotation",
      end: "$|;",
      illegal: /=/,
      contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, {
        begin: i
      })],
      relevance: 2
    }, {
      className: "function",
      beginKeywords: "def",
      end: /\B\b/,
      contains: [e.inherit(e.TITLE_MODE, {
        begin: r,
        endsParent: !0
      })]
    }, {
      className: "function",
      beginKeywords: "fun macro",
      end: /\B\b/,
      contains: [e.inherit(e.TITLE_MODE, {
        begin: r,
        endsParent: !0
      })],
      relevance: 2
    }, {
      className: "symbol",
      begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
      relevance: 0
    }, {
      className: "symbol",
      begin: ":",
      contains: [u, {
        begin: r
      }],
      relevance: 0
    }, {
      className: "number",
      variants: [{
        begin: "\\b0b([01_]+)" + t
      }, {
        begin: "\\b0o([0-7_]+)" + t
      }, {
        begin: "\\b0x([A-Fa-f0-9_]+)" + t
      }, {
        begin: "\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?" + n + "(?!_)"
      }, {
        begin: "\\b([1-9][0-9_]*|0)" + t
      }],
      relevance: 0
    }];
  return a.contains = p, l.contains = p.slice(1), {
    name: "Crystal",
    aliases: ["cr"],
    keywords: o,
    contains: p
  }
}
e.exports = t