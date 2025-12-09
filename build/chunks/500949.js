/** Chunk was on 53950 **/
/** chunk id: 500949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $R: () => q,
  A0: () => et,
  GU: () => Q,
  H8: () => X,
  HI: () => Y,
  HW: () => F,
  Ib: () => eo,
  KB: () => eu,
  S2: () => W,
  W6: () => ea,
  XM: () => er,
  YC: () => ep,
  YE: () => el,
  h9: () => es,
  iw: () => en,
  jC: () => H,
  jQ: () => G,
  lT: () => K,
  rd: () => ed,
  t4: () => ec,
  uF: () => em,
  zn: () => J
}), require("./467055.js"), require("./388685.js"), require("./35282.js"), require("./539854.js");
var a, r, Chunk473749 = require("./473749.js"),
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

function B(e, t) {
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
let F = {
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
  G = Object.fromEntries(Object.keys(F).map(e => [e, e]));
Object.values(F).forEach(e => k.Z.register(e));
let {
  SemanticColors: V
} = Chunk521904.V, H = V, W = CSS.supports("color", "color(display-p3 1 0 0)") && CSS.supports("color", "color(display-p3 1 0 0 / 1)");

function z(e, t) {
  let [n, a] = i.useState(() => {
    let n = Z.K.get(e);
    return null != n ? n : t
  });
  return i.useEffect(() => {
    Z.K.set(e, n)
  }, [e, n]), [n, a]
}

function q(e) {
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

function K(e, t, n, a, r) {
  return {
    name: t,
    colors: B(U({}, e.colors), {
      [r]: {
        color: n,
        opacity: a
      }
    }),
    highlight: false
  }
}

function Q(e) {
  return B(U({}, e), {
    highlight: !e.highlight
  })
}

function Y(e) {
  return (0, R.Z)((0, A.Z)(e, l.Z), {
    format: "hex"
  })
}
var X = ((a = {}).TOKENS = "Tokens", a.PALETTES = "Palettes", a);

function J() {
  return function(e, t) {
    let [n, a] = z("".concat(e, "-states"), [t]), [r, l] = z("".concat(e, "-index"), 0), s = n[r], o = i.useCallback(e => {
      a(["function" == typeof e ? e(s) : e, ...n].slice(0, 20)), l(0)
    }, [l, a, n, s]), c = i.useCallback(() => {
      l(Math.min(n.length - 1, r + 1))
    }, [r, l, n.length]), d = i.useCallback(() => {
      l(Math.max(0, r - 1))
    }, [r, l]);
    return [s, o, c, d, r < n.length - 1, r > 0]
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
var en = ((r = {}).LINEAR = "Linear", r.EASE_IN = "Ease In", r.EASE_OUT = "Ease Out", r.EASE_IN_OUT = "Ease In Out", r);

function ea(e, t) {
  let n = et(t),
    a = Object.keys(e).map(e => parseInt(e.split("-")[1])),
    r = Math.max(...a) / (n.length - 1),
    i = {};
  return n.forEach((e, n) => {
    let l = Math.round(n * r),
      s = a.reduce((e, t) => Math.abs(t - l) < Math.abs(e - l) ? t : e);
    i["".concat(t, "-").concat(s)] = "".concat(t, "-").concat(e)
  }), i
}

function er(e) {
  let {
    name: t,
    base: n,
    steps: a = 26,
    darkness: r,
    lightness: i,
    easingStrength: s = 1
  } = e, o = F[e.colorSpace], c = (0, A.Z)(n, o), d = (0, D.CD)(c, "white", 1 - r, {
    space: o,
    outputSpace: l.Z
  }), u = (0, D.CD)(c, "black", 1 - i, {
    space: o,
    outputSpace: l.Z
  }), m = Math.floor(a / 2), p = a - m, h = (0, D.w6)(d, c, {
    steps: m,
    outputSpace: o,
    space: o,
    progression: e => e ** s
  }), x = (0, D.w6)(u, c, {
    steps: p,
    outputSpace: o,
    space: o,
    progression: e => e ** s
  }), f = [];
  for (let e = 0; e < m; e++) {
    let t = h(e / m);
    f.push(t)
  }
  f.push(c);
  for (let e = 1; e < p; e++) {
    let t = x(1 - e / p);
    f.push(t)
  }
  return Object.fromEntries(f.map((e, n) => ["".concat(t, "-").concat(n), e]))
}

function ei(e, t, n) {
  n(n => null == n.scales.find(t => t.name === e) ? n : B(U({}, n), {
    scales: n.scales.map(n => n.name === e ? t(n) : n)
  }))
}

function el(e, t, n) {
  ei(e, e => B(U({}, e), {
    darkness: t
  }), n)
}

function es(e, t, n) {
  ei(e, e => B(U({}, e), {
    lightness: t
  }), n)
}

function eo(e, t, n) {
  ei(e, e => B(U({}, e), {
    base: t
  }), n)
}

function ec(e, t, n) {
  ei(e, e => B(U({}, e), {
    colorSpace: t
  }), n)
}

function ed(e, t, n) {
  ei(e, e => B(U({}, e), {
    easingStrength: t
  }), n)
}

function eu(e, t, n) {
  ei(e, e => B(U({}, e), {
    showColumnarPalettePreview: t
  }), n)
}

function em(e, t, n) {
  ei(e, e => B(U({}, e), {
    useP3ColorSpace: t
  }), n)
}

function ep(e, t, n) {
  ei(e, e => B(U({}, e), {
    steps: t
  }), n)
}