/** Chunk was on web.js **/
/** chunk id: 515718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EW: () => A,
  LZ: () => T,
  NN: () => C,
  S4: () => b,
  Sf: () => y,
  U8: () => f,
  Uj: () => c,
  V: () => p,
  We: () => v,
  aU: () => S,
  bX: () => I,
  eJ: () => _,
  wU: () => h,
  z$: () => d
}), require("./321073.js"), require("./747238.js"), require("./801460.js"), require("./508300.js"), require("./650828.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./65821.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk531325 = require("./531325.js"),
  l = require.n(Chunk531325);

function c(e) {
  let {
    width: t,
    height: n,
    maxWidth: r,
    maxHeight: i,
    minWidth: a = 0,
    minHeight: s = 0
  } = e;
  if (t !== r || n !== i) {
    let e = t > r ? r / t : 1;
    t = Math.max(Math.round(t * e), a);
    let o = (n = Math.max(Math.round(n * e), s)) > i ? i / n : 1;
    t = Math.max(Math.round(t * o), a), n = Math.max(Math.round(n * o), s)
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
  let s = 1;
  return (n = Math.round(n * a)) > i && (s = i / n), Math.min(a * s, 1)
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

function h(e) {
  return null == e || "" === e ? "none" : "url(".concat(e, ")")
}

function m(e, t, n) {
  let r = [];
  for (let i = 0, a, s, o, l, c; i < t; i += n) s = e[(a = 4 * i) + 0], o = e[a + 1], l = e[a + 2], (true === (c = e[a + 3]) || c >= 125) && !(s > 250 && o > 250 && l > 250) && r.push([s, o, l]);
  return r
}
let g = [
    [0, 0, 0]
  ],
  E = 128;

function y(e, t, n) {
  let r = document.createElement("canvas"),
    i = r.getContext("2d");
  if (null == i) return g;
  let a = r.width = 0 === e.width ? E : e.width,
    s = r.height = 0 === e.height ? E : e.height;
  i.drawImage(e, 0, 0, a, s);
  let o = m(i.getImageData(0, 0, a, s).data, a * s, n),
    c = l()(o, t);
  return "boolean" == typeof c ? g : c.palette()
}
let b = e => "number" == typeof e ? null : O(e),
  O = s().memoize(e => new Promise((t, n) => {
    let r = new Image;
    r.crossOrigin = "Anonymous", r.onerror = e => {
      n(e), r.onerror = r.onload = null, r = null
    }, r.onload = () => {
      t(y(r, 5, 10)), r.onerror = r.onload = null, r = null
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

function A(e) {
  let t = e.split(";base64,");
  return i()(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
}
async function I(e, t, n) {
  let r = S(e);
  return new File([await r.arrayBuffer()], t, {
    type: n
  })
}

function S(e) {
  let t;
  t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
  let n = e.split(",")[0].split(":")[1].split(";")[0],
    r = new Uint8Array(t.length);
  for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
  return new Blob([r], {
    type: n
  })
}
async function T(e) {
  var t;
  if ("image/png" !== (null == (t = e.type) ? true : t.split(";")[0])) throw Error("File is not a PNG");
  let n = await e.text(),
    r = n.indexOf("IDAT");
  return !!(r > 0) && false !== n.substring(0, r).indexOf("acTL")
}

function C(e) {
  return new Promise((t, n) => {
    let r = new Image;
    r.addEventListener("load", t), r.addEventListener("error", n), r.src = e
  })
}