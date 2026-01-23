/** Chunk was on web.js **/
/** chunk id: 84157, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r() {
  return "u" > typeof window
}

function i(e) {
  return o(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function a(e) {
  var t;
  return (null == e || null == (t = e.ownerDocument) ? true : t.defaultView) || window
}

function s(e) {
  var t;
  return null == (t = (o(e) ? e.ownerDocument : e.document) || window.document) ? true : t.documentElement
}

function o(e) {
  return !!r() && (e instanceof Node || e instanceof a(e).Node)
}

function l(e) {
  return !!r() && (e instanceof Element || e instanceof a(e).Element)
}

function c(e) {
  return !!r() && (e instanceof HTMLElement || e instanceof a(e).HTMLElement)
}

function u(e) {
  return !(!r() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof a(e).ShadowRoot)
}
require.d(exports, {
  $4: () => C,
  CP: () => T,
  L9: () => S,
  Ll: () => o,
  Lv: () => _,
  Ng: () => u,
  Tc: () => v,
  Tf: () => m,
  ZU: () => f,
  _m: () => w,
  ep: () => s,
  eu: () => I,
  gJ: () => O,
  mq: () => i,
  sQ: () => b,
  sb: () => c,
  v9: () => R,
  vq: () => l,
  zk: () => a
});
let d = new Set(["inline", "contents"]);

function f(e) {
  let {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = S(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !d.has(i)
}
let p = new Set(["table", "td", "th"]);

function _(e) {
  return p.has(i(e))
}
let h = [":popover-open", ":modal"];

function m(e) {
  return h.some(t => {
    try {
      return e.matches(t)
    } catch (e) {
      returnfalse
    }
  })
}
let g = ["transform", "translate", "scale", "rotate", "perspective"],
  E = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  y = ["paint", "layout", "strict", "content"];

function b(e) {
  let t = v(),
    n = l(e) ? S(e) : e;
  return g.some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || E.some(e => (n.willChange || "").includes(e)) || y.some(e => (n.contain || "").includes(e))
}

function O(e) {
  let t = C(e);
  for (; c(t) && !I(t);) {
    if (b(t)) return t;
    if (m(t)) break;
    t = C(t)
  }
  return null
}

function v() {
  return !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
}
let A = new Set(["html", "body", "#document"]);

function I(e) {
  return A.has(i(e))
}

function S(e) {
  return a(e).getComputedStyle(e)
}

function T(e) {
  return l(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  }
}

function C(e) {
  if ("html" === i(e)) return e;
  let t = e.assignedSlot || e.parentNode || u(e) && e.host || s(e);
  return u(t) ? t.host : t
}

function N(e) {
  let t = C(e);
  return I(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : c(t) && f(t) ? t : N(t)
}

function R(e, t, n) {
  var r;
  true === t && (t = []), true === n && (n = true);
  let i = N(e),
    s = i === (null == (r = e.ownerDocument) ? true : r.body),
    o = a(i);
  if (s) {
    let e = w(o);
    return t.concat(o, o.visualViewport || [], f(i) ? i : [], e && n ? R(e) : [])
  }
  return t.concat(i, R(i, [], n))
}

function w(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}