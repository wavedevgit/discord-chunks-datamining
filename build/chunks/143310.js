/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
var e = "undefined" != typeof navigator && navigator.userAgent.indexOf("AppleWebKit") > -1;
t.exports = function(t) {
  return (t = t || document).scrollingElement ? t.scrollingElement : e || "CSS1Compat" !== t.compatMode ? t.body : t.documentElement
}