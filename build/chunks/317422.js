/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
function t(e) {
  let t = "\\[",
    n = "\\]";
  return {
    name: "Inform 7",
    aliases: ["i7"],
    case_insensitive: !0,
    keywords: {
      keyword: "thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule"
    },
    contains: [{
      className: "string",
      begin: '"',
      end: '"',
      relevance: 0,
      contains: [{
        className: "subst",
        begin: t,
        end: n
      }]
    }, {
      className: "section",
      begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
      end: "$"
    }, {
      begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
      end: ":",
      contains: [{
        begin: "\\(This",
        end: "\\)"
      }]
    }, {
      className: "comment",
      begin: t,
      end: n,
      contains: ["self"]
    }]
  }
}
e.exports = t