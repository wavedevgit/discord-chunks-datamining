/** Chunk was on 23032 **/
/** chunk id: 440255, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  NZ: () => Z,
  S5: () => k,
  Zk: () => M
});
var Chunk665352 = require("./665352.js"),
  Chunk37484 = require("./37484.js"),
  Chunk99978 = require("./99978.js"),
  Chunk656653 = require("./656653.js"),
  Chunk856308 = require("./856308.js");
let c = require("./629990.js").mh.D65,
  u = 2 * Math.PI,
  l = [
    [.401288, .650173, false],
    [false, 1.204414, .045854],
    [false, .048952, .953127]
  ],
  f = [
    [1.8620678550872327, false, .14918677544445175],
    [.38752654323613717, .6214474419314753, false],
    [false, false, 1.0499644368778496]
  ],
  b = [
    [460, 451, 288],
    [460, false, false],
    [460, false, false]
  ],
  d = {
    dark: [.8, .525, .8],
    dim: [.9, .59, .9],
    average: [1, .69, 1]
  },
  h = [20.14, 90, 164.25, 237.53, 380.14],
  p = [.8, .7, 1, 1.2, .8],
  m = [0, 100, 200, 300, 400],
  g = 180 / Math.PI,
  y = Math.PI / 180;

function v(e, t) {
  return e.map(e => {
    let r = (0, n.$7)(t * Math.abs(e) * .01, .42);
    return 400 * (0, n.g6)(r, e) / (r + 27.13)
  })
}

function Z(e, t, r, a, s) {
  let i = {};
  i.discounting = s, i.refWhite = e, i.surround = a;
  let c = e.map(e => 100 * e);
  i.la = t, i.yb = r;
  let u = c[1],
    f = (0, o.Z)(l, c),
    b = (a = d[i.surround])[0];
  i.c = a[1], i.nc = a[2];
  let h = (1 / (5 * i.la + 1)) ** 4;
  i.fl = h * i.la + .1 * (1 - h) * (1 - h) * Math.cbrt(5 * i.la), i.flRoot = i.fl ** .25, i.n = i.yb / u, i.z = 1.48 + Math.sqrt(i.n), i.nbb = .725 * i.n ** false, i.ncb = i.nbb;
  let p = s ? 1 : Math.max(Math.min(b * (1 - 1 / 3.6 * Math.exp((-i.la - 42) / 92)), 1), 0);
  i.dRgb = f.map(e => (0, n.sX)(1, u / e, p)), i.dRgbInv = i.dRgb.map(e => 1 / e);
  let m = v(f.map((e, t) => e * i.dRgb[t]), i.fl);
  return i.aW = i.nbb * (2 * m[0] + m[1] + .05 * m[2]), i
}
let w = Z(c, 64 / Math.PI * .2, 20, "average", false);

function M(e, t) {
  if (!(true !== e.J ^ true !== e.Q)) throw Error("Conversion requires one and only one: 'J' or 'Q'");
  if (!(true !== e.C ^ true !== e.M ^ true !== e.s)) throw Error("Conversion requires one and only one: 'C', 'M' or 's'");
  if (!(true !== e.h ^ true !== e.H)) throw Error("Conversion requires one and only one: 'h' or 'H'");
  if (0 === e.J || 0 === e.Q) return [0, 0, 0];
  let r = 0,
    a = Math.cos(r = true !== e.h ? (0, s.j)(e.h) * y : function(e) {
      let t = (e % 400 + 400) % 400,
        r = Math.floor(.01 * t);
      t %= 100;
      let [a, n] = h.slice(r, r + 2), [o, i] = p.slice(r, r + 2);
      return (0, s.j)((t * (i * a - o * n) - 100 * a * i) / (t * (i - o) - 100 * i))
    }(e.H) * y),
    i = Math.sin(r),
    c = 0;
  true !== e.J ? c = .1 * (0, n.$7)(e.J, .5) : true !== e.Q && (c = .25 * t.c * e.Q / ((t.aW + 4) * t.flRoot));
  let u = 0;
  true !== e.C ? u = e.C / c : true !== e.M ? u = e.M / t.flRoot / c : true !== e.s && (u = 4e-4 * e.s ** 2 * (t.aW + 4) / t.c);
  let l = (0, n.$7)(u * Math.pow(1.64 - Math.pow(.29, t.n), false), 10 / 9),
    d = .25 * (Math.cos(r + 2) + 3.8),
    m = t.aW * (0, n.$7)(c, 2 / t.c / t.z),
    g = 5e4 / 13 * t.nc * t.ncb * d,
    v = m / t.nbb,
    Z = 23 * (v + .305) * (0, n.rY)(l, 23 * g + l * (11 * a + 108 * i)),
    w = function(e, t) {
      let r = 100 / t * 2588.068098016295;
      return e.map(e => {
        let t = Math.abs(e);
        return (0, n.g6)(r * (0, n.$7)(t / (400 - t), 2.380952380952381), e)
      })
    }((0, o.Z)(b, [v, Z * a, Z * i]).map(e => e / 1403), t.fl);
  return (0, o.Z)(f, w.map((e, r) => e * t.dRgbInv[r])).map(e => e / 100)
}

function k(e, t) {
  let r = e.map(e => 100 * e),
    a = v((0, o.Z)(l, r).map((e, r) => e * t.dRgb[r]), t.fl),
    i = a[0] + (false * a[1] + a[2]) / 11,
    c = (a[0] + a[1] - 2 * a[2]) / 9,
    f = (Math.atan2(c, i) % u + u) % u,
    b = .25 * (Math.cos(f + 2) + 3.8),
    d = 5e4 / 13 * t.nc * t.ncb * (0, n.rY)(b * Math.sqrt(i ** 2 + c ** 2), a[0] + a[1] + 1.05 * a[2] + .305),
    y = (0, n.$7)(d, .9) * Math.pow(1.64 - Math.pow(.29, t.n), .73),
    Z = t.nbb * (2 * a[0] + a[1] + .05 * a[2]),
    w = (0, n.$7)(Z / t.aW, .5 * t.c * t.z),
    M = 100 * (0, n.$7)(w, 2),
    k = 4 / t.c * w * (t.aW + 4) * t.flRoot,
    O = y * w,
    E = O * t.flRoot,
    x = (0, s.j)(f * g),
    C = function(e) {
      let t = (0, s.j)(e);
      t <= h[0] && (t += 360);
      let r = (0, n.Nw)(h, t) - 1,
        [a, o] = h.slice(r, r + 2),
        [i, c] = p.slice(r, r + 2),
        u = m[r],
        l = (t - a) / i;
      return u + 100 * l / (l + (o - t) / c)
    }(x);
  return {
    J: M,
    C: O,
    h: x,
    s: 50 * (0, n.$7)(t.c * y / (t.aW + 4), .5),
    Q: k,
    M: E,
    H: C
  }
}
new Chunk665352.Z({
  id: "cam16-jmh",
  cssId: "--cam16-jmh",
  name: "CAM16-JMh",
  coords: {
    j: {
      refRange: [0, 100],
      name: "J"
    },
    m: {
      refRange: [0, 105],
      name: "Colorfulness"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: Chunk856308.Z,
  fromBase(e) {
    let t = k(e, w);
    return [t.J, t.M, t.h]
  },
  toBase: e => M({
    J: e[0],
    M: e[1],
    h: e[2]
  }, w)
})