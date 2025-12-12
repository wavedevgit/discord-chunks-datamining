/** Chunk was on web.js **/
/** chunk id: 271631, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk522942 = require("./522942.js"),
  Chunk481060 = require("./481060.js");

function o(e) {
  let t = (0, a.dQu)(a.TVs.colors.TEXT_DEFAULT).int();
  return r.useMemo(() => {
    switch (e) {
      case i.m.GRADIENT:
      case i.m.GLOW:
        return [7183099, 6082490];
      case i.m.TOON:
        return [0xf42098];
      case i.m.NEON:
        return [6888941];
      case i.m.POP:
        return [1036166];
      case i.m.SOLID:
      default:
        return [t]
    }
  }, [t, e])
}