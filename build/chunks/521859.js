/** Chunk was on web.js **/
/** chunk id: 521859, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  return {
    name: "HAML",
    case_insensitive: true,
    contains: [{
      className: "meta",
      begin: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
      relevance: 10
    }, e.COMMENT("^\\s*(!=#|=#|-#|/).*$", null, {
      relevance: 0
    }), {
      begin: "^\\s*(-|=|!=)(?!#)",
      end: /$/,
      subLanguage: "ruby",
      excludeBegin: true,
      excludeEnd: true
    }, {
      className: "tag",
      begin: "^\\s*%",
      contains: [{
        className: "selector-tag",
        begin: "\\w+"
      }, {
        className: "selector-id",
        begin: "#[\\w-]+"
      }, {
        className: "selector-class",
        begin: "\\.[\\w-]+"
      }, {
        begin: /\{\s*/,
        end: /\s*\}/,
        contains: [{
          begin: ":\\w+\\s*=>",
          end: ",\\s+",
          returnBegin: true,
          endsWithParent: true,
          contains: [{
            className: "attr",
            begin: ":\\w+"
          }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
            begin: "\\w+",
            relevance: 0
          }]
        }]
      }, {
        begin: "\\(\\s*",
        end: "\\s*\\)",
        excludeEnd: true,
        contains: [{
          begin: "\\w+\\s*=",
          end: "\\s+",
          returnBegin: true,
          endsWithParent: true,
          contains: [{
            className: "attr",
            begin: "\\w+",
            relevance: 0
          }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
            begin: "\\w+",
            relevance: 0
          }]
        }]
      }]
    }, {
      begin: "^\\s*[=~]\\s*"
    }, {
      begin: /#\{/,
      end: /\}/,
      subLanguage: "ruby",
      excludeBegin: true,
      excludeEnd: true
    }]
  }
}