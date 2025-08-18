/** Chunk was on 91173 **/
/** chunk id: 281320, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => u,
  Z: () => p
}), require("./388685.js");
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = new Map,
  c = new Map;
var u = ((i = {})[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i);
class d extends(r = Chunk442837.ZP.Store) {
  getPriceTiersFetchStateForGuildAndType(e, t) {
    var n, r;
    return null != (r = null == (n = c.get(e)) ? true : n.get(t)) ? r : 0
  }
  getPriceTiersForGuildAndType(e, t) {
    var n;
    return null == (n = s.get(e)) ? true : n.get(t)
  }
}(l = "displayName") in d ? Object.defineProperty(d, l, {
  value: "CreatorMonetizationStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[l] = "CreatorMonetizationStore";
let p = new d(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    s.clear(), c.clear()
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    c.has(t) || c.set(t, new Map), c.get(t).set(n, 1)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      priceTierType: n,
      priceTiers: r
    } = e;
    c.has(t) || c.set(t, new Map), c.get(t).set(n, 2), s.has(t) || s.set(t, new Map), s.get(t).set(n, r)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    c.has(t) || c.set(t, new Map), c.get(t).set(n, 2)
  }
})