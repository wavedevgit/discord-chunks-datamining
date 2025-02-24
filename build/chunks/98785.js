/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
function t(e) {
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
      returnEnd: !0,
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
e.exports = t