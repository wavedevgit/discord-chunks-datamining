/** Chunk was on web.js **/
/** chunk id: 42756, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk210140 = require("./210140.js"),
  Chunk339626 = require("./339626.js"),
  Chunk250594 = require("./250594.js"),
  Chunk583178 = require("./583178.js"),
  Chunk77958 = require("./77958.js"),
  l = Chunk583178("IE_PROTO"),
  c = Object,
  u = c.prototype;
module.exports = Chunk77958 ? c.getPrototypeOf : function(e) {
  var t = a(e);
  if (r(t, l)) return t[l];
  var n = t.constructor;
  return i(n) && t instanceof n ? n.prototype : t instanceof c ? u : null
}