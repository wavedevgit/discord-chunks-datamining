/** Chunk was on 38939 **/
/** chunk id: 51169, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk573750 = require("./573750.js"),
  Chunk797686 = require("./797686.js"),
  o = Chunk573750.isBrowser("IE <= 9");
module.exports = function(t) {
  var e, r = null;
  return !o && document.implementation && document.implementation.createHTMLDocument && ((e = document.implementation.createHTMLDocument("foo")).documentElement || i(false), e.documentElement.innerHTML = t, r = e.getElementsByTagName("body")[0]), r
}