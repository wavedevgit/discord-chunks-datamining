/** Chunk was on web.js **/
/** chunk id: 341100, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  return {
    name: "Python profiler",
    contains: [e.C_NUMBER_MODE, {
      begin: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
      end: ":",
      excludeEnd: true
    }, {
      begin: "(ncalls|tottime|cumtime)",
      end: "$",
      keywords: "ncalls tottime|10 cumtime|10 filename",
      relevance: 10
    }, {
      begin: "function calls",
      end: "$",
      contains: [e.C_NUMBER_MODE],
      relevance: 10
    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
      className: "string",
      begin: "\\(",
      end: "\\)$",
      excludeBegin: true,
      excludeEnd: true,
      relevance: 0
    }]
  }
}