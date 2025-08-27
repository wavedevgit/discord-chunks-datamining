/** Chunk was on web.js **/
/** chunk id: 961050, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk77025 = require("./77025.js"),
  Chunk880181 = require("./880181.js"),
  Chunk527160 = require("./527160.js"),
  Chunk661314 = require("./661314.js"),
  Chunk87185 = require("./87185.js"),
  l = Chunk661314("IE_PROTO"),
  c = Object,
  u = c.prototype;
module.exports = Chunk87185 ? c.getPrototypeOf : function(e) {
  var t = a(e);
  if (r(t, l)) return t[l];
  var n = t.constructor;
  return i(n) && t instanceof n ? n.prototype : t instanceof c ? u : null
}