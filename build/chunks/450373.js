/** Chunk was on web.js **/
/** chunk id: 450373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk440745 = require("./440745.js"),
  a = require.n(Chunk440745),
  Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js");
let c = e => {
  let t = (0, s.bG)([l.A], () => l.A.desaturateUserColors ? l.A.saturation : 1);
  return (0, r.useMemo)(() => {
    let {
      h: n,
      s: r,
      l: i
    } = a()((0, o.Hl)(e)).toHsl(), s = a()({
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