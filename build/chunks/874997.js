/** Chunk was on web.js **/
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