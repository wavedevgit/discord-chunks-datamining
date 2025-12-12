/** Chunk was on web.js **/
/** chunk id: 249252, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk169774 = require("./169774.js"),
  Chunk581079 = require("./581079.js"),
  a = Chunk169774.isBrowser("IE <= 9");
module.exports = function(e) {
  var t, n = null;
  return !a && document.implementation && document.implementation.createHTMLDocument && ((t = document.implementation.createHTMLDocument("foo")).documentElement || i(false), t.documentElement.innerHTML = e, n = t.getElementsByTagName("body")[0]), n
}