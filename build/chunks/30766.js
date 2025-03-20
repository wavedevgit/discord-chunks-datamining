/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => p
}), n(266796), n(47120);
var r, i, s, a = n(392711),
  l = n.n(a),
  o = n(442837),
  A = n(570140),
  c = n(314897),
  d = n(823379);

function u(e) {
  return {
    id: e.id,
    name: e.name,
    description: e.description,
    splash: e.splash,
    banner: e.banner,
    icon: e.icon,
    features: new Set(e.features),
    presenceCount: e.approximate_presence_count,
    memberCount: e.approximate_member_count,
    premiumSubscriptionCount: e.premium_subscription_count,
    preferredLocale: e.preferred_locale,
    discoverySplash: e.discovery_splash,
    emojis: e.emojis
  }
}
let g = {},
  f = 0;
class m extends(r = o.ZP.Store) {
  initialize() {
    this.waitFor(c.default)
  }
  isFetching() {
    return f > 0
  }
  getGuild(e) {
    return g[e]
  }
  getGuilds(e) {
    return e.map(e => g[e]).filter(d.lm)
  }
}
s = "DiscoverGuildsStore", (i = "displayName") in m ? Object.defineProperty(m, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : m[i] = s;
let p = new m(A.Z, {
  DISCOVER_GUILDS_FETCH_START: function(e) {
    f += 1
  },
  DISCOVER_GUILDS_FETCH_SUCCESS: function(e) {
    let {
      guilds: t
    } = e;
    f -= 1, l().map(t, u).forEach(e => g[e.id] = e)
  },
  DISCOVER_GUILDS_FETCH_FAILURE: function(e) {
    f -= 1
  }
})