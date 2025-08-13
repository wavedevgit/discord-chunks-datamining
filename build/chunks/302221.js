/** Chunk was on web.js **/
/** chunk id: 302221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AZ: () => P,
  BM: () => k,
  Cj: () => u,
  WY: () => N,
  YD: () => x,
  ZJ: () => m,
  aD: () => p,
  aP: () => U,
  j: () => D,
  k8: () => L,
  oo: () => d,
  pz: () => h,
  rj: () => _,
  vq: () => g,
  xj: () => j
}), require("./415506.js"), require("./388685.js"), require("./35282.js"), require("./539854.js"), require("./642613.js");
var Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619),
  Chunk866442 = require("./866442.js");
require("./710845.js");
var Chunk564334 = require("./564334.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
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
  let n, r, i, o;
  if (7 === e.length) return e + (255 * t | 0).toString(16).padStart(2, "0").toUpperCase();
  let a = "#" === e.charAt(0) ? e.slice(1) : e;
  switch (a.length) {
    case 3:
      return n = a.charAt(0), r = a.charAt(1), i = a.charAt(2), n += n, r += r, i += i, o = (255 * t | 0).toString(16).padStart(2, "0").toUpperCase(), "#" + n + r + i + o;
    case 4:
      return n = a.charAt(0), r = a.charAt(1), i = a.charAt(2), o = a.charAt(3), n += n, r += r, i += i, "#" + n + r + i + (255 * (parseInt(o += o, 16) / 255 * t) | 0).toString(16).padStart(2, "0").toUpperCase();
    case 6:
      return "#" + a + (255 * t | 0).toString(16).padStart(2, "0").toUpperCase();
    case 8:
      return "#" + a.slice(0, 6) + (parseInt(a.slice(6), 16) / 255 * t * 255 | 0).toString(16).padStart(2, "0").toUpperCase();
    default:
      throw Error("Invalid hex color format")
  }
}

function d(e) {
  let [t, n, r] = i()(e).rgb();
  return {
    r: t,
    g: n,
    b: r
  }
}

function f(e) {
  let [t, n, r, o] = i()(e).rgba();
  return {
    r: t,
    g: n,
    b: r,
    a: o
  }
}

function _(e, t) {
  let {
    r: n,
    g: r,
    b: i,
    a: o
  } = f(e);
  return "rgba(".concat(n, ", ").concat(r, ", ").concat(i, ", ").concat(null != t ? t : o, ")")
}

function p(e, t) {
  let {
    r: n,
    g: r,
    b: i
  } = d(e);
  return "rgba(".concat(n, ", ").concat(r, ", ").concat(i, ", ").concat(t, ")")
}

function h(e, t, n) {
  let r = Math.min(e /= 255, t /= 255, n /= 255),
    i = Math.max(e, t, n),
    o = i - r,
    a = 0,
    s = 0,
    l = 0;
  return (a = Math.round(60 * (a = 0 === o ? 0 : i === e ? (t - n) / o % 6 : i === t ? (n - e) / o + 2 : (e - t) / o + 4))) < 0 && (a += 360), l = (i + r) / 2, {
    h: a,
    s: s = +(100 * (s = 0 === o ? 0 : o / (1 - Math.abs(2 * l - 1)))).toFixed(1),
    l: l = +(100 * l).toFixed(1)
  }
}

function m(e, t, n) {
  return "hsl(".concat(e, ", calc(var(--saturation-factor, 1) * ").concat(t, "%), ").concat(n, "%)")
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
  let t, n, r, i, o;
  var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  if (null == a) return null;
  var s = parseInt(a[1], 16),
    l = parseInt(a[2], 16),
    c = parseInt(a[3], 16);
  let u = s / 255,
    d = l / 255,
    f = c / 255,
    _ = Math.max(u, d, f),
    p = _ - Math.min(u, d, f),
    h = e => (_ - e) / 6 / p + .5,
    m = e => Math.round(100 * e) / 100;
  return 0 === p ? i = o = 0 : (o = p / _, t = h(u), n = h(d), r = h(f), (i = u === _ ? r - n : d === _ ? 1 / 3 + t - r : f === _ ? 2 / 3 + n - t : 0) < 0 ? i += 1 : i > 1 && (i -= 1)), {
    h: Math.round(360 * i),
    s: m(100 * o),
    v: m(100 * _)
  }
}

function y(e, t, n) {
  return d(E(e, t, n))
}(function e(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  })
})(function e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}({}, {
  "#1abc9c": () => Chunk388032.intl.string(Chunk388032.t.fBawRk),
  "#2ecc71": () => Chunk388032.intl.string(Chunk388032.t.hvv3QU),
  "#3498db": () => Chunk388032.intl.string(Chunk388032.t.JwX6JS),
  "#9b59b6": () => Chunk388032.intl.string(Chunk388032.t.H3xljo),
  "#e91e63": () => Chunk388032.intl.string(Chunk388032.t.X9izyc),
  "#11806a": () => Chunk388032.intl.string(Chunk388032.t.Kw7K29),
  "#1f8b4c": () => Chunk388032.intl.string(Chunk388032.t.z5AZKS),
  "#206694": () => Chunk388032.intl.string(Chunk388032.t.JqBqKy),
  "#71368a": () => Chunk388032.intl.string(Chunk388032.t.edPgnJ),
  "#ad1457": () => Chunk388032.intl.string(Chunk388032.t.ti7gsb),
  "#f1c40f": () => Chunk388032.intl.string(Chunk388032.t["H9jz+f"]),
  "#e67e22": () => Chunk388032.intl.string(Chunk388032.t.UmsfHB),
  "#e74c3c": () => Chunk388032.intl.string(Chunk388032.t.GoDlAA),
  "#95a5a6": () => Chunk388032.intl.string(Chunk388032.t["9GpDYG"]),
  "#607d8b": () => Chunk388032.intl.string(Chunk388032.t.lwrNQE),
  "#c27c0e": () => Chunk388032.intl.string(Chunk388032.t.Lf10GB),
  "#a84300": () => Chunk388032.intl.string(Chunk388032.t["H+AjY2"]),
  "#992d22": () => Chunk388032.intl.string(Chunk388032.t.XTkde3),
  "#979c9f": () => Chunk388032.intl.string(Chunk388032.t.Ve0Lio),
  "#546e7a": () => Chunk388032.intl.string(Chunk388032.t.BwbOAA),
  "#99aab5": () => Chunk388032.intl.string(Chunk388032.t["/po5rK"])
}), {
  "#5865f2": () => Chunk388032.intl.string(Chunk388032.t["Cn/LJy"])
});
let O = 30,
  v = 80,
  I = 20,
  T = 30,
  S = 40,
  A = 15;

function N(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 3,
    n = [],
    {
      h: r,
      s: i,
      l: o
    } = h(e[0], e[1], e[2]),
    a = r,
    s = i,
    l = o;
  s < O && (s += T), l > v && (l -= S), l < I && (l += A);
  let c = 360 / (t + 1);
  for (; n.length < t;) {
    (a -= c) < 0 && (a += 360);
    let {
      r: e,
      g: t,
      b: r
    } = y(a, s, l);
    n.push([e, t, r])
  }
  return n
}

function C(e) {
  let {
    red: t,
    green: n,
    blue: r
  } = e, i = [t, n, r].map(e => (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4));
  return .2126 * i[0] + .7152 * i[1] + .0722 * i[2]
}

function R(e) {
  let t = e[0],
    n = e[1],
    r = C(t),
    i = C(n);
  return (Math.max(r, i) + .05) / (Math.min(r, i) + .05)
}

function P(e, t, n) {
  let r, i, o = Math.max(e /= 255, t /= 255, n /= 255),
    a = Math.min(e, t, n),
    s = (o + a) / 2;
  if (o === a) r = i = 0;
  else {
    let l = o - a;
    switch (i = s > .5 ? l / (2 - o - a) : l / (o + a), o) {
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

function w(e, t, n) {
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

function D(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = P(e.red, e.green, e.blue);
  return n ? r.lightness = r.lightness + t > 1 ? .9 : r.lightness + t : r.lightness = r.lightness - t < 0 ? .1 : r.lightness - t, w(r.hue, r.saturation, r.lightness)
}

function L(e) {
  let {
    colors: t,
    ratio: n = 5,
    saturationFactor: r = 1
  } = e;
  if (t.length < 2) return;
  let i = t[0],
    a = t[1];
  if (null == a || null == i) return;
  let s = (0, o._i)(a.toHexString()),
    l = (0, o.Bd)(s) > .5,
    c = R([i, a]),
    u = P(i.red, i.green, i.blue);
  for (u.saturation *= r; c < n && null != u;) {
    if (l)
      if (u.lightness < .95) u.lightness += .05;
      else break;
    else if (u.lightness > .05) u.lightness -= .05;
    else break;
    c = R([w(u.hue, u.saturation, u.lightness), t[1]])
  }
  return w(u.hue, u.saturation, u.lightness)
}

function x(e) {
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
  }).sort(M)[0].hex
}

function M(e, t) {
  let n = e.hsv,
    r = t.hsv;
  return r.s + r.v - (n.s + n.v)
}

function j(e) {
  var t;
  let {
    colorRGB: n,
    saturationFactor: r = 1
  } = e;
  if (null == n) return n;
  let i = P(n.red, n.green, n.blue);
  return null == i ? null == n ? true : n.toHexString() : null == (t = w(i.hue, i.saturation * r, i.lightness)) ? true : t.toHexString()
}

function k(e, t, n) {
  let r = parseInt(e.substring(1, 3), 16),
    i = parseInt(e.substring(3, 5), 16),
    o = parseInt(e.substring(5, 7), 16),
    a = parseInt(t.substring(1, 3), 16),
    s = parseInt(t.substring(3, 5), 16),
    l = parseInt(t.substring(5, 7), 16),
    c = Math.round(r + (a - r) * n).toString(16).padStart(2, "0"),
    u = Math.round(i + (s - i) * n).toString(16).padStart(2, "0"),
    d = Math.round(o + (l - o) * n).toString(16).padStart(2, "0");
  return "#".concat(c).concat(u).concat(d)
}

function U(e, t, n) {
  let r = i()(e),
    o = i()(t),
    a = .5 > o.get("hsl.l");
  if (i().contrast(r, o) >= n) return r.hex();
  let s = a ? .1 : false;
  for (let e = 0; e < 10 && (r = r.set("hsl.l", r.get("hsl.l") + s), !(i().contrast(r, o) >= n)); e++);
  return r.hex()
}