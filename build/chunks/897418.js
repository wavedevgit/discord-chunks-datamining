/** Chunk was on web.js **/
/** chunk id: 897418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk488803 = require("./488803.js"),
  Chunk522055 = require("./522055.js"),
  Chunk568065 = require("./568065.js"),
  Chunk800007 = require("./800007.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk390175 = require("./390175.js");

function f(e) {
  let t = (0, a.C$)(e, "useGameServerPerk"),
    n = (0, i.bG)([s.A], () => s.A.getLowestGameCostForGuild(e));
  return r.useMemo(() => t && null != n ? {
    skuId: l.W5,
    title: u.intl.string(c.default["B3OfL/"]),
    description: u.intl.string(c.default.EGkJAG),
    cost: n,
    dependencies: [],
    type: o.o9.PERK,
    animatedImageUrl: d.A,
    staticImageUrl: d.A
  } : null, [t, n])
}