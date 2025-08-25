/** Chunk was on web.js **/
/** chunk id: 530500, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  let t = "[ \\t\\f]*",
    n = t + "[:=]" + t,
    r = "[ \\t\\f]+",
    i = "([^\\\\:= \\t\\f\\n]|\\\\.)+",
    o = {
      end: "(" + n + "|" + r + ")",
      relevance: 0,
      starts: {
        className: "string",
        end: /$/,
        relevance: 0,
        contains: [{
          begin: "\\\\\\\\"
        }, {
          begin: "\\\\\\n"
        }]
      }
    };
  return {
    name: ".properties",
    disableAutodetect: true,
    case_insensitive: true,
    illegal: /\S/,
    contains: [e.COMMENT("^\\s*[!#]", "$"), {
      returnBegin: true,
      variants: [{
        begin: i + n
      }, {
        begin: i + r
      }],
      contains: [{
        className: "attr",
        begin: i,
        endsParent: true
      }],
      starts: o
    }, {
      className: "attr",
      begin: i + t + "$"
    }]
  }
}