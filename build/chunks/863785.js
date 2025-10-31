/** Chunk was on web.js **/
/** chunk id: 863785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RR: () => h,
  X5: () => g,
  YF: () => f,
  cv: () => _,
  dp: () => m,
  uY: () => p
});
var Chunk615673 = require("./615673.js"),
  Chunk647438 = require("./647438.js"),
  Chunk603113 = require("./603113.js"),
  o = function() {},
  s = "undefined" != typeof document ? Chunk647438.useLayoutEffect : o;

function l(e, t) {
  let n, r, i;
  if (e === t) returntrue;
  if (typeof e != typeof t) returnfalse;
  if ("function" == typeof e && e.toString() === t.toString()) returntrue;
  if (e && t && "object" == typeof e) {
    if (Array.isArray(e)) {
      if ((n = e.length) !== t.length) returnfalse;
      for (r = n; 0 != r--;)
        if (!l(e[r], t[r])) returnfalse;
      returntrue
    }
    if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) returnfalse;
    for (r = n; 0 != r--;)
      if (!({}).hasOwnProperty.call(t, i[r])) returnfalse;
    for (r = n; 0 != r--;) {
      let n = i[r];
      if (("_owner" !== n || !e.$$typeof) && !l(e[n], t[n])) returnfalse
    }
    returntrue
  }
  return e != e && t != t
}

function c(e) {
  return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function u(e, t) {
  let n = c(e);
  return Math.round(t * n) / n
}

function d(e) {
  let t = i.useRef(e);
  return s(() => {
    t.current = e
  }), t
}

function f(e) {
  true === e && (e = {});
  let {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: f,
    elements: {
      reference: _,
      floating: p
    } = {},
    transform: h = true,
    whileElementsMounted: m,
    open: g
  } = e, [E, b] = i.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: false
  }), [y, O] = i.useState(o);
  l(y, o) || O(o);
  let [v, I] = i.useState(null), [T, S] = i.useState(null), A = i.useCallback(e => {
    e !== P.current && (P.current = e, I(e))
  }, []), C = i.useCallback(e => {
    e !== w.current && (w.current = e, S(e))
  }, []), N = _ || v, R = p || T, P = i.useRef(null), w = i.useRef(null), D = i.useRef(E), x = null != m, L = d(m), M = d(f), j = d(g), k = i.useCallback(() => {
    if (!P.current || !w.current) return;
    let e = {
      placement: t,
      strategy: n,
      middleware: y
    };
    M.current && (e.platform = M.current), (0, r.oo)(P.current, w.current, e).then(e => {
      let t = {
        ...e,
        isPositioned: false !== j.current
      };
      U.current && !l(D.current, t) && (D.current = t, a.flushSync(() => {
        b(t)
      }))
    })
  }, [y, t, n, M, j]);
  s(() => {
    false === g && D.current.isPositioned && (D.current.isPositioned = false, b(e => ({
      ...e,
      isPositioned: false
    })))
  }, [g]);
  let U = i.useRef(false);
  s(() => (U.current = true, () => {
    U.current = false
  }), []), s(() => {
    if (N && (P.current = N), R && (w.current = R), N && R) {
      if (L.current) return L.current(N, R, k);
      k()
    }
  }, [N, R, k, L, x]);
  let G = i.useMemo(() => ({
      reference: P,
      floating: w,
      setReference: A,
      setFloating: C
    }), [A, C]),
    B = i.useMemo(() => ({
      reference: N,
      floating: R
    }), [N, R]),
    Z = i.useMemo(() => {
      let e = {
        position: n,
        left: 0,
        top: 0
      };
      if (!B.floating) return e;
      let t = u(B.floating, E.x),
        r = u(B.floating, E.y);
      return h ? {
        ...e,
        transform: "translate(" + t + "px, " + r + "px)",
        ...c(B.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: n,
        left: t,
        top: r
      }
    }, [n, h, B.floating, E.x, E.y]);
  return i.useMemo(() => ({
    ...E,
    update: k,
    refs: G,
    elements: B,
    floatingStyles: Z
  }), [E, k, G, B, Z])
}
let _ = (e, t) => ({
    ...(0, r.cv)(e),
    options: [e, t]
  }),
  p = (e, t) => ({
    ...(0, r.uY)(e),
    options: [e, t]
  }),
  h = (e, t) => ({
    ...(0, r.RR)(e),
    options: [e, t]
  }),
  m = (e, t) => ({
    ...(0, r.dp)(e),
    options: [e, t]
  }),
  g = (e, t) => ({
    ...(0, r.X5)(e),
    options: [e, t]
  })