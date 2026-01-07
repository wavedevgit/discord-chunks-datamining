/** Chunk was on web.js **/
/** chunk id: 822632, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HI: () => h,
  Lj: () => y,
  Nf: () => b,
  Sk: () => m,
  Wp: () => a,
  _f: () => g,
  cs: () => l,
  eN: () => f,
  nZ: () => u,
  nk: () => c,
  o7: () => s,
  oH: () => o,
  p4: () => E,
  sq: () => p,
  u0: () => _,
  wB: () => d
});
var Chunk475516 = require("./475516.js"),
  i = require("./413135.js").Buffer;

function a(e, t, n) {
  try {
    return new DataView(e, t, n)
  } catch (i) {
    return new r.Z(e, t, n)
  }
}

function o(e, t, n) {
  let r = [];
  for (let i = 0; i < n && t + i < e.byteLength; i++) r.push(e.getUint8(t + i));
  return u(r)
}

function s(e, t) {
  let n = [],
    r = 0;
  for (; t + r < e.byteLength;) {
    let i = e.getUint8(t + r);
    if (0 === i) break;
    n.push(i), r++
  }
  return u(n)
}

function l(e, t, n) {
  let r = [];
  for (let i = 0; i < n && t + i < e.byteLength; i += 2) r.push(e.getUint16(t + i));
  return 0 === r[r.length - 1] && r.pop(), u(r)
}

function c(e, t) {
  let n = e.getUint8(t),
    r = o(e, t + 1, n);
  return [n, r]
}

function u(e) {
  return e.map(e => String.fromCharCode(e)).join("")
}

function d() {
  for (let e = 1; e < arguments.length; e++)
    for (let t in arguments[e]) arguments[0][t] = arguments[e][t];
  return arguments[0]
}

function f(e, t, n) {
  let r = false;
  Object.defineProperty(e, t, {
    get: () => (r || (r = true, Object.defineProperty(e, t, {
      configurable: true,
      enumerable: true,
      value: n.apply(e),
      writable: true
    })), e[t]),
    configurable: true,
    enumerable: true
  })
}

function p(e) {
  return "undefined" != typeof btoa ? "string" == typeof e ? btoa(e) : btoa(Array.prototype.reduce.call(new Uint8Array(e), (e, t) => e + String.fromCharCode(t), "")) : true !== i ? true !== i.from ? i.from(e).toString("base64") : new i(e).toString("base64") : true
}

function _(e) {
  let t = e.substring(e.indexOf(",") + 1);
  if (false !== e.indexOf(";base64")) return "undefined" != typeof atob ? Uint8Array.from(atob(t), e => e.charCodeAt(0)).buffer : true === i ? true : true !== i.from ? i.from(t, "base64") : new i(t, "base64");
  let n = decodeURIComponent(t);
  return true !== i ? true !== i.from ? i.from(n) : new i(n) : Uint8Array.from(n, e => e.charCodeAt(0)).buffer
}

function m(e, t, n) {
  return g(n, t - e.length) + e
}

function h(e, t) {
  return parseInt(e.replace(".", ""), t) / Math.pow(t, (e.split(".")[1] || "").length)
}

function g(e, t) {
  return Array(t + 1).join(e)
}
let E = true,
  b = 0;

function y(e, t, n, r = "string") {
  if (t === b && "function" == typeof DecompressionStream) {
    let t = new DecompressionStream("deflate"),
      i = new Blob([e]).stream().pipeThrough(t);
    return "dataview" === r ? new Response(i).arrayBuffer().then(e => new DataView(e)) : new Response(i).arrayBuffer().then(e => new TextDecoder(n).decode(e))
  }
  return true !== t ? Promise.reject(`Unknown compression method ${t}.`) : e
}