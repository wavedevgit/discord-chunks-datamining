/** Chunk was on 3020 **/
/** chunk id: 500949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $R: () => K,
  A0: () => et,
  GU: () => Y,
  H8: () => X,
  HI: () => J,
  HW: () => B,
  Ib: () => eo,
  KB: () => eu,
  S2: () => V,
  W6: () => ea,
  XM: () => ei,
  YC: () => ep,
  YE: () => er,
  h9: () => es,
  iw: () => en,
  jC: () => H,
  jQ: () => G,
  lT: () => q,
  rd: () => ed,
  t4: () => ec,
  uF: () => em,
  zn: () => Q
}), require("./467055.js"), require("./388685.js"), require("./35282.js"), require("./539854.js");
var a, i, Chunk647438 = require("./647438.js"),
  Chunk216397 = require("./216397.js"),
  Chunk764160 = require("./764160.js"),
  Chunk808131 = require("./808131.js"),
  Chunk757028 = require("./757028.js"),
  Chunk694626 = require("./694626.js"),
  Chunk855930 = require("./855930.js"),
  Chunk385787 = require("./385787.js"),
  Chunk566162 = require("./566162.js"),
  Chunk567027 = require("./567027.js"),
  Chunk461195 = require("./461195.js"),
  Chunk857702 = require("./857702.js"),
  Chunk20450 = require("./20450.js"),
  Chunk312976 = require("./312976.js"),
  Chunk147591 = require("./147591.js"),
  Chunk135164 = require("./135164.js"),
  Chunk940172 = require("./940172.js"),
  Chunk81011 = require("./81011.js"),
  Chunk981613 = require("./981613.js"),
  Chunk762399 = require("./762399.js"),
  Chunk232112 = require("./232112.js"),
  Chunk53796 = require("./53796.js"),
  Chunk723757 = require("./723757.js"),
  Chunk375924 = require("./375924.js"),
  Chunk596136 = require("./596136.js"),
  Chunk341901 = require("./341901.js"),
  Chunk856308 = require("./856308.js"),
  Chunk665352 = require("./665352.js"),
  Chunk394900 = require("./394900.js"),
  Chunk661105 = require("./661105.js"),
  Chunk525169 = require("./525169.js"),
  Chunk433517 = require("./433517.js"),
  Chunk521904 = require("./521904.js"),
  Chunk231338 = require("./231338.js");

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let B = {
    sRGB: Chunk216397.Z,
    A98RGB: Chunk764160.Z,
    ACEScc: Chunk808131.Z,
    ACEScg: Chunk757028.Z,
    HPLuv: Chunk694626.Z,
    HSL: Chunk855930.Z,
    HSLuv: Chunk385787.Z,
    HSV: Chunk566162.Z,
    HWB: Chunk567027.Z,
    ICTCP: Chunk461195.Z,
    JzCzHz: Chunk857702.Z,
    Jzazbz: Chunk20450.Z,
    LCH: Chunk312976.Z,
    LCHuv: Chunk147591.Z,
    Lab: Chunk135164.Z,
    Lab_D65: Chunk940172.Z,
    Luv: Chunk81011.Z,
    OKLCH: Chunk981613.Z,
    OKLab: Chunk762399.Z,
    P3: Chunk232112.Z,
    ProPhoto: Chunk53796.Z,
    REC_2020: Chunk723757.Z,
    REC_2100_HLG: Chunk375924.Z,
    REC_2100_PQ: Chunk596136.Z,
    XYZ_D50: Chunk341901.Z,
    XYZ_D65: Chunk856308.Z
  },
  G = Object.fromEntries(Object.keys(B).map(e => [e, e]));
Object.values(B).forEach(e => k.Z.register(e));
let {
  SemanticColors: z
} = Chunk521904.V, H = z, V = CSS.supports("color", "color(display-p3 1 0 0)") && CSS.supports("color", "color(display-p3 1 0 0 / 1)");

function W(e, t) {
  let [n, a] = l.useState(() => {
    let n = D.K.get(e);
    return null != n ? n : t
  });
  return l.useEffect(() => {
    D.K.set(e, n)
  }, [e, n]), [n, a]
}

function K(e) {
  let t = H[e];
  return {
    name: e,
    colors: Object.fromEntries(Object.values(M.BR).map(e => [e, {
      color: t[e].raw,
      opacity: t[e].opacity
    }])),
    highlight: false
  }
}

function q(e, t, n, a, i) {
  return {
    name: t,
    colors: F(U({}, e.colors), {
      [i]: {
        color: n,
        opacity: a
      }
    }),
    highlight: false
  }
}

function Y(e) {
  return F(U({}, e), {
    highlight: !e.highlight
  })
}

function J(e) {
  return (0, A.Z)((0, R.Z)(e, r.Z), {
    format: "hex"
  })
}
var X = ((a = {}).TOKENS = "Tokens", a.PALETTES = "Palettes", a);

function Q() {
  return function(e, t) {
    let [n, a] = W("".concat(e, "-states"), [t]), [i, r] = W("".concat(e, "-index"), 0), s = n[i], o = l.useCallback(e => {
      a(["function" == typeof e ? e(s) : e, ...n].slice(0, 20)), r(0)
    }, [r, a, n, s]), c = l.useCallback(() => {
      r(Math.min(n.length - 1, i + 1))
    }, [i, r, n.length]), d = l.useCallback(() => {
      r(Math.max(0, i - 1))
    }, [i, r]);
    return [s, o, c, d, i < n.length - 1, i > 0]
  }("color-override-9-24-2024", {
    semanticColorOverrides: {},
    rawColorOverrides: {},
    tab: "Tokens",
    scales: []
  })
}
let $ = [100, 130, 160, 200, 230, 260, 300, 330, 345, 360, 400, 430, 460, 500, 530, 560, 600, 630, 660, 700, 730, 760, 800, 830, 860, 900],
  ee = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

function et(e) {
  return "plum" === e ? ee : $
}
var en = ((i = {}).LINEAR = "Linear", i.EASE_IN = "Ease In", i.EASE_OUT = "Ease Out", i.EASE_IN_OUT = "Ease In Out", i);

function ea(e, t) {
  let n = et(t),
    a = Object.keys(e).map(e => parseInt(e.split("-")[1])),
    i = Math.max(...a) / (n.length - 1),
    l = {};
  return n.forEach((e, n) => {
    let r = Math.round(n * i),
      s = a.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e);
    l["".concat(t, "-").concat(s)] = "".concat(t, "-").concat(e)
  }), l
}

function ei(e) {
  let {
    name: t,
    base: n,
    steps: a = 26,
    darkness: i,
    lightness: l,
    easingStrength: s = 1
  } = e, o = B[e.colorSpace], c = (0, R.Z)(n, o), d = (0, Z.CD)(c, "white", 1 - i, {
    space: o,
    outputSpace: r.Z
  }), u = (0, Z.CD)(c, "black", 1 - l, {
    space: o,
    outputSpace: r.Z
  }), m = Math.floor(a / 2), p = a - m, h = (0, Z.w6)(d, c, {
    steps: m,
    outputSpace: o,
    space: o,
    progression: e => e ** s
  }), x = (0, Z.w6)(u, c, {
    steps: p,
    outputSpace: o,
    space: o,
    progression: e => e ** s
  }), g = [];
  for (let e = 0; e < m; e++) {
    let t = h(e / m);
    g.push(t)
  }
  g.push(c);
  for (let e = 1; e < p; e++) {
    let t = x(1 - e / p);
    g.push(t)
  }
  return Object.fromEntries(g.map((e, n) => ["".concat(t, "-").concat(n), e]))
}

function el(e, t, n) {
  n(n => null == n.scales.find(t => t.name === e) ? n : F(U({}, n), {
    scales: n.scales.map(n => n.name === e ? t(n) : n)
  }))
}

function er(e, t, n) {
  el(e, e => F(U({}, e), {
    darkness: t
  }), n)
}

function es(e, t, n) {
  el(e, e => F(U({}, e), {
    lightness: t
  }), n)
}

function eo(e, t, n) {
  el(e, e => F(U({}, e), {
    base: t
  }), n)
}

function ec(e, t, n) {
  el(e, e => F(U({}, e), {
    colorSpace: t
  }), n)
}

function ed(e, t, n) {
  el(e, e => F(U({}, e), {
    easingStrength: t
  }), n)
}

function eu(e, t, n) {
  el(e, e => F(U({}, e), {
    showColumnarPalettePreview: t
  }), n)
}

function em(e, t, n) {
  el(e, e => F(U({}, e), {
    useP3ColorSpace: t
  }), n)
}

function ep(e, t, n) {
  el(e, e => F(U({}, e), {
    steps: t
  }), n)
}