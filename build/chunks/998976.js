/** Chunk was on web.js **/
/** chunk id: 998976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cp: () => b,
  RR: () => m,
  X5: () => E,
  YF: () => f,
  cv: () => p,
  dp: () => g,
  dr: () => h,
  uY: () => _
});
var Chunk615673 = require("./615673.js"),
  Chunk473749 = require("./473749.js"),
  Chunk24156 = require("./24156.js"),
  o = function() {},
  s = "undefined" != typeof document ? Chunk473749.useLayoutEffect : o;

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
      reference: p,
      floating: _
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
  let [v, S] = i.useState(null), [I, T] = i.useState(null), C = i.useCallback(e => {
    e !== w.current && (w.current = e, S(e))
  }, []), A = i.useCallback(e => {
    e !== R.current && (R.current = e, T(e))
  }, []), N = p || v, P = _ || I, w = i.useRef(null), R = i.useRef(null), D = i.useRef(E), x = null != m, L = d(m), j = d(f), M = d(g), k = i.useCallback(() => {
    if (!w.current || !R.current) return;
    let e = {
      placement: t,
      strategy: n,
      middleware: y
    };
    j.current && (e.platform = j.current), (0, r.oo)(w.current, R.current, e).then(e => {
      let t = {
        ...e,
        isPositioned: false !== M.current
      };
      U.current && !l(D.current, t) && (D.current = t, a.flushSync(() => {
        b(t)
      }))
    })
  }, [y, t, n, j, M]);
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
    if (N && (w.current = N), P && (R.current = P), N && P) {
      if (L.current) return L.current(N, P, k);
      k()
    }
  }, [N, P, k, L, x]);
  let G = i.useMemo(() => ({
      reference: w,
      floating: R,
      setReference: C,
      setFloating: A
    }), [C, A]),
    Z = i.useMemo(() => ({
      reference: N,
      floating: P
    }), [N, P]),
    F = i.useMemo(() => {
      let e = {
        position: n,
        left: 0,
        top: 0
      };
      if (!Z.floating) return e;
      let t = u(Z.floating, E.x),
        r = u(Z.floating, E.y);
      return h ? {
        ...e,
        transform: "translate(" + t + "px, " + r + "px)",
        ...c(Z.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: n,
        left: t,
        top: r
      }
    }, [n, h, Z.floating, E.x, E.y]);
  return i.useMemo(() => ({
    ...E,
    update: k,
    refs: G,
    elements: Z,
    floatingStyles: F
  }), [E, k, G, Z, F])
}
let p = (e, t) => ({
    ...(0, r.cv)(e),
    options: [e, t]
  }),
  _ = (e, t) => ({
    ...(0, r.uY)(e),
    options: [e, t]
  }),
  h = (e, t) => ({
    ...(0, r.dr)(e),
    options: [e, t]
  }),
  m = (e, t) => ({
    ...(0, r.RR)(e),
    options: [e, t]
  }),
  g = (e, t) => ({
    ...(0, r.dp)(e),
    options: [e, t]
  }),
  E = (e, t) => ({
    ...(0, r.X5)(e),
    options: [e, t]
  }),
  b = (e, t) => ({
    ...(0, r.Cp)(e),
    options: [e, t]
  })