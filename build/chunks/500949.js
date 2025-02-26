/** Chunk was on 93886 **/
n.d(t, {
  $R: () => X,
  A0: () => et,
  GU: () => K,
  H8: () => q,
  HI: () => J,
  HW: () => z,
  Ib: () => es,
  KB: () => eu,
  S2: () => H,
  W6: () => er,
  XM: () => ea,
  YC: () => eh,
  YE: () => el,
  h9: () => eo,
  iw: () => en,
  jC: () => U,
  jQ: () => G,
  lT: () => Y,
  rd: () => ed,
  t4: () => ec,
  uF: () => em,
  zn: () => $
}), n(977457), n(47120), n(301563), n(653041);
var r, a, i = n(192379),
  l = n(216397),
  o = n(764160),
  s = n(808131),
  c = n(757028),
  d = n(694626),
  u = n(855930),
  m = n(385787),
  h = n(566162),
  x = n(567027),
  f = n(461195),
  p = n(857702),
  b = n(20450),
  _ = n(312976),
  g = n(147591),
  v = n(135164),
  j = n(940172),
  y = n(81011),
  C = n(981613),
  N = n(762399),
  T = n(232112),
  O = n(53796),
  E = n(723757),
  S = n(375924),
  I = n(596136),
  k = n(341901),
  w = n(856308),
  Z = n(665352),
  P = n(394900),
  R = n(661105),
  L = n(525169),
  A = n(433517),
  D = n(190558),
  B = n(231338);

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let z = {
    sRGB: l.Z,
    A98RGB: o.Z,
    ACEScc: s.Z,
    ACEScg: c.Z,
    HPLuv: d.Z,
    HSL: u.Z,
    HSLuv: m.Z,
    HSV: h.Z,
    HWB: x.Z,
    ICTCP: f.Z,
    JzCzHz: p.Z,
    Jzazbz: b.Z,
    LCH: _.Z,
    LCHuv: g.Z,
    Lab: v.Z,
    Lab_D65: j.Z,
    Luv: y.Z,
    OKLCH: C.Z,
    OKLab: N.Z,
    P3: T.Z,
    ProPhoto: O.Z,
    REC_2020: E.Z,
    REC_2100_HLG: S.Z,
    REC_2100_PQ: I.Z,
    XYZ_D50: k.Z,
    XYZ_D65: w.Z
  },
  G = Object.fromEntries(Object.keys(z).map(e => [e, e]));
Object.values(z).forEach(e => Z.Z.register(e));
let {
  SemanticColors: W
} = D.V, U = W, H = CSS.supports("color", "color(display-p3 1 0 0)") && CSS.supports("color", "color(display-p3 1 0 0 / 1)");

function V(e, t) {
  let [n, r] = i.useState(() => {
    let n = A.K.get(e);
    return null != n ? n : t
  });
  return i.useEffect(() => {
    A.K.set(e, n)
  }, [e, n]), [n, r]
}

function X(e) {
  let t = U[e];
  return {
    name: e,
    colors: Object.fromEntries(Object.values(B.BR).map(e => [e, {
      color: t[e].raw,
      opacity: t[e].opacity
    }])),
    highlight: !1
  }
}

function Y(e, t, n, r, a) {
  return {
    name: t,
    colors: F(M({}, e.colors), {
      [a]: {
        color: n,
        opacity: r
      }
    }),
    highlight: !1
  }
}

function K(e) {
  return F(M({}, e), {
    highlight: !e.highlight
  })
}

function J(e) {
  return (0, P.Z)((0, R.Z)(e, l.Z), {
    format: "hex"
  })
}
var q = ((r = {}).TOKENS = "Tokens", r.PALETTES = "Palettes", r);

function $() {
  return function(e, t) {
    let [n, r] = V("".concat(e, "-states"), [t]), [a, l] = V("".concat(e, "-index"), 0), o = n[a], s = i.useCallback(e => {
      r(["function" == typeof e ? e(o) : e, ...n].slice(0, 20)), l(0)
    }, [l, r, n, o]), c = i.useCallback(() => {
      l(Math.min(n.length - 1, a + 1))
    }, [a, l, n.length]), d = i.useCallback(() => {
      l(Math.max(0, a - 1))
    }, [a, l]);
    return [o, s, c, d, a < n.length - 1, a > 0]
  }("color-override-9-24-2024", {
    semanticColorOverrides: {},
    rawColorOverrides: {},
    tab: "Tokens",
    scales: []
  })
}
let Q = [100, 130, 160, 200, 230, 260, 300, 330, 345, 360, 400, 430, 460, 500, 530, 560, 600, 630, 660, 700, 730, 760, 800, 830, 860, 900],
  ee = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

function et(e) {
  return "plum" === e ? ee : Q
}
var en = ((a = {}).LINEAR = "Linear", a.EASE_IN = "Ease In", a.EASE_OUT = "Ease Out", a.EASE_IN_OUT = "Ease In Out", a);

function er(e, t) {
  let n = et(t),
    r = Object.keys(e).map(e => parseInt(e.split("-")[1])),
    a = Math.max(...r) / (n.length - 1),
    i = {};
  return n.forEach((e, n) => {
    let l = Math.round(n * a),
      o = r.reduce((e, t) => Math.abs(t - l) < Math.abs(e - l) ? t : e);
    i["".concat(t, "-").concat(o)] = "".concat(t, "-").concat(e)
  }), i
}

function ea(e) {
  let {
    name: t,
    base: n,
    steps: r = 26,
    darkness: a,
    lightness: i,
    easingStrength: o = 1
  } = e, s = z[e.colorSpace], c = (0, R.Z)(n, s), d = (0, L.CD)(c, "white", 1 - a, {
    space: s,
    outputSpace: l.Z
  }), u = (0, L.CD)(c, "black", 1 - i, {
    space: s,
    outputSpace: l.Z
  }), m = Math.floor(r / 2), h = r - m, x = (0, L.w6)(d, c, {
    steps: m,
    outputSpace: s,
    space: s,
    progression: e => e ** o
  }), f = (0, L.w6)(u, c, {
    steps: h,
    outputSpace: s,
    space: s,
    progression: e => e ** o
  }), p = [];
  for (let e = 0; e < m; e++) {
    let t = x(e / m);
    p.push(t)
  }
  p.push(c);
  for (let e = 1; e < h; e++) {
    let t = f(1 - e / h);
    p.push(t)
  }
  return Object.fromEntries(p.map((e, n) => ["".concat(t, "-").concat(n), e]))
}

function ei(e, t, n) {
  n(n => null == n.scales.find(t => t.name === e) ? n : F(M({}, n), {
    scales: n.scales.map(n => n.name === e ? t(n) : n)
  }))
}

function el(e, t, n) {
  ei(e, e => F(M({}, e), {
    darkness: t
  }), n)
}

function eo(e, t, n) {
  ei(e, e => F(M({}, e), {
    lightness: t
  }), n)
}

function es(e, t, n) {
  ei(e, e => F(M({}, e), {
    base: t
  }), n)
}

function ec(e, t, n) {
  ei(e, e => F(M({}, e), {
    colorSpace: t
  }), n)
}

function ed(e, t, n) {
  ei(e, e => F(M({}, e), {
    easingStrength: t
  }), n)
}

function eu(e, t, n) {
  ei(e, e => F(M({}, e), {
    showColumnarPalettePreview: t
  }), n)
}

function em(e, t, n) {
  ei(e, e => F(M({}, e), {
    useP3ColorSpace: t
  }), n)
}

function eh(e, t, n) {
  ei(e, e => F(M({}, e), {
    steps: t
  }), n)
}