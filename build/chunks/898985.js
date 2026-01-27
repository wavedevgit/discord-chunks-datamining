/** Chunk was on web.js **/
/** chunk id: 898985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk508425 = require("./508425.js"),
  Chunk559949 = require("./559949.js"),
  Chunk430571 = require("./430571.js"),
  Chunk927961 = require("./927961.js"),
  Chunk985018 = require("./985018.jsx");
let c = {
    [Chunk508425.z.SOLID]: Chunk927961.default.OpWJ3f,
    [Chunk508425.z.GRADIENT]: Chunk927961.default["i9e/u1"],
    [Chunk508425.z.GLOW]: Chunk927961.default["Ra3/93"],
    [Chunk508425.z.NEON]: Chunk927961.default.x68b1F,
    [Chunk508425.z.TOON]: Chunk927961.default.otpeeM,
    [Chunk508425.z.POP]: Chunk927961.default.cjQOKb
  },
  u = {
    [Chunk508425.z.SOLID]: 3,
    [Chunk508425.z.GRADIENT]: 2.5,
    [Chunk508425.z.GLOW]: 2.5,
    [Chunk508425.z.NEON]: 3,
    [Chunk508425.z.TOON]: 3,
    [Chunk508425.z.POP]: 3
  };

function d(e) {
  let t = (0, o.A)(e);
  return r.useMemo(() => {
    var n, r;
    return {
      name: l.intl.string(null != (n = c[e]) ? n : s.default.OpWJ3f),
      defaultColors: t,
      previewStyles: {
        fontId: a.x.DEFAULT,
        effectId: e,
        colors: t
      },
      minContrastRatio: null != (r = u[e]) ? r : 3
    }
  }, [e, t])
}