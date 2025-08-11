/** Chunk was on web.js **/
/** chunk id: 470883, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BA: () => u,
  DX: () => f,
  _j: () => l,
  aK: () => c,
  dq: () => s
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk699516 = require("./699516.js"),
  Chunk823379 = require("./823379.js");

function s(e, t) {
  return e.filter(e => (0, a.lm)(e)).filter(e => !(null != t ? t.includes(e.id) : o.Z.isBlockedOrIgnored(e.id)))
}

function l(e, t) {
  return e.filter(e => !(null != t ? t.includes(e) : o.Z.isBlockedOrIgnored(e)))
}

function c(e) {
  return e.filter(e => !o.Z.isBlockedOrIgnored(e.ownerId))
}

function u(e, t) {
  return e.some(e => null != t ? t.includes(e) : o.Z.isBlockedOrIgnored(e))
}

function d(e) {
  return o.Z.isBlockedOrIgnored(e.userId)
}

function f(e) {
  return i()(e).filter(e => !d(e)).keyBy("userId").value()
}