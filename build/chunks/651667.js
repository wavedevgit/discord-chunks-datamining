/** Chunk was on 99904 **/
/** chunk id: 651667, original params: e,t,n (module,exports,require) **/
function a(e) {
  var t, n, a, r, i, l, s, o, c, d;
  let u = e.skus.map(e => {
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
    m = u.length > 0 ? Math.min(...u.map(e => e.cost)) : 0;
  return {
    id: e.id,
    name: e.name,
    gameId: null != (d = null == (a = e.tenant_metadata) || null == (n = a.guild_monetization) || null == (t = n.game_server) ? true : t.game_application_id) ? d : "",
    provider: null == (l = e.tenant_metadata) || null == (i = l.guild_monetization) || null == (r = i.game_server) ? true : r.provider,
    plans: u,
    baseCost: m,
    disabled: null == (c = e.tenant_metadata) || null == (o = c.guild_monetization) || null == (s = o.game_server) ? true : s.disabled
  }
}
require.d(exports, {
  m: () => a
}), require("./953529.js"), require("./642613.js"), require("./388685.js")