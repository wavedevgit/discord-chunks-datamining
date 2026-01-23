/** Chunk was on web.js **/
/** chunk id: 357786, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CM: () => g,
  EW: () => p,
  F2: () => _,
  Go: () => y,
  Jt: () => I,
  N: () => P,
  OS: () => O,
  O_: () => E,
  Qp: () => w,
  SE: () => v,
  XJ: () => R,
  YE: () => m,
  gR: () => f,
  nr: () => c,
  tZ: () => h,
  uo: () => o,
  vF: () => N,
  yV: () => D
});
var r, Chunk84157 = require("./84157.js"),
  Chunk64700 = require("./64700.js"),
  Chunk111975 = require("./111975.js");

function o() {
  let e = navigator.userAgentData;
  return null != e && e.platform ? e.platform : navigator.platform
}

function l() {
  let e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map(e => {
    let {
      brand: t,
      version: n
    } = e;
    return t + "/" + n
  }).join(" ") : navigator.userAgent
}

function c() {
  return /apple/i.test(navigator.vendor)
}
let u = null;

function d(e) {
  let t = e.activeElement;
  for (;
    (null == (n = t) || null == (n = n.shadowRoot) ? true : n.activeElement) != null;) {
    var n;
    t = t.shadowRoot.activeElement
  }
  return t
}

function f(e, t) {
  if (!e || !t) returnfalse;
  let n = null == t.getRootNode ? true : t.getRootNode();
  if (e.contains(t)) returntrue;
  if (n && (0, i.Ng)(n)) {
    let n = t;
    for (; n;) {
      if (e === n) returntrue;
      n = n.parentNode || n.host
    }
  }
  returnfalse
}

function p(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target
}

function _(e, t) {
  if (null == t) returnfalse;
  if ("composedPath" in e) return e.composedPath().includes(t);
  let n = e;
  return null != n.target && t.contains(n.target)
}

function h(e) {
  return e.matches("html,body")
}

function m(e) {
  return (null == e ? true : e.ownerDocument) || document
}

function g(e, t, n) {
  return true === n && (n = true), e.filter(e => {
    var r;
    return e.parentId === t && (!n || (null == (r = e.context) ? true : r.open))
  }).flatMap(t => [t, ...g(e, t.id, n)])
}

function E(e) {
  return "nativeEvent" in e
}

function y(e, t) {
  let n = ["mouse", "pen"];
  return t || n.push("", true), n.includes(e)
}
var b = function() {},
  O = "u" > typeof document ? Chunk64700.useLayoutEffect : b;

function v(e) {
  let t = a.useRef(e);
  return O(() => {
    t.current = e
  }), t
}
let A = {
  ...r || (r = require.t(Chunk64700, 2))
}.useInsertionEffect || (e => e());

function I(e) {
  let t = a.useRef(() => {});
  return A(() => {
    t.current = e
  }), a.useCallback(function() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return null == t.current ? true : t.current(...n)
  }, [])
}

function S(e, t, n) {
  if ("function" == typeof n) return n(t);
  if (n) return n.includes(t);
  let r = e.current[t];
  return null == r || r.hasAttribute("disabled") || "true" === r.getAttribute("aria-disabled")
}
let T = () => ({
  getShadowRoot: true,
  displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});

function C(e, t) {
  let n = (0, s.Kr)(e, T()),
    r = n.length;
  if (0 === r) return;
  let i = d(m(e)),
    a = n.indexOf(i);
  return n[false === a ? 1 === t ? 0 : r - 1 : a + t]
}

function N(e) {
  return C(m(e).body, 1) || e
}

function R(e) {
  return C(m(e).body, false) || e
}

function w(e, t) {
  let n = t || e.currentTarget,
    r = e.relatedTarget;
  return !r || !f(n, r)
}

function P(e) {
  (0, s.Kr)(e, T()).forEach(e => {
    e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
  })
}

function D(e) {
  e.querySelectorAll("[data-tabindex]").forEach(e => {
    let t = e.dataset.tabindex;
    delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
  })
}