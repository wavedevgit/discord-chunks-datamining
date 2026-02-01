/** Chunk was on 9753 **/
/** chunk id: 697627, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p,
  e: () => u
}), require("./896048.js");
var r, i, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let o = new Map,
  c = new Map;
var u = ((i = {})[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i);
class d extends(r = Chunk311907.Ay.Store) {
  getPriceTiersFetchStateForGuildAndType(e, t) {
    var n, r;
    return null != (n = null == (r = c.get(e)) ? true : r.get(t)) ? n : 0
  }
  getPriceTiersForGuildAndType(e, t) {
    var n;
    return null == (n = o.get(e)) ? true : n.get(t)
  }
}(l = "displayName") in d ? Object.defineProperty(d, l, {
  value: "CreatorMonetizationStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[l] = "CreatorMonetizationStore";
let p = new d(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    o.clear(), c.clear()
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
    c.has(t) || c.set(t, new Map), c.get(t).set(n, 2), o.has(t) || o.set(t, new Map), o.get(t).set(n, r)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    c.has(t) || c.set(t, new Map), c.get(t).set(n, 2)
  }
})