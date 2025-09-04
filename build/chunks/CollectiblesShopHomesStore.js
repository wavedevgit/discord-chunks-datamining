/** Chunk was on web.js **/
/** chunk id: 52030, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk215023 = require("./215023.js"),
  Chunk474936 = require("./474936.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = [],
  d = new Map,
  f = new Map,
  _ = new Map,
  p = new Map,
  h = new Map,
  m = new Map,
  g = new Map,
  E = e => {
    h.set(e.tab, true), p.set(e.tab, true), _.set(e.tab, e.options), _.set(e.tab, e.options), f.set(e.tab, true), m.set(e.tab, false)
  },
  b = e => {
    g.set(e.tab, e.shopHome.shopBlocks), d.set(e.tab, Date.now()), h.set(e.tab, false), p.set(e.tab, true), f.set(e.tab, true), m.set(e.tab, false)
  },
  y = e => {
    g.set(e.tab, u), h.set(e.tab, false), p.set(e.tab, e.error), f.set(e.tab, Date.now()), m.set(e.tab, true)
  },
  O = e => {
    null != e.appliedUserDiscounts && e.appliedUserDiscounts.some(e => e.discount.id === l.$X || e.discount.id === l.nC) && m.set(s.AW.HOME, true)
  },
  v = () => {
    g.clear(), _.clear(), p.clear(), h.clear(), d.clear(), f.clear(), m.clear(), r = true
  },
  I = e => {
    r = e.shopHomeConfigOverride
  };
class T extends(i = Chunk442837.ZP.Store) {
  getLastSuccessfulFetch(e) {
    return d.get(e)
  }
  getLastErrorTimestamp(e) {
    return f.get(e)
  }
  getLastFetchOptions(e) {
    return _.get(e)
  }
  getFetchShopHomeError(e) {
    return p.get(e)
  }
  getIsFetchingShopHome(e) {
    return h.get(e)
  }
  getShopBlocks(e) {
    var t;
    return null != (t = g.get(e)) ? t : u
  }
  getHasKnownStaleData(e) {
    return m.get(e)
  }
  getShopHomeConfigOverride() {
    return r
  }
}
c(T, "displayName", "CollectiblesShopHomesStore");
let S = new T(Chunk570140.Z, {
  COLLECTIBLES_SHOP_HOME_FETCH: E,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: b,
  COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: y,
  COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: I,
  SKU_PURCHASE_SUCCESS: O,
  LOGOUT: v
})