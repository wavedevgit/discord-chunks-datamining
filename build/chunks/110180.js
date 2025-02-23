/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
function t(e) {
  return {
    keywords: "dsconfig",
    contains: [{
      className: "keyword",
      begin: "^dsconfig",
      end: /\s/,
      excludeEnd: !0,
      relevance: 10
    }, {
      className: "built_in",
      begin: /(list|create|get|set|delete)-(\w+)/,
      end: /\s/,
      excludeEnd: !0,
      illegal: "!@#$%^&*()",
      relevance: 10
    }, {
      className: "built_in",
      begin: /--(\w+)/,
      end: /\s/,
      excludeEnd: !0
    }, {
      className: "string",
      begin: /"/,
      end: /"/
    }, {
      className: "string",
      begin: /'/,
      end: /'/
    }, {
      className: "string",
      begin: /[\w\-?]+:\w+/,
      end: /\W/,
      relevance: 0
    }, {
      className: "string",
      begin: /\w+(\-\w+)*/,
      end: /(?=\W)/,
      relevance: 0
    }, e.HASH_COMMENT_MODE]
  }
}
e.exports = t