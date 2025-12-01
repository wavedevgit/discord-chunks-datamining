/** Chunk was on web.js **/
/** chunk id: 733387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  El: () => m,
  II: () => y,
  MM: () => h,
  Me: () => _,
  Pe: () => f,
  U9: () => d,
  Xf: () => o,
  Xj: () => b,
  ex: () => p,
  iW: () => v,
  r: () => g,
  r3: () => u
});
var r, Chunk274676 = require("./274676.js"),
  Chunk473749 = require("./473749.js");

function o() {
  let e = navigator.userAgentData;
  return null != module && module.platform ? module.platform : navigator.platform
}

function s() {
  let e = navigator.userAgentData;
  return module && Array.isArray(module.brands) ? module.brands.map(e => {
    let {
      brand: t,
      version: n
    } = e;
    return t + "/" + n
  }).join(" ") : navigator.userAgent
}
let l = null;

function c(e) {
  let t = e.activeElement;
  for (;
    (null == (n = t) || null == (n = n.shadowRoot) ? true : n.activeElement) != null;) {
    var n;
    t = t.shadowRoot.activeElement
  }
  return t
}

function u(e, t) {
  if (!e || !t) returnfalse;
  let n = null == t.getRootNode ? true : t.getRootNode();
  if (e.contains(t)) returntrue;
  if (n && (0, i.Zq)(n)) {
    let n = t;
    for (; n;) {
      if (e === n) returntrue;
      n = n.parentNode || n.host
    }
  }
  returnfalse
}

function d(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target
}

function f(e, t) {
  if (null == t) returnfalse;
  if ("composedPath" in e) return e.composedPath().includes(t);
  let n = e;
  return null != n.target && t.contains(n.target)
}

function p(e) {
  return e.matches("html,body")
}

function _(e) {
  return (null == e ? true : e.ownerDocument) || document
}

function m(e, t, n) {
  return true === n && (n = true), e.filter(e => {
    var r;
    return e.parentId === t && (!n || (null == (r = e.context) ? true : r.open))
  }).flatMap(t => [t, ...m(e, t.id, n)])
}

function h(e) {
  return "nativeEvent" in e
}

function g(e, t) {
  let n = ["mouse", "pen"];
  return t || n.push("", true), n.includes(e)
}
var E = function() {},
  b = "undefined" != typeof document ? Chunk473749.useLayoutEffect : E;

function y(e) {
  let t = a.useRef(e);
  return b(() => {
    t.current = e
  }), t
}
let O = {
  ...r || (r = require.t(Chunk473749, 2))
}.useInsertionEffect || (e => e());

function v(e) {
  let t = a.useRef(() => {});
  return O(() => {
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
let I = () => ({
  getShadowRoot: true,
  displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
})