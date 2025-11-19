/** Chunk was on web.js **/
/** chunk id: 347312, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk206678 = require("./206678.js"),
  Chunk302221 = require("./302221.js"),
  Chunk328187 = require("./328187.js"),
  Chunk607889 = require("./607889.js"),
  Chunk94432 = require("./94432.js"),
  Chunk588900 = require("./588900.js");
let m = 40,
  g = Chunk94432.e3 / 1e3,
  E = 294,
  b = 45,
  y = 1,
  O = 4,
  v = 6,
  I = 24,
  T = 2,
  S = 4,
  A = [0, 0, 0, 0, 0],
  C = 200;

function N(e) {
  let t;
  if (null == e) return;
  try {
    t = window.atob(e)
  } catch (e) {
    return
  }
  let n = [];
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / p.Xi;
  return n
}

function R(e, t) {
  if (null != e && null != t) {
    if (e.length < t) {
      let n = t - e.length;
      return e.concat(Array(n).fill(0))
    }
    return (0, f.Z)(e, t)
  }
}

function P(e) {
  let t;
  return Math.floor(((t = e <= g ? m : e >= b ? E : (Math.min(e, b) - g) / (b - g) * (E - m) + m) + O) / v) * v - O
}

function D(e) {
  if (null == e) return;
  let t = 2 * y + O;
  return Math.floor((e + O) / t)
}

function w(e, t, n, r, i) {
  e.moveTo(t, n + i), e.lineTo(t, n + r - i), e.arc(t + i, n + r - i, i, Math.PI, 0, true), e.lineTo(t + 2 * i, n + i), e.arc(t + i, n + i, i, 0, Math.PI, true), e.closePath()
}

function L(e) {
  let {
    showAll: t,
    currentTime: n,
    duration: r,
    numSegments: i
  } = e;
  return t ? i : Math.max(0, Math.round(n / r * i))
}

function x(e) {
  let {
    context: t,
    devicePixelRatio: n,
    canvasHeight: r,
    segmentValue: i,
    segmentIndex: a,
    constrainMin: o
  } = e, s = o ? (I - T) * i + T : I * i;
  0 !== s && w(t, a * (2 * y + O) * n, (r / 2 - s / 2) * n, s * n, y * n)
}

function M(e, t) {
  let n = i.useMemo(() => N(e), [e]),
    r = i.useMemo(() => D(t), [t]);
  return i.useMemo(() => {
    var e;
    return null != (e = R(null != n ? n : [], r)) ? e : A
  }, [n, r])
}

function j(e, t, n) {
  let [r, a] = i.useState(e), [o, s] = i.useState(e), l = i.useRef(o);
  return i.useLayoutEffect(() => {
    l.current = o
  }), i.useLayoutEffect(() => {
    a(l.current), s(e)
  }, [e, t, n]), [r, o]
}

function k(e, t) {
  let n = (0, l.dQu)(s.Z.colors.INTERACTIVE_MUTED).hex(),
    r = (0, l.dQu)(s.Z.colors.INTERACTIVE_NORMAL).hex(),
    i = (0, l.dQu)(s.Z.colors.INTERACTIVE_ACTIVE).hex(),
    a = (0, l.dQu)(s.Z.unsafe_rawColors.BRAND_430).hex(),
    o = (0, l.dQu)(s.Z.unsafe_rawColors.WHITE_500).hex(),
    c = t ? a : n,
    [u, d] = j(c, t, e),
    [f, _] = j(t ? o : e ? i : r, t, e),
    [p, h] = j(e ? c : r, t, e);
  return {
    lastBackgroundFillColor: u,
    backgroundFillColor: d,
    lastActiveFillColor: f,
    activeFillColor: _,
    lastInactiveFillColor: p,
    inactiveFillColor: h
  }
}

function U(e, t, n, r) {
  if (null == r) return [t, false];
  let i = Math.min((n - r) / C, 1);
  return 1 === i ? [t, false] : [(0, d.BM)(e, t, i), true]
}

function G(e) {
  let {
    className: t,
    waveform: n,
    currentTime: a,
    duration: s,
    played: l,
    playing: d,
    onDrag: f,
    onDragStart: p,
    onDragEnd: m
  } = e, {
    ref: g,
    width: E
  } = (0, c.ZP)(), b = i.useMemo(() => P(s), [s]), y = i.useRef(true), O = M(n, E), v = i.useRef(l), T = i.useRef(d), A = i.useRef(null), N = window.devicePixelRatio, {
    lastBackgroundFillColor: R,
    backgroundFillColor: D,
    lastActiveFillColor: w,
    activeFillColor: j,
    lastInactiveFillColor: G,
    inactiveFillColor: B
  } = k(l, d), Z = {
    currentTime: a,
    duration: s,
    played: l
  }, F = i.useRef(Z);
  i.useEffect(() => {
    F.current = Z
  }), i.useEffect(() => {
    let {
      currentTime: e,
      duration: t,
      played: n
    } = F.current, r = L({
      showAll: !n,
      currentTime: e,
      duration: t,
      numSegments: O.length
    });
    y.current = O.map((e, t) => new _.Z(t < r ? e : 0))
  }, [O]), i.useEffect(() => {
    let e = y.current;
    if (null == e) return;
    let t = L({
      showAll: !l,
      currentTime: a,
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
  }, [O, a, s, l]), i.useEffect(() => {
    let e = null;

    function t(n) {
      let r = g.current,
        i = null == r ? true : r.getContext("2d"),
        a = y.current;
      if (null == r || null == i || null == a) return;
      let o = false;
      (v.current !== l || T.current !== d) && (v.current = l, T.current = d, A.current = n), null != A.current && n > A.current + C && (A.current = null);
      let s = r.height / N;
      i.clearRect(0, 0, r.width, r.height), i.beginPath();
      let [c, u] = U(R, D, n, A.current);
      o = o || u, i.fillStyle = c;
      for (let e = 0; e < O.length; e++) x({
        context: i,
        devicePixelRatio: N,
        canvasHeight: s,
        segmentValue: O[e],
        segmentIndex: e,
        constrainMin: true
      });
      i.fill();
      let [f, _] = U(G, B, n, A.current);
      o = o || _;
      let [p, h] = U(w, j, n, A.current);
      o = o || h;
      for (let e = 0; e < a.length; e++) {
        let t = a[e],
          n = Math.max(t.getCurrentValue(), O[e] - .1);
        i.beginPath(), i.fillStyle = t.isReset ? f : p, x({
          context: i,
          devicePixelRatio: N,
          canvasHeight: s,
          segmentValue: n,
          segmentIndex: e,
          constrainMin: !t.isReset
        }), o = o || t.isAnimating(), i.fill()
      }
      o && (e = requestAnimationFrame(t))
    }
    return e = requestAnimationFrame(t), () => {
      null != e && cancelAnimationFrame(e)
    }
  }, [g, N, O, E, a, s, l, d, R, D, w, j, G, B]);
  let [, V] = (0, u.Z)({
    ref: g,
    onDrag: f,
    onDragStart: p,
    onDragEnd: m
  });
  return (0, r.jsx)("canvas", {
    onMouseDown: V,
    className: o()(h.canvas, t),
    style: {
      width: b
    },
    ref: g,
    height: (I + 2 * S) * window.devicePixelRatio,
    width: (null != E ? E : 0) * window.devicePixelRatio
  })
}