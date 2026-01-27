/** Chunk was on web.js **/
/** chunk id: 123789, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  if (!e) throw Error(t)
}
require.d(exports, {
  bn: () => c,
  e1: () => u,
  vA: () => r,
  wO: () => d
});
let i = 34028234663852886e22,
  a = false,
  o = 0xffffffff,
  s = 0x7fffffff,
  l = false;

function c(e) {
  if ("number" != typeof e) throw Error("invalid int 32: " + typeof e);
  if (!Number.isInteger(e) || e > s || e < l) throw Error("invalid int 32: " + e)
}

function u(e) {
  if ("number" != typeof e) throw Error("invalid uint 32: " + typeof e);
  if (!Number.isInteger(e) || e > o || e < 0) throw Error("invalid uint 32: " + e)
}

function d(e) {
  if ("number" != typeof e) throw Error("invalid float 32: " + typeof e);
  if (Number.isFinite(e) && (e > i || e < a)) throw Error("invalid float 32: " + e)
}