/** Chunk was on web.js **/
/** chunk id: 783017, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  let t = e.regex,
    n = {
      className: "variable",
      variants: [{
        begin: /\$\d+/
      }, {
        begin: /\$\{\w+\}/
      }, {
        begin: t.concat(/[$@]/, e.UNDERSCORE_IDENT_RE)
      }]
    },
    r = {
      endsWithParent: true,
      keywords: {
        $pattern: /[a-z_]{2,}|\/dev\/poll/,
        literal: ["on", "off", "yes", "no", "true", "false", "none", "blocked", "debug", "info", "notice", "warn", "error", "crit", "select", "break", "last", "permanent", "redirect", "kqueue", "rtsig", "epoll", "poll", "/dev/poll"]
      },
      relevance: 0,
      illegal: "=>",
      contains: [e.HASH_COMMENT_MODE, {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE, n],
        variants: [{
          begin: /"/,
          end: /"/
        }, {
          begin: /'/,
          end: /'/
        }]
      }, {
        begin: "([a-z]+):/",
        end: "\\s",
        endsWithParent: true,
        excludeEnd: true,
        contains: [n]
      }, {
        className: "regexp",
        contains: [e.BACKSLASH_ESCAPE, n],
        variants: [{
          begin: "\\s\\^",
          end: "\\s|\\{|;",
          returnEnd: true
        }, {
          begin: "~\\*?\\s+",
          end: "\\s|\\{|;",
          returnEnd: true
        }, {
          begin: "\\*(\\.[a-z\\-]+)+"
        }, {
          begin: "([a-z\\-]+\\.)+\\*"
        }]
      }, {
        className: "number",
        begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
      }, {
        className: "number",
        begin: "\\b\\d+[kKmMgGdshdwy]?\\b",
        relevance: 0
      }, n]
    };
  return {
    name: "Nginx config",
    aliases: ["nginxconf"],
    contains: [e.HASH_COMMENT_MODE, {
      beginKeywords: "upstream location",
      end: /;|\{/,
      contains: r.contains,
      keywords: {
        section: "upstream location"
      }
    }, {
      className: "section",
      begin: t.concat(e.UNDERSCORE_IDENT_RE + t.lookahead(/\s+\{/)),
      relevance: 0
    }, {
      begin: t.lookahead(e.UNDERSCORE_IDENT_RE + "\\s"),
      end: ";|\\{",
      contains: [{
        className: "attribute",
        begin: e.UNDERSCORE_IDENT_RE,
        starts: r
      }],
      relevance: 0
    }],
    illegal: "[^\\s\\}\\{]"
  }
}