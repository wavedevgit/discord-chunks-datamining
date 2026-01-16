/** Chunk was on web.js **/
/** chunk id: 233398, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BH: () => o,
  Dp: () => a,
  Ig: () => s
});
var Chunk121168 = require("./121168.js"),
  Chunk731965 = require("./731965.js");
let a = "#5865F2",
  o = 74,
  s = (0, Chunk121168.U)((e, t) => ({
    colors: [],
    chassisMixAmount: o,
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
        gradientAngle: a
      } = t;
      (0, i.j)(() => {
        e({
          colors: n,
          chassisMixAmount: r,
          gradientAngle: a
        })
      })
    },
    isEditorActive: () => t().colors.length > 0
  }))