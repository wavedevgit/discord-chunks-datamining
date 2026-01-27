/** Chunk was on web.js **/
/** chunk id: 467135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OT: () => a,
  kJ: () => o,
  ko: () => s
});
var Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js");
let a = "#5865F2",
  o = 74,
  s = (0, Chunk353640.v)((e, t) => ({
    colors: [],
    chassisMixAmount: o,
    gradientAngle: 0,
    setColors: t => {
      (0, i.r)(() => {
        e({
          colors: t
        })
      })
    },
    setChassisMixAmount: t => {
      (0, i.r)(() => {
        e({
          chassisMixAmount: Math.round(t)
        })
      })
    },
    setGradientAngle: t => {
      (0, i.r)(() => {
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
      (0, i.r)(() => {
        e({
          colors: n,
          chassisMixAmount: r,
          gradientAngle: a
        })
      })
    },
    isEditorActive: () => t().colors.length > 0
  }))