/** Chunk was on web.js **/
/** chunk id: 347312, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk206678 = require("./206678.js"),
  Chunk302221 = require("./302221.js"),
  Chunk328187 = require("./328187.js"),
  Chunk607889 = require("./607889.js"),
  Chunk94432 = require("./94432.js"),
  Chunk784506 = require("./784506.js");
let h = 40,
  g = Chunk94432.e3 / 1e3,
  E = 294,
  b = 45,
  y = 1,
  O = 4,
  v = 6,
  S = 24,
  I = 2,
  T = 4,
  C = [0, 0, 0, 0, 0],
  A = 200;

function N(e) {
  let t;
  if (null == e) return;
  try {
    t = window.atob(e)
  } catch (e) {
    return
  }
  let n = [];
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / _.Xi;
  return n
}

function P(e, t) {
  if (null != e && null != t) {
    if (e.length < t) {
      let n = t - e.length;
      return e.concat(Array(n).fill(0))
    }
    return (0, f.Z)(e, t)
  }
}

function R(e) {
  let t;
  return Math.floor(((t = e <= g ? h : e >= b ? E : (Math.min(e, b) - g) / (b - g) * (E - h) + h) + O) / v) * v - O
}

function w(e) {
  if (null == e) return;
  let t = 2 * y + O;
  return Math.floor((e + O) / t)
}

function D(e, t, n, r, i) {
  e.moveTo(t, n + i), e.lineTo(t, n + r - i), e.arc(t + i, n + r - i, i, Math.PI, 0, true), e.lineTo(t + 2 * i, n + i), e.arc(t + i, n + i, i, 0, Math.PI, true), e.closePath()
}

function x(e) {
  let {
    showAll: t,
    currentTime: n,
    duration: r,
    numSegments: i
  } = e;
  return t ? i : Math.max(0, Math.round(n / r * i))
}

function L(e) {
  let {
    context: t,
    devicePixelRatio: n,
    canvasHeight: r,
    segmentValue: i,
    segmentIndex: o,
    constrainMin: a
  } = e, s = a ? (S - I) * i + I : S * i;
  0 !== s && D(t, o * (2 * y + O) * n, (r / 2 - s / 2) * n, s * n, y * n)
}

function j(e, t) {
  let n = i.useMemo(() => N(e), [e]),
    r = i.useMemo(() => w(t), [t]);
  return i.useMemo(() => {
    var e;
    return null != (e = P(null != n ? n : [], r)) ? e : C
  }, [n, r])
}

function M(e, t, n) {
  let [r, o] = i.useState(e), [a, s] = i.useState(e), l = i.useRef(a);
  return i.useLayoutEffect(() => {
    l.current = a
  }), i.useLayoutEffect(() => {
    o(l.current), s(e)
  }, [e, t, n]), [r, a]
}

function k(e, t) {
  let n = (0, l.dQu)(s.Z.colors.INTERACTIVE_MUTED).hex(),
    r = (0, l.dQu)(s.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
    i = (0, l.dQu)(s.Z.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
    o = (0, l.dQu)(s.Z.unsafe_rawColors.BRAND_430).hex(),
    a = (0, l.dQu)(s.Z.unsafe_rawColors.WHITE_500).hex(),
    c = t ? o : n,
    [u, d] = M(c, t, e),
    [f, p] = M(t ? a : e ? i : r, t, e),
    [_, m] = M(e ? c : r, t, e);
  return {
    lastBackgroundFillColor: u,
    backgroundFillColor: d,
    lastActiveFillColor: f,
    activeFillColor: p,
    lastInactiveFillColor: _,
    inactiveFillColor: m
  }
}

function U(e, t, n, r) {
  if (null == r) return [t, false];
  let i = Math.min((n - r) / A, 1);
  return 1 === i ? [t, false] : [(0, d.BM)(e, t, i), true]
}

function G(e) {
  let {
    className: t,
    waveform: n,
    currentTime: o,
    duration: s,
    played: l,
    playing: d,
    onDrag: f,
    onDragStart: _,
    onDragEnd: h
  } = e, {
    ref: g,
    width: E
  } = (0, c.ZP)(), b = i.useMemo(() => R(s), [s]), y = i.useRef(true), O = j(n, E), v = i.useRef(l), I = i.useRef(d), C = i.useRef(null), N = window.devicePixelRatio, {
    lastBackgroundFillColor: P,
    backgroundFillColor: w,
    lastActiveFillColor: D,
    activeFillColor: M,
    lastInactiveFillColor: G,
    inactiveFillColor: Z
  } = k(l, d), F = {
    currentTime: o,
    duration: s,
    played: l
  }, B = i.useRef(F);
  i.useEffect(() => {
    B.current = F
  }), i.useEffect(() => {
    let {
      currentTime: e,
      duration: t,
      played: n
    } = B.current, r = x({
      showAll: !n,
      currentTime: e,
      duration: t,
      numSegments: O.length
    });
    y.current = O.map((e, t) => new p.Z(t < r ? e : 0))
  }, [O]), i.useEffect(() => {
    let e = y.current;
    if (null == e) return;
    let t = x({
      showAll: !l,
      currentTime: o,
      duration: s,
      numSegments: O.length
    });
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (n < t) {
        r.animateTo(O[n]);
        continue
      }
      r.reset()
    }
  }, [O, o, s, l]), i.useEffect(() => {
    let e = null;

    function t(n) {
      let r = g.current,
        i = null == r ? true : r.getContext("2d"),
        o = y.current;
      if (null == r || null == i || null == o) return;
      let a = false;
      (v.current !== l || I.current !== d) && (v.current = l, I.current = d, C.current = n), null != C.current && n > C.current + A && (C.current = null);
      let s = r.height / N;
      i.clearRect(0, 0, r.width, r.height), i.beginPath();
      let [c, u] = U(P, w, n, C.current);
      a = a || u, i.fillStyle = c;
      for (let e = 0; e < O.length; e++) L({
        context: i,
        devicePixelRatio: N,
        canvasHeight: s,
        segmentValue: O[e],
        segmentIndex: e,
        constrainMin: true
      });
      i.fill();
      let [f, p] = U(G, Z, n, C.current);
      a = a || p;
      let [_, m] = U(D, M, n, C.current);
      a = a || m;
      for (let e = 0; e < o.length; e++) {
        let t = o[e],
          n = Math.max(t.getCurrentValue(), O[e] - .1);
        i.beginPath(), i.fillStyle = t.isReset ? f : _, L({
          context: i,
          devicePixelRatio: N,
          canvasHeight: s,
          segmentValue: n,
          segmentIndex: e,
          constrainMin: !t.isReset
        }), a = a || t.isAnimating(), i.fill()
      }
      a && (e = requestAnimationFrame(t))
    }
    return e = requestAnimationFrame(t), () => {
      null != e && cancelAnimationFrame(e)
    }
  }, [g, N, O, E, o, s, l, d, P, w, D, M, G, Z]);
  let [, V] = (0, u.Z)({
    ref: g,
    onDrag: f,
    onDragStart: _,
    onDragEnd: h
  });
  return (0, r.jsx)("canvas", {
    onMouseDown: V,
    className: a()(m.canvas, t),
    style: {
      width: b
    },
    ref: g,
    height: (S + 2 * T) * window.devicePixelRatio,
    width: (null != E ? E : 0) * window.devicePixelRatio
  })
}