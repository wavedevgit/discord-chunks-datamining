/** Chunk was on web.js **/
/** chunk id: 302221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AZ: () => N,
  BM: () => M,
  Cj: () => d,
  WY: () => C,
  YD: () => D,
  aD: () => h,
  j: () => P,
  oo: () => f,
  rj: () => p,
  vq: () => g,
  wh: () => w,
  xj: () => L
}), require("./415506.js"), require("./388685.js"), require("./35282.js"), require("./539854.js"), require("./642613.js");
var Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619);
require("./710845.js");
var Chunk564334 = require("./564334.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e, t) {
  let n, r, i, a;
  if (7 === e.length) return e + (255 * t | 0).toString(16).padStart(2, "0").toUpperCase();
  let o = "#" === e.charAt(0) ? e.slice(1) : e;
  switch (o.length) {
    case 3:
      return n = o.charAt(0), r = o.charAt(1), i = o.charAt(2), n += n, r += r, i += i, a = (255 * t | 0).toString(16).padStart(2, "0").toUpperCase(), "#" + n + r + i + a;
    case 4:
      return n = o.charAt(0), r = o.charAt(1), i = o.charAt(2), a = o.charAt(3), n += n, r += r, i += i, "#" + n + r + i + (255 * (parseInt(a += a, 16) / 255 * t) | 0).toString(16).padStart(2, "0").toUpperCase();
    case 6:
      return "#" + o + (255 * t | 0).toString(16).padStart(2, "0").toUpperCase();
    case 8:
      return "#" + o.slice(0, 6) + (parseInt(o.slice(6), 16) / 255 * t * 255 | 0).toString(16).padStart(2, "0").toUpperCase();
    default:
      throw Error("Invalid hex color format")
  }
}

function f(e) {
  let [t, n, r] = i()(e).rgb();
  return {
    r: t,
    g: n,
    b: r
  }
}

function _(e) {
  let [t, n, r, a] = i()(e).rgba();
  return {
    r: t,
    g: n,
    b: r,
    a
  }
}

function p(e, t) {
  let {
    r: n,
    g: r,
    b: i,
    a
  } = _(e);
  return "rgba(".concat(n, ", ").concat(r, ", ").concat(i, ", ").concat(null != t ? t : a, ")")
}

function h(e, t) {
  let {
    r: n,
    g: r,
    b: i
  } = f(e);
  return "rgba(".concat(n, ", ").concat(r, ", ").concat(i, ", ").concat(t, ")")
}

function m(e, t, n) {
  let r = Math.min(e /= 255, t /= 255, n /= 255),
    i = Math.max(e, t, n),
    a = i - r,
    o = 0,
    s = 0,
    l = 0;
  return (o = Math.round(60 * (o = 0 === a ? 0 : i === e ? (t - n) / a % 6 : i === t ? (n - e) / a + 2 : (e - t) / a + 4))) < 0 && (o += 360), l = (i + r) / 2, {
    h: o,
    s: s = +(100 * (s = 0 === a ? 0 : a / (1 - Math.abs(2 * l - 1)))).toFixed(1),
    l: l = +(100 * l).toFixed(1)
  }
}

function g(e, t, n) {
  return "#" + (0x1000000 + (e << 16) + (t << 8) + n).toString(16).slice(1)
}

function E(e, t, n) {
  let r = t * Math.min(n /= 100, 1 - n) / 100,
    i = t => {
      let i = (t + e / 30) % 12;
      return Math.round(255 * (n - r * Math.max(Math.min(i - 3, 9 - i, 1), false))).toString(16).padStart(2, "0")
    };
  return "#".concat(i(0)).concat(i(8)).concat(i(4))
}

function b(e) {
  let t, n, r, i, a;
  var o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  if (null == o) return null;
  var s = parseInt(o[1], 16),
    l = parseInt(o[2], 16),
    c = parseInt(o[3], 16);
  let u = s / 255,
    d = l / 255,
    f = c / 255,
    _ = Math.max(u, d, f),
    p = _ - Math.min(u, d, f),
    h = e => (_ - e) / 6 / p + .5,
    m = e => Math.round(100 * e) / 100;
  return 0 === p ? i = a = 0 : (a = p / _, t = h(u), n = h(d), r = h(f), (i = u === _ ? r - n : d === _ ? 1 / 3 + t - r : f === _ ? 2 / 3 + n - t : 0) < 0 ? i += 1 : i > 1 && (i -= 1)), {
    h: Math.round(360 * i),
    s: m(100 * a),
    v: m(100 * _)
  }
}

function y(e, t, n) {
  return f(E(e, t, n))
}
u(l({}, {
  "#1abc9c": () => Chunk388032.intl.string(Chunk388032.t.fBawRj),
  "#2ecc71": () => Chunk388032.intl.string(Chunk388032.t.hvv3QR),
  "#3498db": () => Chunk388032.intl.string(Chunk388032.t.JwX6Jd),
  "#9b59b6": () => Chunk388032.intl.string(Chunk388032.t.H3xljj),
  "#e91e63": () => Chunk388032.intl.string(Chunk388032.t.X9izyR),
  "#11806a": () => Chunk388032.intl.string(Chunk388032.t.Kw7K2z),
  "#1f8b4c": () => Chunk388032.intl.string(Chunk388032.t.z5AZKW),
  "#206694": () => Chunk388032.intl.string(Chunk388032.t.JqBqKz),
  "#71368a": () => Chunk388032.intl.string(Chunk388032.t.edPgnK),
  "#ad1457": () => Chunk388032.intl.string(Chunk388032.t.ti7gsS),
  "#f1c40f": () => Chunk388032.intl.string(Chunk388032.t["H9jz+S"]),
  "#e67e22": () => Chunk388032.intl.string(Chunk388032.t.UmsfHL),
  "#e74c3c": () => Chunk388032.intl.string(Chunk388032.t.GoDlAC),
  "#95a5a6": () => Chunk388032.intl.string(Chunk388032.t["9GpDYK"]),
  "#607d8b": () => Chunk388032.intl.string(Chunk388032.t.lwrNQG),
  "#c27c0e": () => Chunk388032.intl.string(Chunk388032.t.Lf10GG),
  "#a84300": () => Chunk388032.intl.string(Chunk388032.t["H+AjY7"]),
  "#992d22": () => Chunk388032.intl.string(Chunk388032.t.XTkdex),
  "#979c9f": () => Chunk388032.intl.string(Chunk388032.t.Ve0Lip),
  "#546e7a": () => Chunk388032.intl.string(Chunk388032.t.BwbOAO),
  "#99aab5": () => Chunk388032.intl.string(Chunk388032.t["/po5rJ"])
}), {
  "#5865f2": () => Chunk388032.intl.string(Chunk388032.t["Cn/LJ4"])
});
let O = 30,
  v = 80,
  I = 20,
  T = 30,
  S = 40,
  A = 15;

function C(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 3,
    n = [],
    {
      h: r,
      s: i,
      l: a
    } = m(e[0], e[1], e[2]),
    o = r,
    s = i,
    l = a;
  s < O && (s += T), l > v && (l -= S), l < I && (l += A);
  let c = 360 / (t + 1);
  for (; n.length < t;) {
    (o -= c) < 0 && (o += 360);
    let {
      r: e,
      g: t,
      b: r
    } = y(o, s, l);
    n.push([e, t, r])
  }
  return n
}

function N(e, t, n) {
  let r, i, a = Math.max(e /= 255, t /= 255, n /= 255),
    o = Math.min(e, t, n),
    s = (a + o) / 2;
  if (a === o) r = i = 0;
  else {
    let l = a - o;
    switch (i = s > .5 ? l / (2 - a - o) : l / (a + o), a) {
      case e:
        r = (t - n) / l + 6 * (t < n);
        break;
      case t:
        r = (n - e) / l + 2;
        break;
      case n:
        r = (e - t) / l + 4
    }
    null == r ? r = 0 : r /= 6
  }
  return {
    hue: 360 * r,
    saturation: i,
    lightness: s,
    alpha: 1
  }
}

function R(e, t, n) {
  let r, i, o;
  if (e /= 360, 0 === t) r = i = o = n;
  else {
    let a = function(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      },
      s = n < .5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    r = a(l, s, e + 1 / 3), i = a(l, s, e), o = a(l, s, e - 1 / 3)
  }
  return new a.Z(Math.round(255 * r), Math.round(255 * i), Math.round(255 * o), 1)
}

function P(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = N(e.red, e.green, e.blue);
  return n ? r.lightness = r.lightness + t > 1 ? .9 : r.lightness + t : r.lightness = r.lightness - t < 0 ? .1 : r.lightness - t, R(r.hue, r.saturation, r.lightness)
}

function w(e) {
  let {
    foreground: t,
    background: n,
    ratio: r = 5,
    saturationFactor: a = 1
  } = e;
  a < 1 && (t = t.set("hsl.s", t.get("hsl.s") * a), n = n.set("hsl.s", n.get("hsl.s") * a));
  let o = .5 >= n.luminance(),
    s = i().contrast(t, n);
  for (let e = 0; e < 10 && s < r; e++) {
    let e = t.get("hsl.l");
    if (o)
      if (e < .95) t = t.set("hsl.l", e + .05);
      else break;
    else if (e > .05) t = t.set("hsl.l", e - .05);
    else break;
    s = i().contrast(t, n)
  }
  return t.alpha(1)
}

function D(e) {
  return e.slice(0, 3).map(e => {
    var t;
    return {
      hex: e,
      hsv: null != (t = b(e)) ? t : {
        h: 0,
        s: 0,
        v: 0
      }
    }
  }).sort(x)[0].hex
}

function x(e, t) {
  let n = e.hsv,
    r = t.hsv;
  return r.s + r.v - (n.s + n.v)
}

function L(e) {
  var t;
  let {
    colorRGB: n,
    saturationFactor: r = 1
  } = e;
  if (null == n) return n;
  let i = N(n.get("rgb.r"), n.get("rgb.g"), n.get("rgb.b"));
  return null == i ? null == n ? true : n.hex() : null == (t = R(i.hue, i.saturation * r, i.lightness)) ? true : t.toHexString()
}

function M(e, t, n) {
  let r = parseInt(e.substring(1, 3), 16),
    i = parseInt(e.substring(3, 5), 16),
    a = parseInt(e.substring(5, 7), 16),
    o = parseInt(t.substring(1, 3), 16),
    s = parseInt(t.substring(3, 5), 16),
    l = parseInt(t.substring(5, 7), 16),
    c = Math.round(r + (o - r) * n).toString(16).padStart(2, "0"),
    u = Math.round(i + (s - i) * n).toString(16).padStart(2, "0"),
    d = Math.round(a + (l - a) * n).toString(16).padStart(2, "0");
  return "#".concat(c).concat(u).concat(d)
}