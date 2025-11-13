/** Chunk was on web.js **/
/** chunk id: 489511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => d
});
var Chunk647438 = require("./647438.js"),
  Chunk522942 = require("./522942.js"),
  Chunk342905 = require("./342905.js"),
  Chunk271631 = require("./271631.js"),
  Chunk88406 = require("./88406.js"),
  Chunk388032 = require("./388032.jsx");
let c = {
    [Chunk522942.m.SOLID]: Chunk88406.default.OpWJ3f,
    [Chunk522942.m.GRADIENT]: Chunk88406.default["i9e/u1"],
    [Chunk522942.m.GLOW]: Chunk88406.default["Ra3/93"],
    [Chunk522942.m.NEON]: Chunk88406.default.x68b1F,
    [Chunk522942.m.TOON]: Chunk88406.default.otpeeM,
    [Chunk522942.m.POP]: Chunk88406.default.cjQOKb
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
  let t = (0, o.Z)(e);
  return r.useMemo(() => {
    var n, r;
    return {
      name: l.intl.string(null != (n = c[e]) ? n : s.default.OpWJ3f),
      defaultColors: t,
      previewStyles: {
        fontId: a.C.DEFAULT,
        effectId: e,
        colors: t
      },
      minContrastRatio: null != (r = u[e]) ? r : 3
    }
  }, [e, t])
}