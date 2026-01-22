/** Chunk was on web.js **/
/** chunk id: 543699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  tJ: () => u,
  tM: () => c,
  v2: () => f,
  wg: () => d
}), require("./896048.js");
var Chunk310784 = require("./310784.js"),
  i = require.n(Chunk310784),
  Chunk735438 = require("./735438.js"),
  Chunk317097 = require("./317097.js"),
  Chunk582754 = require("./582754.js");
require("./325335.js");
var Chunk652215 = require("./652215.js");

function c(e) {
  return null == e ? null : (0, s.OK)(e) > .5 ? l.NJ8.DARK : l.NJ8.LIGHT
}

function u(e, t, n) {
  let r = n / 100,
    i = 1 - r;
  return [Math.round(e[0] * i + t[0] * r), Math.round(e[1] * i + t[1] * r), Math.round(e[2] * i + t[2] * r)]
}
let d = (0, Chunk735438.memoize)(e => {
    let t = (0, o.OB)(e, {
      base: "#ffffff",
      contrastRatio: o.Tr.HighContrastText
    });
    return (0, s.LX)(t)
  }, e => e),
  f = (0, Chunk735438.memoize)((e, t, n) => {
    let r = (null != n ? n : c(e)) !== l.NJ8.LIGHT,
      s = .5,
      o = .1,
      u = .8,
      d = i().mix(i()(e), i()(t), s, "lab"),
      f = Math.round(100 * d.get("hsl.l")) / 100,
      p = r ? (0, a.clamp)(f, 0, o) : (0, a.clamp)(f, u, 1);
    return i()(d).set("hsl.l", p).num()
  }, (e, t, n) => "".concat(e, "-").concat(t, "-").concat(n))