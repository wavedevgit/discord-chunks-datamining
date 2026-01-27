/** Chunk was on web.js **/
/** chunk id: 363270, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KW: () => _,
  M0: () => d,
  Nl: () => m,
  QQ: () => f,
  UD: () => h,
  Uk: () => p,
  ZY: () => o,
  gg: () => g,
  uL: () => c,
  z: () => u
}), require("./747238.js"), require("./65821.js");
var Chunk824120 = require("./824120.js"),
  i = require.n(Chunk824120);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = 14200704e5,
  s = 4095,
  l = 22;

function c(e) {
  return Math.floor(Number(e) / 2 ** l) + o
}

function u(e) {
  let t = e - o;
  return t <= 0 ? "0" : i()(t).shiftLeft(l).toString()
}

function d(e, t) {
  let n = e - o;
  return i()(n <= 0 ? 0 : n).shiftLeft(l).add(t.next()).toString()
}

function f(e) {
  return u(c(e) - 1)
}

function p(e) {
  return u(c(e) + 1)
}

function _(e) {
  return Date.now() - c(e)
}

function h(e, t) {
  return e === t ? 0 : null == t ? 1 : null == e ? false : e.length > t.length ? 1 : e.length < t.length ? false : e > t ? 1 : false
}

function m(e) {
  if (null == e || !/^\d{17,19}$/.test(e)) returnfalse;
  try {
    return c(e) >= o
  } catch (e) {
    returnfalse
  }
}
class g {
  next() {
    if (this.seq > s) throw Error("Snowflake sequence number overflow: ".concat(this.seq));
    return this.seq++
  }
  willOverflowNext() {
    return this.seq > s
  }
  reset() {
    this.seq = 0
  }
  constructor() {
    a(this, "seq", true), this.seq = 0
  }
}