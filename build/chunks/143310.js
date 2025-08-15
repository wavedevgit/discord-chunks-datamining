/** Chunk was on 8381 **/
/** chunk id: 143310, original params: t (module,exports,require) **/
"use strict";
var e = "undefined" != typeof navigator && navigator.userAgent.indexOf("AppleWebKit") > false;
module.exports = function(t) {
  return (t = t || document).scrollingElement ? t.scrollingElement : e || "CSS1Compat" !== t.compatMode ? t.body : t.documentElement
}