/** Chunk was on web.js **/
/** chunk id: 430571, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk508425 = require("./508425.js"),
  Chunk397927 = require("./397927.js");

function s(e) {
  let t = (0, a.rdh)(a.LU0.colors.TEXT_DEFAULT).int();
  return r.useMemo(() => {
    switch (e) {
      case i.z.GRADIENT:
      case i.z.GLOW:
        return [7183099, 6082490];
      case i.z.TOON:
        return [0xf42098];
      case i.z.NEON:
        return [6888941];
      case i.z.POP:
        return [1036166];
      case i.z.SOLID:
      default:
        return [t]
    }
  }, [t, e])
}