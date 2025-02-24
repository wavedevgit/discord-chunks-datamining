/** Chunk was on web.js **/
"use strict";

function r(e, t) {
  if (!e) throw Error(t)
}
n.d(t, {
  E_: () => d,
  fp: () => u,
  hu: () => r,
  ug: () => c
});
let i = 34028234663852886e22,
  o = -34028234663852886e22,
  a = 0xffffffff,
  s = 0x7fffffff,
  l = -0x80000000;

function c(e) {
  if ("number" != typeof e) throw Error("invalid int 32: " + typeof e);
  if (!Number.isInteger(e) || e > s || e < l) throw Error("invalid int 32: " + e)
}

function u(e) {
  if ("number" != typeof e) throw Error("invalid uint 32: " + typeof e);
  if (!Number.isInteger(e) || e > a || e < 0) throw Error("invalid uint 32: " + e)
}

function d(e) {
  if ("number" != typeof e) throw Error("invalid float 32: " + typeof e);
  if (Number.isFinite(e) && (e > i || e < o)) throw Error("invalid float 32: " + e)
}