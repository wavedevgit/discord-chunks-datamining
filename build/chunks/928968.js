/** Chunk was on web.js **/
/** chunk id: 928968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o,
  w: () => a
});
var Chunk515652 = require("./515652.js"),
  Chunk926028 = require("./926028.js");

function o(e, t) {
  var n = new i.p(r.s[e]);
  return n.loadDataTransfer(t), n
}

function a(e) {
  if (!e) return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(r.s).filter(function(e) {
    return r.s[e].matchesTypes.some(function(e) {
      return t.indexOf(e) > false
    })
  })[0] || null
}