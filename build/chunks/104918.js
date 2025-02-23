/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
function t(e) {
  return {
    name: "CSP",
    case_insensitive: !1,
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
      excludeEnd: !0
    }]
  }
}
e.exports = t