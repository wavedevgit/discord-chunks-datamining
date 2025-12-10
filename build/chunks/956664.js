/** Chunk was on web.js **/
/** chunk id: 956664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bo: () => I,
  Dc: () => f,
  OF: () => y,
  QB: () => S,
  Tj: () => c,
  XN: () => b,
  _H: () => _,
  c0: () => C,
  fD: () => v,
  kD: () => T,
  pt: () => A,
  rn: () => p,
  rv: () => m,
  zp: () => d
}), require("./539854.js"), require("./35282.js"), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk950200 = require("./950200.js"),
  l = require.n(Chunk950200);

function c(e) {
  let {
    width: t,
    height: n,
    maxWidth: r,
    maxHeight: i,
    minWidth: a = 0,
    minHeight: o = 0
  } = e;
  if (t !== r || n !== i) {
    let e = t > r ? r / t : 1;
    t = Math.max(Math.round(t * e), a);
    let s = (n = Math.max(Math.round(n * e), o)) > i ? i / n : 1;
    t = Math.max(Math.round(t * s), a), n = Math.max(Math.round(n * s), o)
  }
  return {
    width: t,
    height: n
  }
}
let u = 2e3;

function d(e, t) {
  let n = Math.min(Math.round(.65 * window.innerHeight), Math.round(window.innerHeight)),
    r = Math.min(Math.round(.75 * window.innerWidth), Math.round(window.innerWidth)),
    i = Math.min(n, u);
  return c({
    width: e,
    height: t,
    maxWidth: Math.min(r, u),
    maxHeight: i
  })
}

function f(e) {
  let {
    width: t,
    height: n,
    maxWidth: r,
    maxHeight: i
  } = e, a = 1;
  t > r && (a = r / t), t = Math.round(t * a);
  let o = 1;
  return (n = Math.round(n * a)) > i && (o = i / n), Math.min(a * o, 1)
}

function p(e) {
  let {
    width: t,
    height: n,
    maxWidth: r,
    maxHeight: i
  } = e;
  return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1)
}

function _(e) {
  let {
    width: t,
    height: n
  } = e;
  return null != t && 0 !== t && null != n && 0 !== n
}

function m(e) {
  return null == e || "" === e ? "none" : "url(".concat(e, ")")
}

function h(e, t, n) {
  let r = [];
  for (let i = 0, a, o, s, l, c; i < t; i += n) o = e[(a = 4 * i) + 0], s = e[a + 1], l = e[a + 2], (true === (c = e[a + 3]) || c >= 125) && !(o > 250 && s > 250 && l > 250) && r.push([o, s, l]);
  return r
}
let g = [
    [0, 0, 0]
  ],
  E = 128;

function b(e, t, n) {
  let r = document.createElement("canvas"),
    i = r.getContext("2d");
  if (null == i) return g;
  let a = r.width = 0 === e.width ? E : e.width,
    o = r.height = 0 === e.height ? E : e.height;
  i.drawImage(e, 0, 0, a, o);
  let s = h(i.getImageData(0, 0, a, o).data, a * o, n),
    c = l()(s, t);
  return "boolean" == typeof c ? g : c.palette()
}
let y = e => "number" == typeof e ? null : O(e),
  O = o().memoize(e => new Promise((t, n) => {
    let r = new Image;
    r.crossOrigin = "Anonymous", r.onerror = e => {
      n(e), r.onerror = r.onload = null, r = null
    }, r.onload = () => {
      t(b(r, 5, 10)), r.onerror = r.onload = null, r = null
    }, r.src = e
  }));

function v(e) {
  return new Promise((t, n) => {
    let r = new FileReader;
    r.readAsDataURL(e), r.onload = () => {
      i()("string" == typeof r.result, "Result must be a string"), t(r.result)
    }, r.onerror = e => n(e)
  })
}

function S(e) {
  let t = e.split(";base64,");
  return i()(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
}
async function I(e, t, n) {
  let r = T(e);
  return new File([await r.arrayBuffer()], t, {
    type: n
  })
}

function T(e) {
  let t;
  t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
  let n = e.split(",")[0].split(":")[1].split(";")[0],
    r = new Uint8Array(t.length);
  for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
  return new Blob([r], {
    type: n
  })
}
async function C(e) {
  var t;
  if ("image/png" !== (null == (t = e.type) ? true : t.split(";")[0])) throw Error("File is not a PNG");
  let n = await e.text(),
    r = n.indexOf("IDAT");
  return !!(r > 0) && false !== n.substring(0, r).indexOf("acTL")
}

function A(e) {
  return new Promise((t, n) => {
    let r = new Image;
    r.addEventListener("load", t), r.addEventListener("error", n), r.src = e
  })
}