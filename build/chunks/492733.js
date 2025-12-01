/** Chunk was on web.js **/
/** chunk id: 492733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GL: () => a,
  Jq: () => i,
  O0: () => m,
  U5: () => E,
  XG: () => s,
  hE: () => b,
  iA: () => l,
  kb: () => h,
  l1: () => u,
  np: () => o,
  oY: () => p
});
var Chunk134994 = require("./134994.js");
let i = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
  a = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
  o = (e, t) => e << 32 - t | e >>> t,
  s = (e, t) => e << t | e >>> 32 - t >>> 0,
  l = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
  c = e => e << 24 & 0xff000000 | e << 8 & 0xff0000 | e >>> 8 & 65280 | e >>> 24 & 255;

function u(e) {
  for (let t = 0; t < e.length; t++) e[t] = c(e[t])
}
let d = null,
  f = async () => {};
async function p(e, t, n) {
  let r = Date.now();
  for (let i = 0; i < e; i++) {
    n(i);
    let e = Date.now() - r;
    e >= 0 && e < t || (await f(), r += e)
  }
}

function _(e) {
  if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e))
}

function m(e) {
  return "string" == typeof e && (e = _(e)), (0, r.aI)(e), e
}
class h {
  clone() {
    return this._cloneInto()
  }
}
let g = {}.toString;

function E(e, t) {
  if (true !== t && "[object Object]" !== g.call(t)) throw Error("Options should be object or undefined");
  return Object.assign(e, t)
}

function b(e) {
  let t = t => e().update(m(t)).digest(),
    n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t
}