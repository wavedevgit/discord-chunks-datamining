/** Chunk was on web.js **/
/** chunk id: 396533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js");

function o(e) {
  let {
    key: t,
    isExpanded: n,
    durationMs: o = 100,
    minHeightOverride: s,
    maxHeightOverride: l,
    maxAnimationHeight: c
  } = e, u = (0, i.bG)([a.A], () => a.A.useReducedMotion), [d, f] = r.useState(null), p = r.useCallback(() => {}, []), _ = u ? p : f, h = r.useRef(null), m = r.useRef(null), g = r.useRef(t), E = r.useRef(o);
  E.current = o;
  let y = r.useRef(s);
  y.current = s;
  let b = r.useRef(l);
  b.current = l;
  let O = r.useRef(c);
  O.current = c;
  let [v, A] = r.useState(false), I = r.useCallback(() => A(false), []);
  return r.useLayoutEffect(() => {
    true !== t && (h.current = null, m.current = null, A(false))
  }, [t]), r.useLayoutEffect(() => {
    var e, r, i;
    if (null == d) return;
    let {
      height: a
    } = d.getBoundingClientRect();
    !n && (null == h.current || a < h.current) && (h.current = a), n && (null == m.current || a > m.current) && (m.current = a);
    let o = null != (e = y.current) ? e : h.current,
      s = null != (r = b.current) ? r : m.current,
      l = g.current !== t;
    if (g.current = t, null == o || null == s || l) return;
    let c = Math.min(null != (i = O.current) ? i : s, s),
      u = n ? o : c,
      f = n ? c : o;
    if (u === f) return;
    A(true), d.style.height = "".concat(u, "px"), d.style.transition = "";
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