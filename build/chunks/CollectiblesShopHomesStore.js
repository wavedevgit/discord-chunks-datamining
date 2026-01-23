/** Chunk was on web.js **/
/** chunk id: 295811, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => S
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk758836 = require("./758836.js"),
  Chunk788868 = require("./788868.js");

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
  h = new Map,
  m = new Map,
  g = new Map,
  E = e => {
    h.set(e.tab, true), _.set(e.tab, true), p.set(e.tab, e.options), p.set(e.tab, e.options), f.set(e.tab, true), m.set(e.tab, false)
  },
  y = e => {
    g.set(e.tab, e.shopHome.shopBlocks), d.set(e.tab, Date.now()), h.set(e.tab, false), _.set(e.tab, true), f.set(e.tab, true), m.set(e.tab, false)
  },
  b = e => {
    g.set(e.tab, u), h.set(e.tab, false), _.set(e.tab, e.error), f.set(e.tab, Date.now()), m.set(e.tab, true)
  },
  O = e => {
    null != e.appliedUserDiscounts && e.appliedUserDiscounts.some(e => e.discount.id === l.eR || e.discount.id === l.Qz || e.discount.id === l.tU) && m.set(o.G2.HOME, true)
  },
  v = () => {
    g.clear(), p.clear(), _.clear(), h.clear(), d.clear(), f.clear(), m.clear(), r = true
  },
  A = e => {
    r = e.shopHomeConfigOverride
  };
class I extends(i = Chunk311907.Ay.Store) {
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
c(I, "displayName", "CollectiblesShopHomesStore");
let S = new I(Chunk73153.h, {
  COLLECTIBLES_SHOP_HOME_FETCH: E,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: y,
  COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: b,
  COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: A,
  SKU_PURCHASE_SUCCESS: O,
  LOGOUT: v
})