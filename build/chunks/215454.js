/** Chunk was on web.js **/
/** chunk id: 215454, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  let t = {
    className: "literal",
    begin: /[+-]+/,
    relevance: 0
  };
  return {
    name: "Brainfuck",
    aliases: ["bf"],
    contains: [e.COMMENT(/[^\[\]\.,\+\-<> \r\n]/, /[\[\]\.,\+\-<> \r\n]/, {
      contains: [{
        match: /[ ]+[^\[\]\.,\+\-<> \r\n]/,
        relevance: 0
      }],
      returnEnd: true,
      relevance: 0
    }), {
      className: "title",
      begin: "[\\[\\]]",
      relevance: 0
    }, {
      className: "string",
      begin: "[\\.,]",
      relevance: 0
    }, {
      begin: /(?=\+\+|--)/,
      contains: [t]
    }, t]
  }
}