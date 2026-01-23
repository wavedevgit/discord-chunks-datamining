/** Chunk was on web.js **/
/** chunk id: 404325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => U
}), require("./801460.js"), require("./508300.js"), require("./650828.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk240147 = require("./240147.js"),
  Chunk998304 = require("./998304.js"),
  Chunk934581 = require("./934581.js"),
  Chunk539451 = require("./539451.js");
require("./518950.js");
var Chunk783821 = require("./783821.js");
let h = 40,
  m = .5,
  g = 294,
  E = 45,
  y = 1,
  b = 4,
  O = 6,
  v = 24,
  A = 2,
  I = 4,
  S = [0, 0, 0, 0, 0],
  T = 200;

function C(e) {
  let t;
  if (null == e) return;
  try {
    t = window.atob(e)
  } catch (e) {
    return
  }
  let n = [];
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / 255;
  return n
}

function N(e, t) {
  if (null != e && null != t) {
    if (e.length < t) {
      let n = t - e.length;
      return e.concat(Array(n).fill(0))
    }
    return (0, f.A)(e, t)
  }
}

function R(e) {
  let t;
  return Math.floor(((t = e <= m ? h : e >= E ? g : (Math.min(e, E) - m) / (E - m) * (g - h) + h) + b) / O) * O - b
}

function w(e) {
  if (null == e) return;
  let t = 2 * y + b;
  return Math.floor((e + b) / t)
}

function P(e, t, n, r, i) {
  e.moveTo(t, n + i), e.lineTo(t, n + r - i), e.arc(t + i, n + r - i, i, Math.PI, 0, true), e.lineTo(t + 2 * i, n + i), e.arc(t + i, n + i, i, 0, Math.PI, true), e.closePath()
}

function D(e) {
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
    constrainMin: s
  } = e, o = s ? (v - A) * i + A : v * i;
  0 === o || P(t, a * (2 * y + b) * n, (r / 2 - o / 2) * n, o * n, y * n)
}

function L(e, t) {
  let n = i.useMemo(() => C(e), [e]),
    r = i.useMemo(() => w(t), [t]);
  return i.useMemo(() => {
    var e;
    return null != (e = N(null != n ? n : [], r)) ? e : S
  }, [n, r])
}

function j(e, t, n) {
  let [r, a] = i.useState(e), [s, o] = i.useState(e), l = i.useRef(s);
  return i.useLayoutEffect(() => {
    l.current = s
  }), i.useLayoutEffect(() => {
    a(l.current), o(e)
  }, [e, t, n]), [r, s]
}

function M(e, t) {
  let n = (0, l.rdh)(o.A.colors.BACKGROUND_MOD_MUTED).hex(),
    r = (0, l.rdh)(o.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
    i = (0, l.rdh)(o.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
    a = (0, l.rdh)(o.A.unsafe_rawColors.BRAND_430).hex(),
    s = (0, l.rdh)(o.A.unsafe_rawColors.WHITE).hex(),
    c = t ? a : n,
    [u, d] = j(c, t, e),
    [f, p] = j(t ? s : e ? i : r, t, e),
    [_, h] = j(e ? c : r, t, e);
  return {
    lastBackgroundFillColor: u,
    backgroundFillColor: d,
    lastActiveFillColor: f,
    activeFillColor: p,
    lastInactiveFillColor: _,
    inactiveFillColor: h
  }
}

function k(e, t, n, r) {
  if (null == r) return [t, false];
  let i = Math.min((n - r) / T, 1);
  return 1 === i ? [t, false] : [(0, d.De)(e, t, i), true]
}

function U(e) {
  let {
    className: t,
    waveform: n,
    currentTime: a,
    duration: o,
    played: l,
    playing: d,
    onDrag: f,
    onDragStart: h,
    onDragEnd: m
  } = e, {
    ref: g,
    width: E
  } = (0, c.Ay)(), y = i.useMemo(() => R(o), [o]), b = i.useRef(true), O = L(n, E), A = i.useRef(l), S = i.useRef(d), C = i.useRef(null), N = window.devicePixelRatio, {
    lastBackgroundFillColor: w,
    backgroundFillColor: P,
    lastActiveFillColor: j,
    activeFillColor: U,
    lastInactiveFillColor: G,
    inactiveFillColor: V
  } = M(l, d), F = {
    currentTime: a,
    duration: o,
    played: l
  }, B = i.useRef(F);
  i.useEffect(() => {
    B.current = F
  }), i.useEffect(() => {
    let {
      currentTime: e,
      duration: t,
      played: n
    } = B.current, r = D({
      showAll: !n,
      currentTime: e,
      duration: t,
      numSegments: O.length
    });
    b.current = O.map((e, t) => new p.A(t < r ? e : 0))
  }, [O]), i.useEffect(() => {
    let e = b.current;
    if (null == e) return;
    let t = D({
      showAll: !l,
      currentTime: a,
      duration: o,
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
  }, [O, a, o, l]), i.useEffect(() => {
    let e = null;

    function t(n) {
      let r = g.current,
        i = null == r ? true : r.getContext("2d"),
        a = b.current;
      if (null == r || null == i || null == a) return;
      let s = false;
      (A.current !== l || S.current !== d) && (A.current = l, S.current = d, C.current = n), null != C.current && n > C.current + T && (C.current = null);
      let o = r.height / N;
      i.clearRect(0, 0, r.width, r.height), i.beginPath();
      let [c, u] = k(w, P, n, C.current);
      s = s || u, i.fillStyle = c;
      for (let e = 0; e < O.length; e++) x({
        context: i,
        devicePixelRatio: N,
        canvasHeight: o,
        segmentValue: O[e],
        segmentIndex: e,
        constrainMin: true
      });
      i.fill();
      let [f, p] = k(G, V, n, C.current);
      s = s || p;
      let [_, h] = k(j, U, n, C.current);
      s = s || h;
      for (let e = 0; e < a.length; e++) {
        let t = a[e],
          n = Math.max(t.getCurrentValue(), O[e] - .1);
        i.beginPath(), i.fillStyle = t.isReset ? f : _, x({
          context: i,
          devicePixelRatio: N,
          canvasHeight: o,
          segmentValue: n,
          segmentIndex: e,
          constrainMin: !t.isReset
        }), s = s || t.isAnimating(), i.fill()
      }
      s && (e = requestAnimationFrame(t))
    }
    return e = requestAnimationFrame(t), () => {
      null != e && cancelAnimationFrame(e)
    }
  }, [g, N, O, E, a, o, l, d, w, P, j, U, G, V]);
  let [, H] = (0, u.A)({
    ref: g,
    onDrag: f,
    onDragStart: h,
    onDragEnd: m
  });
  return (0, r.jsx)("canvas", {
    onMouseDown: H,
    className: s()(_.J, t),
    style: {
      width: y
    },
    ref: g,
    height: (v + 2 * I) * window.devicePixelRatio,
    width: (null != E ? E : 0) * window.devicePixelRatio
  })
}