/** Chunk was on web.js **/
/** chunk id: 51169, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk573750 = require("./573750.js"),
  Chunk797686 = require("./797686.js"),
  a = Chunk573750.isBrowser("IE <= 9");
module.exports = function(e) {
  var t, n = null;
  return !a && document.implementation && document.implementation.createHTMLDocument && ((t = document.implementation.createHTMLDocument("foo")).documentElement || i(false), t.documentElement.innerHTML = e, n = t.getElementsByTagName("body")[0]), n
}