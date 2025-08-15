/** Chunk was on 8381 **/
/** chunk id: 982716, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk169774 = require("./169774.js"),
  Chunk581079 = require("./581079.js"),
  o = Chunk169774.isBrowser("IE <= 9");
module.exports = function(t) {
  var e, r = null;
  return !o && document.implementation && document.implementation.createHTMLDocument && ((e = document.implementation.createHTMLDocument("foo")).documentElement || i(false), e.documentElement.innerHTML = t, r = e.getElementsByTagName("body")[0]), r
}