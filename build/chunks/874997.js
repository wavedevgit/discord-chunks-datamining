/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
function t(e) {
  return {
    name: "Mojolicious",
    subLanguage: "xml",
    contains: [{
      className: "meta",
      begin: "^__(END|DATA)__$"
    }, {
      begin: "^\\s*%{1,2}={0,2}",
      end: "$",
      subLanguage: "perl"
    }, {
      begin: "<%{1,2}={0,2}",
      end: "={0,1}%>",
      subLanguage: "perl",
      excludeBegin: !0,
      excludeEnd: !0
    }]
  }
}
e.exports = t