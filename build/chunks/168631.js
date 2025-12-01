/** Chunk was on web.js **/
/** chunk id: 168631, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J2: () => u,
  V3: () => c,
  ZB: () => d,
  oU: () => f
}), require("./388685.js");
var Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619),
  Chunk392711 = require("./392711.js"),
  Chunk866442 = require("./866442.js"),
  Chunk780384 = require("./780384.js");
require("./564334.js");
var Chunk981631 = require("./981631.js");

function c(e) {
  return null == e ? null : (0, o.Bd)(e) > .5 ? l.BRd.DARK : l.BRd.LIGHT
}

function u(e, t, n) {
  let r = n / 100,
    i = 1 - r;
  return [Math.round(e[0] * i + t[0] * r), Math.round(e[1] * i + t[1] * r), Math.round(e[2] * i + t[2] * r)]
}
let d = (0, Chunk392711.memoize)(e => {
    let t = (0, s.Qg)(e, {
      base: "#ffffff",
      contrastRatio: s.S3.HighContrastText
    });
    return (0, o._i)(t)
  }, e => e),
  f = (0, Chunk392711.memoize)((e, t, n) => {
    let r = (null != n ? n : c(e)) !== l.BRd.LIGHT,
      o = .5,
      s = .1,
      u = .8,
      d = i().mix(i()(e), i()(t), o, "lab"),
      f = Math.round(100 * d.get("hsl.l")) / 100,
      p = r ? (0, a.clamp)(f, 0, s) : (0, a.clamp)(f, u, 1);
    return i()(d).set("hsl.l", p).num()
  }, (e, t, n) => "".concat(e, "-").concat(t, "-").concat(n))