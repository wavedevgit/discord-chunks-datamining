/** Chunk was on web.js **/
/** chunk id: 520315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js");

function a(e) {
  let {
    key: t,
    isExpanded: n,
    durationMs: a = 100,
    minHeightOverride: s,
    maxHeightOverride: l,
    maxAnimationHeight: c
  } = e, u = (0, i.e7)([o.Z], () => o.Z.useReducedMotion), [d, f] = r.useState(null), p = r.useCallback(() => {}, []), _ = u ? p : f, m = r.useRef(null), h = r.useRef(null), g = r.useRef(t), E = r.useRef(a);
  E.current = a;
  let b = r.useRef(s);
  b.current = s;
  let y = r.useRef(l);
  y.current = l;
  let O = r.useRef(c);
  O.current = c;
  let [v, S] = r.useState(false), I = r.useCallback(() => S(false), []);
  return r.useLayoutEffect(() => {
    true !== t && (m.current = null, h.current = null, S(false))
  }, [t]), r.useLayoutEffect(() => {
    var e, r, i;
    if (null == d) return;
    let {
      height: o
    } = d.getBoundingClientRect();
    !n && (null == m.current || o < m.current) && (m.current = o), n && (null == h.current || o > h.current) && (h.current = o);
    let a = null != (e = b.current) ? e : m.current,
      s = null != (r = y.current) ? r : h.current,
      l = g.current !== t;
    if (g.current = t, null == a || null == s || l) return;
    let c = Math.min(null != (i = O.current) ? i : s, s),
      u = n ? a : c,
      f = n ? c : a;
    if (u === f) return;
    S(true), d.style.height = "".concat(u, "px"), d.style.transition = "";
    let p = null;
    return p = requestAnimationFrame(() => {
      p = null, d.style.height = "".concat(f, "px"), d.style.transition = "height ".concat(E.current, "ms ease-in-out")
    }), () => null != p ? cancelAnimationFrame(p) : true
  }, [t, d, n]), r.useLayoutEffect(() => {
    null == d || v || (d.style.height = "", d.style.transition = "")
  }, [t, d, v]), {
    ref: _,
    isTransitioning: v,
    onTransitionEnd: I
  }
}