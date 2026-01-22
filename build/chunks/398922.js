/** Chunk was on web.js **/
/** chunk id: 398922, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  return {
    keywords: "dsconfig",
    contains: [{
      className: "keyword",
      begin: "^dsconfig",
      end: /\s/,
      excludeEnd: true,
      relevance: 10
    }, {
      className: "built_in",
      begin: /(list|create|get|set|delete)-(\w+)/,
      end: /\s/,
      excludeEnd: true,
      illegal: "!@#$%^&*()",
      relevance: 10
    }, {
      className: "built_in",
      begin: /--(\w+)/,
      end: /\s/,
      excludeEnd: true
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