/** Chunk was on 51711 **/
/** chunk id: 675984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => r
}), require("./953529.js"), require("./642613.js"), require("./388685.js");
var Chunk962774 = require("./962774.js");

function r(e) {
  var t, n, r, i;
  let l = e.skus.map(e => {
      let t = e.tenant_metadata.plan_features.map(e => ({
        title: e.title,
        description: e.description
      }));
      return {
        id: e.id,
        name: e.name,
        cost: e.tenant_metadata.boost_price,
        specifications: t
      }
    }).sort((e, t) => t.cost - e.cost),
    s = l.length > 0 ? Math.min(...l.map(e => e.cost)) : 0;
  return {
    id: e.id,
    name: e.name,
    gameId: null != (i = null == (r = e.tenant_metadata) || null == (n = r.guild_monetization) || null == (t = n.game_server) ? true : t.game_application_id) ? i : "",
    imageUrl: "",
    developer: "Game Server Provider",
    plans: l,
    regions: a.Y9,
    baseCost: s
  }
}