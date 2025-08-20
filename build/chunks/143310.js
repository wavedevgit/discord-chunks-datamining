/** Chunk was on web.js **/
/** chunk id: 143310, original params: e (module,exports,re quire) **/
"use strict";
var t = "undefined" != typeof navigator && navigator.userAgent.indexOf("AppleWebKit") > false;
module.exports = function(e) {
  return (e = e || document).scrollingElement ? e.scrollingElement : t || "CSS1Compat" !== e.compatMode ? e.body : e.documentElement
}