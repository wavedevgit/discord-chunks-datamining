/** Chunk was on web.js **/
/** chunk id: 483039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755458 = require("./755458.js"),
  Chunk60482 = require("./60482.js"),
  Chunk535396 = require("./535396.js"),
  Chunk619733 = require("./619733.js"),
  Chunk847328 = require("./847328.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk611087 = require("./611087.js");

function f(e) {
  let t = (0, o.BU)(e, "useGameServerPerk"),
    n = (0, i.e7)([a.Z], () => a.Z.getLowestGameCostForGuild(e));
  return r.useMemo(() => t && null != n ? {
    skuId: l.fj,
    title: u.intl.string(c.default["B3OfL/"]),
    description: u.intl.string(c.default.EGkJAG),
    cost: n,
    dependencies: [],
    type: s.Us.PERK,
    animatedImageUrl: d.Z,
    staticImageUrl: d.Z
  } : null, [t, n])
}