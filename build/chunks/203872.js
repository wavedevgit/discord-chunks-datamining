/** Chunk was on web.js **/
/** chunk id: 203872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => f
});
var Chunk73800 = require("./73800.js"),
  Chunk522942 = require("./522942.js"),
  Chunk342905 = require("./342905.js"),
  Chunk242824 = require("./242824.js"),
  Chunk660662 = require("./660662.js"),
  Chunk698282 = require("./698282.js"),
  Chunk388032 = require("./388032.jsx");
let u = {
    [Chunk522942.m.SOLID]: Chunk698282.default.OpWJ3d,
    [Chunk522942.m.GRADIENT]: Chunk698282.default["i9e/u7"],
    [Chunk522942.m.GLOW]: Chunk698282.default["Ra3/9/"],
    [Chunk522942.m.NEON]: Chunk698282.default.x68b1N,
    [Chunk522942.m.TOON]: Chunk698282.default.otpeeH,
    [Chunk522942.m.POP]: Chunk698282.default.cjQOKS
  },
  d = {
    [Chunk522942.m.SOLID]: 3,
    [Chunk522942.m.GRADIENT]: 2.5,
    [Chunk522942.m.GLOW]: 2.5,
    [Chunk522942.m.NEON]: 3,
    [Chunk522942.m.TOON]: 3,
    [Chunk522942.m.POP]: 2.5
  };

function f() {
  let e = (0, Chunk242824.P)();
  return Chunk73800.useMemo(() => {
    let t = {};
    return Chunk660662.mH.forEach(n => {
      t[n] = {
        name: c.intl.string(u[n]),
        defaultColors: e[n],
        previewStyles: {
          fontId: o.C.DEFAULT,
          effectId: n,
          colors: e[n]
        },
        minContrastRatio: d[n]
      }
    }), exports[Chunk522942.m.GLOW] = exports[Chunk522942.m.GRADIENT], exports
  }, [module])
}