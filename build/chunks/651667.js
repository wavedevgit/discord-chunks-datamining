/** Chunk was on 28532 **/
/** chunk id: 651667, original params: e,t,n (module,exports,require) **/
function a(e) {
  var t, n, a, i, l, r, s;
  let o = e.skus.map(e => {
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
    c = o.length > 0 ? Math.min(...o.map(e => e.cost)) : 0;
  return {
    id: e.id,
    name: e.name,
    gameId: null != (s = null == (a = e.tenant_metadata) || null == (n = a.guild_monetization) || null == (t = n.game_server) ? true : t.game_application_id) ? s : "",
    provider: null == (r = e.tenant_metadata) || null == (l = r.guild_monetization) || null == (i = l.game_server) ? true : i.provider,
    plans: o,
    baseCost: c
  }
}
require.d(exports, {
  m: () => a
}), require("./953529.js"), require("./642613.js"), require("./388685.js")