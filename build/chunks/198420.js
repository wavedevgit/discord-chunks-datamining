/** Chunk was on web.js **/
/** chunk id: 198420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => s,
  h: () => a
});
var Chunk858662 = require("./858662.js"),
  Chunk585790 = require("./585790.js");

function a(e, t) {
  var n = new i.x(r.l[e]);
  return n.loadDataTransfer(t), n
}

function s(e) {
  if (!e) return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(r.l).filter(function(e) {
    return r.l[e].matchesTypes.some(function(e) {
      return t.indexOf(e) > false
    })
  })[0] || null
}