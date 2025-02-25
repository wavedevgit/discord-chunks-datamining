/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => G
}), n(866573), n(642549), n(787622), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(692547),
  l = n(481060),
  c = n(393238),
  u = n(206678),
  d = n(302221),
  f = n(328187),
  p = n(607889),
  _ = n(94432),
  h = n(512497);
let m = 40,
  g = _.e3 / 1e3,
  E = 294,
  v = 45,
  b = 1,
  y = 4,
  O = 6,
  S = 24,
  I = 2,
  T = 4,
  N = [0, 0, 0, 0, 0],
  A = 200;

function C(e) {
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
  return Math.floor(((t = e <= g ? m : e >= v ? E : (Math.min(e, v) - g) / (v - g) * (E - m) + m) + y) / O) * O - y
}

function D(e) {
  if (null == e) return;
  let t = 2 * b + y;
  return Math.floor((e + y) / t)
}

function w(e, t, n, r, i) {
  e.moveTo(t, n + i), e.lineTo(t, n + r - i), e.arc(t + i, n + r - i, i, Math.PI, 0, !0), e.lineTo(t + 2 * i, n + i), e.arc(t + i, n + i, i, 0, Math.PI, !0), e.closePath()
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
    segmentIndex: o,
    constrainMin: a
  } = e, s = a ? (S - I) * i + I : S * i;
  0 !== s && w(t, o * (2 * b + y) * n, (r / 2 - s / 2) * n, s * n, b * n)
}

function M(e, t) {
  let n = i.useMemo(() => C(e), [e]),
    r = i.useMemo(() => D(t), [t]);
  return i.useMemo(() => {
    var e;
    return null !== (e = R(null != n ? n : [], r)) && void 0 !== e ? e : N
  }, [n, r])
}

function j(e, t, n) {
  let [r, o] = i.useState(e), [a, s] = i.useState(e), l = i.useRef(a);
  return i.useLayoutEffect(() => {
    l.current = a
  }), i.useLayoutEffect(() => {
    o(l.current), s(e)
  }, [e, t, n]), [r, a]
}

function k(e, t) {
  let n = (0, l.dQu)(s.Z.colors.INTERACTIVE_MUTED).hex(),
    r = (0, l.dQu)(s.Z.colors.INTERACTIVE_NORMAL).hex(),
    i = (0, l.dQu)(s.Z.colors.INTERACTIVE_ACTIVE).hex(),
    o = (0, l.dQu)(s.Z.unsafe_rawColors.BRAND_430).hex(),
    a = (0, l.dQu)(s.Z.unsafe_rawColors.WHITE_500).hex(),
    c = t ? o : n,
    [u, d] = j(c, t, e),
    [f, p] = j(t ? a : e ? i : r, t, e),
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

function U(e, t, n, r) {
  if (null == r) return [t, !1];
  let i = Math.min((n - r) / A, 1);
  return 1 === i ? [t, !1] : [(0, d.BM)(e, t, i), !0]
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
    onDragEnd: m
  } = e, {
    ref: g,
    width: E
  } = (0, c.Z)(), v = i.useMemo(() => P(s), [s]), b = i.useRef(), y = M(n, E), O = i.useRef(l), I = i.useRef(d), N = i.useRef(null), C = window.devicePixelRatio, {
    lastBackgroundFillColor: R,
    backgroundFillColor: D,
    lastActiveFillColor: w,
    activeFillColor: j,
    lastInactiveFillColor: G,
    inactiveFillColor: B
  } = k(l, d), F = {
    currentTime: o,
    duration: s,
    played: l
  }, V = i.useRef(F);
  i.useEffect(() => {
    V.current = F
  }), i.useEffect(() => {
    let {
      currentTime: e,
      duration: t,
      played: n
    } = V.current, r = L({
      showAll: !n,
      currentTime: e,
      duration: t,
      numSegments: y.length
    });
    b.current = y.map((e, t) => new p.Z(t < r ? e : 0))
  }, [y]), i.useEffect(() => {
    let e = b.current;
    if (null == e) return;
    let t = L({
      showAll: !l,
      currentTime: o,
      duration: s,
      numSegments: y.length
    });
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (n < t) {
        r.animateTo(y[n]);
        continue
      }
      r.reset()
    }
  }, [y, o, s, l]), i.useEffect(() => {
    let e = null;

    function t(n) {
      let r = g.current,
        i = null == r ? void 0 : r.getContext("2d"),
        o = b.current;
      if (null == r || null == i || null == o) return;
      let a = !1;
      (O.current !== l || I.current !== d) && (O.current = l, I.current = d, N.current = n), null != N.current && n > N.current + A && (N.current = null);
      let s = r.height / C;
      i.clearRect(0, 0, r.width, r.height), i.beginPath();
      let [c, u] = U(R, D, n, N.current);
      a = a || u, i.fillStyle = c;
      for (let e = 0; e < y.length; e++) x({
        context: i,
        devicePixelRatio: C,
        canvasHeight: s,
        segmentValue: y[e],
        segmentIndex: e,
        constrainMin: !0
      });
      i.fill();
      let [f, p] = U(G, B, n, N.current);
      a = a || p;
      let [_, h] = U(w, j, n, N.current);
      a = a || h;
      for (let e = 0; e < o.length; e++) {
        let t = o[e],
          n = Math.max(t.getCurrentValue(), y[e] - .1);
        i.beginPath(), i.fillStyle = t.isReset ? f : _, x({
          context: i,
          devicePixelRatio: C,
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
  }, [g, C, y, E, o, s, l, d, R, D, w, j, G, B]);
  let [, Z] = (0, u.Z)({
    ref: g,
    onDrag: f,
    onDragStart: _,
    onDragEnd: m
  });
  return (0, r.jsx)("canvas", {
    onMouseDown: Z,
    className: a()(h.canvas, t),
    style: {
      width: v
    },
    ref: g,
    height: (S + 2 * T) * window.devicePixelRatio,
    width: (null != E ? E : 0) * window.devicePixelRatio
  })
}