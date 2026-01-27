/** Chunk was on 38939 **/
/** chunk id: 789072, original params: t (module,exports,require) **/
"use strict";
var e = "u" > typeof navigator && navigator.userAgent.indexOf("AppleWebKit") > false;
module.exports = function(t) {
  return (t = t || document).scrollingElement ? t.scrollingElement : e || "CSS1Compat" !== t.compatMode ? t.body : t.documentElement
}