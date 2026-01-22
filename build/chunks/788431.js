/** Chunk was on web.js **/
/** chunk id: 788431, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  return {
    name: "CSP",
    case_insensitive: false,
    keywords: {
      $pattern: "[a-zA-Z][a-zA-Z0-9_-]*",
      keyword: ["base-uri", "child-src", "connect-src", "default-src", "font-src", "form-action", "frame-ancestors", "frame-src", "img-src", "manifest-src", "media-src", "object-src", "plugin-types", "report-uri", "sandbox", "script-src", "style-src", "trusted-types", "unsafe-hashes", "worker-src"]
    },
    contains: [{
      className: "string",
      begin: "'",
      end: "'"
    }, {
      className: "attribute",
      begin: "^Content",
      end: ":",
      excludeEnd: true
    }]
  }
}