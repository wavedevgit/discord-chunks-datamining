/** Chunk was on web.js **/
/** chunk id: 203872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => d
});
var Chunk73800 = require("./73800.js"),
  Chunk522942 = require("./522942.js"),
  Chunk342905 = require("./342905.js"),
  Chunk242824 = require("./242824.js"),
  Chunk693450 = require("./693450.js"),
  Chunk388032 = require("./388032.jsx");
let c = {
    [Chunk522942.m.SOLID]: Chunk693450.default.OpWJ3d,
    [Chunk522942.m.GRADIENT]: Chunk693450.default["i9e/u7"],
    [Chunk522942.m.GLOW]: Chunk693450.default["Ra3/9/"],
    [Chunk522942.m.NEON]: Chunk693450.default.x68b1N,
    [Chunk522942.m.TOON]: Chunk693450.default.otpeeH,
    [Chunk522942.m.POP]: Chunk693450.default.cjQOKS
  },
  u = {
    [Chunk522942.m.SOLID]: 3,
    [Chunk522942.m.GRADIENT]: 2.5,
    [Chunk522942.m.GLOW]: 2.5,
    [Chunk522942.m.NEON]: 3,
    [Chunk522942.m.TOON]: 3,
    [Chunk522942.m.POP]: 3
  };

function d(e) {
  let t = (0, a.P)(e);
  return r.useMemo(() => {
    var n, r;
    return {
      name: l.intl.string(null != (n = c[e]) ? n : s.default.OpWJ3d),
      defaultColors: t,
      previewStyles: {
        fontId: o.C.DEFAULT,
        effectId: e,
        colors: t
      },
      minContrastRatio: null != (r = u[e]) ? r : 3
    }
  }, [e, t])
}