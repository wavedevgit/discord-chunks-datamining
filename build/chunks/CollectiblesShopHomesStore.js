/** Chunk was on web.js **/
/** chunk id: 52030, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => T
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
  p = new Map,
  _ = new Map,
  m = new Map,
  h = new Map,
  g = new Map,
  E = e => {
    m.set(e.tab, true), _.set(e.tab, true), p.set(e.tab, e.options), p.set(e.tab, e.options), f.set(e.tab, true), h.set(e.tab, false)
  },
  b = e => {
    g.set(e.tab, e.shopHome.shopBlocks), d.set(e.tab, Date.now()), m.set(e.tab, false), _.set(e.tab, true), f.set(e.tab, true), h.set(e.tab, false)
  },
  y = e => {
    g.set(e.tab, u), m.set(e.tab, false), _.set(e.tab, e.error), f.set(e.tab, Date.now()), h.set(e.tab, true)
  },
  O = e => {
    null != e.appliedUserDiscounts && e.appliedUserDiscounts.some(e => e.discount.id === l.$X || e.discount.id === l.nC) && h.set(s.AW.HOME, true)
  },
  v = () => {
    g.clear(), p.clear(), _.clear(), m.clear(), d.clear(), f.clear(), h.clear(), r = true
  },
  S = e => {
    r = e.shopHomeConfigOverride
  };
class I extends(i = Chunk442837.ZP.Store) {
  getLastSuccessfulFetch(e) {
    return d.get(e)
  }
  getLastErrorTimestamp(e) {
    return f.get(e)
  }
  getLastFetchOptions(e) {
    return p.get(e)
  }
  getFetchShopHomeError(e) {
    return _.get(e)
  }
  getIsFetchingShopHome(e) {
    return m.get(e)
  }
  getShopBlocks(e) {
    var t;
    return null != (t = g.get(e)) ? t : u
  }
  getHasKnownStaleData(e) {
    return h.get(e)
  }
  getShopHomeConfigOverride() {
    return r
  }
}
c(I, "displayName", "CollectiblesShopHomesStore");
let T = new I(Chunk570140.Z, {
  COLLECTIBLES_SHOP_HOME_FETCH: E,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: b,
  COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: y,
  COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: S,
  SKU_PURCHASE_SUCCESS: O,
  LOGOUT: v
})