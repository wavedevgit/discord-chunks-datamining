/** Chunk was on web.js **/
/** chunk id: 651667, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  var t, n, r, i, a, o, s, l, c, u, d, f, p;
  let _ = e.skus.map(e => {
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
    h = _.length > 0 ? Math.min(..._.map(e => e.cost)) : 0;
  return {
    id: e.id,
    name: e.name,
    gameId: null != (p = null == (r = e.tenant_metadata) || null == (n = r.guild_monetization) || null == (t = n.game_server) ? true : t.game_application_id) ? p : "",
    provider: null == (o = e.tenant_metadata) || null == (a = o.guild_monetization) || null == (i = a.game_server) ? true : i.provider,
    plans: _,
    baseCost: h,
    disabled: null == (c = e.tenant_metadata) || null == (l = c.guild_monetization) || null == (s = l.game_server) ? true : s.disabled,
    early_access: null == (f = e.tenant_metadata) || null == (d = f.guild_monetization) || null == (u = d.game_server) ? true : u.early_access
  }
}
require.d(exports, {
  m: () => r
}), require("./953529.js"), require("./642613.js"), require("./388685.js")