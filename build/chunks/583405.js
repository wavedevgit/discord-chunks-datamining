/** Chunk was on web.js **/
/** chunk id: 583405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk979590 = require("./979590.js"),
  a = require.n(Chunk979590),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js");
let c = e => {
  let t = (0, s.e7)([l.Z], () => l.Z.desaturateUserColors ? l.Z.saturation : 1);
  return (0, r.useMemo)(() => {
    let {
      h: n,
      s: r,
      l: i
    } = a()((0, o.Rf)(e)).toHsl(), s = a()({
      h: n,
      s: r * t,
      l: i
    });
    return {
      hex: s.toHexString(),
      hsl: s.toHslString()
    }
  }, [e, t])
}