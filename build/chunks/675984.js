/** Chunk was on 81487 **/
/** chunk id: 675984, original params: e,t,n (module,exports,require) **/
function a(e) {
  var t, n, a, r;
  let i = e.skus.map(e => {
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
    l = i.length > 0 ? Math.min(...i.map(e => e.cost)) : 0;
  return {
    id: e.id,
    name: e.name,
    gameId: null != (r = null == (a = e.tenant_metadata) || null == (n = a.guild_monetization) || null == (t = n.game_server) ? true : t.game_application_id) ? r : "",
    developer: "Game Server Provider",
    plans: i,
    baseCost: l
  }
}
require.d(exports, {
  m: () => a
}), require("./953529.js"), require("./642613.js"), require("./388685.js")