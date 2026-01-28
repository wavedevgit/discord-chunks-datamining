/** Chunk was on web.js **/
/** chunk id: 897418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk488803 = require("./488803.js"),
  Chunk522055 = require("./522055.js"),
  Chunk204017 = require("./204017.js"),
  Chunk568065 = require("./568065.js"),
  Chunk800007 = require("./800007.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk390175 = require("./390175.js");

function p(e) {
  let t = (0, a.C$)(e, "useGameServerPerk"),
    n = (0, i.bG)([o.A], () => o.A.getLowestGameCostForGuild(e)),
    {
      gameName: p,
      gameName2: _
    } = (0, s.A)();
  return r.useMemo(() => t && null != n ? {
    skuId: c.W5,
    title: d.intl.string(u.default["B3OfL/"]),
    description: d.intl.format(u.default["+UqyGU"], {
      gameName: p,
      gameName2: _
    }),
    cost: n,
    dependencies: [],
    type: l.o9.PERK,
    animatedImageUrl: f.A,
    staticImageUrl: f.A
  } : null, [t, n, p, _])
}