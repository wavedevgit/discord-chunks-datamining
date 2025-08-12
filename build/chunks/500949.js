/** Chunk was on 93886 **/
/** chunk id: 500949, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  $R: () => K,
  A0: () => et,
  GU: () => Y,
  H8: () => q,
  HI: () => J,
  HW: () => U,
  Ib: () => eo,
  KB: () => eu,
  S2: () => H,
  W6: () => en,
  XM: () => er,
  YC: () => ex,
  YE: () => ei,
  h9: () => es,
  iw: () => ea,
  jC: () => V,
  jQ: () => z,
  lT: () => X,
  rd: () => ed,
  t4: () => ec,
  uF: () => em,
  zn: () => $
}), require("./467055.js"), require("./388685.js"), require("./35282.js"), require("./539854.js");
var n, r, Chunk73800 = require("./73800.js"),
  Chunk216397 = require("./216397.js"),
  Chunk764160 = require("./764160.js"),
  Chunk808131 = require("./808131.js"),
  Chunk757028 = require("./757028.js"),
  Chunk694626 = require("./694626.js"),
  Chunk855930 = require("./855930.js"),
  Chunk385787 = require("./385787.js"),
  Chunk205513 = require("./205513.js"),
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

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      a.push.apply(a, n)
    }
    return a
  })(Object(t)).forEach(function(a) {
    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
  }), e
}
let U = {
    sRGB: Chunk216397.Z,
    A98RGB: Chunk764160.Z,
    ACEScc: Chunk808131.Z,
    ACEScg: Chunk757028.Z,
    HPLuv: Chunk694626.Z,
    HSL: Chunk855930.Z,
    HSLuv: Chunk385787.Z,
    HSV: Chunk205513.Z,
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
  z = Object.fromEntries(Object.keys(U).map(e => [e, e]));
Object.values(U).forEach(e => k.Z.register(e));
let {
  SemanticColors: G
} = Chunk521904.V, V = G, H = CSS.supports("color", "color(display-p3 1 0 0)") && CSS.supports("color", "color(display-p3 1 0 0 / 1)");

function W(e, t) {
  let [a, n] = l.useState(() => {
    let a = D.K.get(e);
    return null != a ? a : t
  });
  return l.useEffect(() => {
    D.K.set(e, a)
  }, [e, a]), [a, n]
}

function K(e) {
  let t = V[e];
  return {
    name: e,
    colors: Object.fromEntries(Object.values(B.BR).map(e => [e, {
      color: t[e].raw,
      opacity: t[e].opacity
    }])),
    highlight: false
  }
}

function X(e, t, a, n, r) {
  return {
    name: t,
    colors: F(M({}, e.colors), {
      [r]: {
        color: a,
        opacity: n
      }
    }),
    highlight: false
  }
}

function Y(e) {
  return F(M({}, e), {
    highlight: !e.highlight
  })
}

function J(e) {
  return (0, R.Z)((0, Z.Z)(e, i.Z), {
    format: "hex"
  })
}
var q = ((n = {}).TOKENS = "Tokens", n.PALETTES = "Palettes", n);

function $() {
  return function(e, t) {
    let [a, n] = W("".concat(e, "-states"), [t]), [r, i] = W("".concat(e, "-index"), 0), s = a[r], o = l.useCallback(e => {
      n(["function" == typeof e ? e(s) : e, ...a].slice(0, 20)), i(0)
    }, [i, n, a, s]), c = l.useCallback(() => {
      i(Math.min(a.length - 1, r + 1))
    }, [r, i, a.length]), d = l.useCallback(() => {
      i(Math.max(0, r - 1))
    }, [r, i]);
    return [s, o, c, d, r < a.length - 1, r > 0]
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
var ea = ((r = {}).LINEAR = "Linear", r.EASE_IN = "Ease In", r.EASE_OUT = "Ease Out", r.EASE_IN_OUT = "Ease In Out", r);

function en(e, t) {
  let a = et(t),
    n = Object.keys(e).map(e => parseInt(e.split("-")[1])),
    r = Math.max(...n) / (a.length - 1),
    l = {};
  return a.forEach((e, a) => {
    let i = Math.round(a * r),
      s = n.reduce((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e);
    l["".concat(t, "-").concat(s)] = "".concat(t, "-").concat(e)
  }), l
}

function er(e) {
  let {
    name: t,
    base: a,
    steps: n = 26,
    darkness: r,
    lightness: l,
    easingStrength: s = 1
  } = e, o = U[e.colorSpace], c = (0, Z.Z)(a, o), d = (0, A.CD)(c, "white", 1 - r, {
    space: o,
    outputSpace: i.Z
  }), u = (0, A.CD)(c, "black", 1 - l, {
    space: o,
    outputSpace: i.Z
  }), m = Math.floor(n / 2), x = n - m, h = (0, A.w6)(d, c, {
    steps: m,
    outputSpace: o,
    space: o,
    progression: e => e ** s
  }), p = (0, A.w6)(u, c, {
    steps: x,
    outputSpace: o,
    space: o,
    progression: e => e ** s
  }), b = [];
  for (let e = 0; e < m; e++) {
    let t = h(e / m);
    b.push(t)
  }
  b.push(c);
  for (let e = 1; e < x; e++) {
    let t = p(1 - e / x);
    b.push(t)
  }
  return Object.fromEntries(b.map((e, a) => ["".concat(t, "-").concat(a), e]))
}

function el(e, t, a) {
  a(a => null == a.scales.find(t => t.name === e) ? a : F(M({}, a), {
    scales: a.scales.map(a => a.name === e ? t(a) : a)
  }))
}

function ei(e, t, a) {
  el(e, e => F(M({}, e), {
    darkness: t
  }), a)
}

function es(e, t, a) {
  el(e, e => F(M({}, e), {
    lightness: t
  }), a)
}

function eo(e, t, a) {
  el(e, e => F(M({}, e), {
    base: t
  }), a)
}

function ec(e, t, a) {
  el(e, e => F(M({}, e), {
    colorSpace: t
  }), a)
}

function ed(e, t, a) {
  el(e, e => F(M({}, e), {
    easingStrength: t
  }), a)
}

function eu(e, t, a) {
  el(e, e => F(M({}, e), {
    showColumnarPalettePreview: t
  }), a)
}

function em(e, t, a) {
  el(e, e => F(M({}, e), {
    useP3ColorSpace: t
  }), a)
}

function ex(e, t, a) {
  el(e, e => F(M({}, e), {
    steps: t
  }), a)
}