/** Chunk was on web.js **/
/** chunk id: 52030, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = [],
  c = new Map,
  u = new Map,
  d = new Map,
  f = new Map,
  _ = new Map,
  p = new Map,
  h = e => {
    _.set(e.tab, true), f.set(e.tab, true), d.set(e.tab, e.options), d.set(e.tab, e.options), u.set(e.tab, true)
  },
  m = e => {
    p.set(e.tab, e.shopHome.shopBlocks), c.set(e.tab, Date.now()), _.set(e.tab, false), f.set(e.tab, true), u.set(e.tab, true)
  },
  g = e => {
    p.set(e.tab, l), _.set(e.tab, false), f.set(e.tab, e.error), u.set(e.tab, Date.now())
  },
  E = () => {
    p.clear(), d.clear(), f.clear(), _.clear(), c.clear(), u.clear(), r = true
  },
  b = e => {
    r = e.shopHomeConfigOverride
  };
class y extends(i = Chunk442837.ZP.Store) {
  getLastSuccessfulFetch(e) {
    return c.get(e)
  }
  getLastErrorTimestamp(e) {
    return u.get(e)
  }
  getLastFetchOptions(e) {
    return d.get(e)
  }
  getFetchShopHomeError(e) {
    return f.get(e)
  }
  getIsFetchingShopHome(e) {
    return _.get(e)
  }
  getShopBlocks(e) {
    var t;
    return null != (t = p.get(e)) ? t : l
  }
  getShopHomeConfigOverride() {
    return r
  }
}
s(y, "displayName", "CollectiblesShopHomesStore");
let O = new y(Chunk570140.Z, {
  COLLECTIBLES_SHOP_HOME_FETCH: h,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: m,
  COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: g,
  COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: b,
  LOGOUT: E
})