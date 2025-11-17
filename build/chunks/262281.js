/** Chunk was on 23032 **/
/** chunk id: 262281, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk37484 = require("./37484.js"),
  Chunk665352 = require("./665352.js"),
  Chunk798192 = require("./798192.js"),
  Chunk25412 = require("./25412.js"),
  Chunk433135 = require("./433135.js"),
  Chunk103671 = require("./103671.js"),
  Chunk661105 = require("./661105.js"),
  Chunk605700 = require("./605700.js"),
  Chunk762399 = require("./762399.js"),
  Chunk811534 = require("./811534.js"),
  Chunk830927 = require("./830927.js"),
  Chunk181568 = require("./181568.js"),
  Chunk613046 = require("./613046.js"),
  Chunk629990 = require("./629990.js");
let g = {
  hct: {
    method: "hct.c",
    jnd: 2,
    deltaEMethod: "hct",
    blackWhiteClamp: {}
  },
  "hct-tonal": {
    method: "hct.c",
    jnd: 0,
    deltaEMethod: "hct",
    blackWhiteClamp: {
      channel: "hct.t",
      min: 0,
      max: 100
    }
  }
};

function y(e, {
  method: t = o.Z.gamut_mapping,
  space: r,
  deltaEMethod: f = "",
  jnd: Z = 2,
  blackWhiteClamp: w = {}
} = {}) {
  let M;
  if (e = (0, h.Z)(e), a.HD(arguments[1]) ? r = arguments[1] : r || (r = e.space), r = n.Z.get(r), (0, c.Z)(e, r, {
      epsilon: 0
    })) return e;
  if ("css" === t) M = function(e, {
    space: t
  } = {}) {
    e = (0, h.Z)(e), t || (t = e.space), t = n.Z.get(t);
    let r = n.Z.get("oklch");
    if (t.isUnbounded) return (0, u.Z)(e, t);
    let o = (0, u.Z)(e, r),
      s = o.coords[0];
    if (s >= 1) {
      let r = (0, u.Z)(v.WHITE, t);
      return r.alpha = e.alpha, (0, u.Z)(r, t)
    }
    if (s <= 0) {
      let r = (0, u.Z)(v.BLACK, t);
      return r.alpha = e.alpha, (0, u.Z)(r, t)
    }
    if ((0, c.Z)(o, t, {
        epsilon: 0
      })) return (0, u.Z)(o, t);

    function l(e) {
      let r = (0, u.Z)(e, t),
        n = Object.values(t.coords);
      return r.coords = r.coords.map((e, t) => {
        if ("range" in n[t]) {
          let [r, o] = n[t].range;
          return a.uZ(r, e, o)
        }
        return e
      }), r
    }
    let f = 0,
      b = o.coords[1],
      p = true,
      m = (0, d.Z)(o),
      g = l(m),
      y = (0, i.Z)(g, m);
    if (y < .02) return g;
    for (; b - f > 1e-4;) {
      let e = (f + b) / 2;
      if (m.coords[1] = e, p && (0, c.Z)(m, t, {
          epsilon: 0
        })) f = e;
      else if (g = l(m), (y = (0, i.Z)(g, m)) < .02)
        if (.02 - y < 1e-4) break;
        else p = false, f = e;
      else b = e
    }
    return g
  }(e, {
    space: r
  });
  else {
    if ("clip" === t || (0, c.Z)(e, r)) M = (0, u.Z)(e, r);
    else {
      Object.prototype.hasOwnProperty.call(g, t) && ({
        method: t,
        jnd: Z,
        deltaEMethod: f,
        blackWhiteClamp: w
      } = g[t]);
      let o = s.Z;
      if ("" !== f) {
        for (let e in p.ZP)
          if ("deltae" + f.toLowerCase() === e.toLowerCase()) {
            o = p.ZP[e];
            break
          }
      }
      let i = y((0, u.Z)(e, r), {
        method: "clip",
        space: r
      });
      if (o(e, i) > Z) {
        if (3 === Object.keys(w).length) {
          let t = n.Z.resolveCoord(w.channel),
            r = (0, l.Z)((0, u.Z)(e, t.space), t.id);
          if (a.Wi(r) && (r = 0), r >= w.max) return (0, u.Z)({
            space: "xyz-d65",
            coords: m.mh.D65
          }, e.space);
          if (r <= w.min) return (0, u.Z)({
            space: "xyz-d65",
            coords: [0, 0, 0]
          }, e.space)
        }
        let s = n.Z.resolveCoord(t),
          i = s.space,
          c = s.id,
          f = (0, u.Z)(e, i);
        f.coords.forEach((e, t) => {
          a.Wi(e) && (f.coords[t] = 0)
        });
        let h = (s.range || s.refRange)[0],
          p = function(e) {
            let t = e ? Math.floor(Math.log10(Math.abs(e))) : 0;
            return Math.max(parseFloat(`1e${t-2}`), 1e-6)
          }(Z),
          g = h,
          v = (0, l.Z)(f, c);
        for (; v - g > p;) {
          let e = (0, d.Z)(f);
          o(f, e = y(e, {
            space: r,
            method: "clip"
          })) - Z < p ? g = (0, l.Z)(f, c) : v = (0, l.Z)(f, c), (0, b.Z)(f, c, (g + v) / 2)
        }
        M = (0, u.Z)(f, r)
      } else M = i
    }
    if ("clip" === t || !(0, c.Z)(M, r, {
        epsilon: 0
      })) {
      let e = Object.values(r.coords).map(e => e.range || []);
      M.coords = M.coords.map((t, r) => {
        let [a, n] = e[r];
        return true !== a && (t = Math.max(a, t)), true !== n && (t = Math.min(t, n)), t
      })
    }
  }
  return r !== e.space && (M = (0, u.Z)(M, e.space)), e.coords = M.coords, e
}
y.returns = "color";
let v = {
  WHITE: {
    space: Chunk762399.Z,
    coords: [1, 0, 0]
  },
  BLACK: {
    space: Chunk762399.Z,
    coords: [0, 0, 0]
  }
}