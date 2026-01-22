/** Chunk was on web.js **/
/** chunk id: 789072, original params: e (module,exports,re quire) **/
"use strict";
var t = "u" > typeof navigator && navigator.userAgent.indexOf("AppleWebKit") > false;
module.exports = function(e) {
  return (e = e || document).scrollingElement ? e.scrollingElement : t || "CSS1Compat" !== e.compatMode ? e.body : e.documentElement
}