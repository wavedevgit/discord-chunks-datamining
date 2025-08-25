/** Chunk was on web.js **/
/** chunk id: 233398, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BH: () => a,
  Dp: () => o,
  Ig: () => s
});
var Chunk879690 = require("./879690.js"),
  Chunk731965 = require("./731965.js");
let o = "#5865F2",
  a = 74,
  s = (0, Chunk879690.U)(e => ({
    colors: [],
    chassisMixAmount: a,
    gradientAngle: 0,
    setColors: t => {
      (0, i.j)(() => {
        e({
          colors: t
        })
      })
    },
    setChassisMixAmount: t => {
      (0, i.j)(() => {
        e({
          chassisMixAmount: Math.round(t)
        })
      })
    },
    setGradientAngle: t => {
      (0, i.j)(() => {
        e({
          gradientAngle: Math.round(t)
        })
      })
    },
    setAll: t => {
      let {
        colors: n,
        chassisMixAmount: r,
        gradientAngle: o
      } = t;
      (0, i.j)(() => {
        e({
          colors: n,
          chassisMixAmount: r,
          gradientAngle: o
        })
      })
    }
  }))