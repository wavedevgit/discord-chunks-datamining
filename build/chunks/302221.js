/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  AZ: () => P,
  BM: () => j,
  Cj: () => f,
  WY: () => A,
  YD: () => L,
  ZJ: () => m,
  aD: () => _,
  j: () => D,
  k8: () => x,
  oo: () => p,
  pz: () => h,
  vq: () => g,
  xj: () => k
}), n(411104), n(47120), n(301563), n(653041), n(230036);
var r = n(688619),
  i = n.n(r),
  o = n(866442);
n(710845);
var a = n(564334),
  s = n(388032);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function c(e) {
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
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
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

function p(e) {
  let [t, n, r] = i()(e).rgb();
  return {
    r: t,
    g: n,
    b: r
  }
}

function _(e, t) {
  let {
    r: n,
    g: r,
    b: i
  } = p(e);
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
      return Math.round(255 * (n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1))).toString(16).padStart(2, "0")
    };
  return "#".concat(i(0)).concat(i(8)).concat(i(4))
}

function v(e) {
  let t, n, r, i, o;
  var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  if (null == a) return null;
  var s = parseInt(a[1], 16),
    l = parseInt(a[2], 16),
    c = parseInt(a[3], 16);
  let u = s / 255,
    d = l / 255,
    f = c / 255,
    p = Math.max(u, d, f),
    _ = p - Math.min(u, d, f),
    h = e => (p - e) / 6 / _ + .5,
    m = e => Math.round(100 * e) / 100;
  return 0 === _ ? i = o = 0 : (o = _ / p, t = h(u), n = h(d), r = h(f), (i = u === p ? r - n : d === p ? 1 / 3 + t - r : f === p ? 2 / 3 + n - t : 0) < 0 ? i += 1 : i > 1 && (i -= 1)), {
    h: Math.round(360 * i),
    s: m(100 * o),
    v: m(100 * p)
  }
}

function b(e, t, n) {
  return p(E(e, t, n))
}
d(c({}, {
  "#1abc9c": () => s.NW.string(s.t.fBawRk),
  "#2ecc71": () => s.NW.string(s.t.hvv3QU),
  "#3498db": () => s.NW.string(s.t.JwX6JS),
  "#9b59b6": () => s.NW.string(s.t.H3xljo),
  "#e91e63": () => s.NW.string(s.t.X9izyc),
  "#11806a": () => s.NW.string(s.t.Kw7K29),
  "#1f8b4c": () => s.NW.string(s.t.z5AZKS),
  "#206694": () => s.NW.string(s.t.JqBqKy),
  "#71368a": () => s.NW.string(s.t.edPgnJ),
  "#ad1457": () => s.NW.string(s.t.ti7gsb),
  "#f1c40f": () => s.NW.string(s.t["H9jz+f"]),
  "#e67e22": () => s.NW.string(s.t.UmsfHB),
  "#e74c3c": () => s.NW.string(s.t.GoDlAA),
  "#95a5a6": () => s.NW.string(s.t["9GpDYG"]),
  "#607d8b": () => s.NW.string(s.t.lwrNQE),
  "#c27c0e": () => s.NW.string(s.t.Lf10GB),
  "#a84300": () => s.NW.string(s.t["H+AjY2"]),
  "#992d22": () => s.NW.string(s.t.XTkde3),
  "#979c9f": () => s.NW.string(s.t.Ve0Lio),
  "#546e7a": () => s.NW.string(s.t.BwbOAA),
  "#99aab5": () => s.NW.string(s.t["/po5rK"])
}), {
  "#5865f2": () => s.NW.string(s.t["Cn/LJy"])
});
let y = 30,
  O = 80,
  S = 20,
  I = 30,
  T = 40,
  N = 15;

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
    n = [],
    {
      h: r,
      s: i,
      l: o
    } = h(e[0], e[1], e[2]),
    a = r,
    s = i,
    l = o;
  s < y && (s += I), l > O && (l -= T), l < S && (l += N);
  let c = 360 / (t + 1);
  for (; n.length < t;) {
    (a -= c) < 0 && (a += 360);
    let {
      r: e,
      g: t,
      b: r
    } = b(a, s, l);
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
  let r, i;
  let o = Math.max(e /= 255, t /= 255, n /= 255),
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
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = P(e.red, e.green, e.blue);
  return n ? r.lightness = r.lightness + t > 1 ? .9 : r.lightness + t : r.lightness = r.lightness - t < 0 ? .1 : r.lightness - t, w(r.hue, r.saturation, r.lightness)
}

function x(e) {
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
    if (l) {
      if (u.lightness < .95) u.lightness += .05;
      else break
    } else if (u.lightness > .05) u.lightness -= .05;
    else break;
    c = R([w(u.hue, u.saturation, u.lightness), t[1]])
  }
  return w(u.hue, u.saturation, u.lightness)
}

function L(e) {
  return e.slice(0, 3).map(e => {
    var t;
    return {
      hex: e,
      hsv: null !== (t = v(e)) && void 0 !== t ? t : {
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

function k(e) {
  var t;
  let {
    colorRGB: n,
    saturationFactor: r = 1
  } = e;
  if (null == n) return n;
  let i = P(n.red, n.green, n.blue);
  return null == i ? null == n ? void 0 : n.toHexString() : null === (t = w(i.hue, i.saturation * r, i.lightness)) || void 0 === t ? void 0 : t.toHexString()
}

function j(e, t, n) {
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