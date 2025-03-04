/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => v
}), n(47120);
var r, i = n(442837),
  o = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = [],
  l = new Map,
  c = new Map,
  u = new Map,
  d = new Map,
  f = new Map,
  _ = new Map,
  p = e => {
    f.set(e.tab, !0), d.set(e.tab, void 0), u.set(e.tab, e.options), u.set(e.tab, e.options), c.set(e.tab, void 0)
  },
  h = e => {
    _.set(e.tab, e.shopHome.shopBlocks), l.set(e.tab, Date.now()), f.set(e.tab, !1), d.set(e.tab, void 0), c.set(e.tab, void 0)
  },
  g = e => {
    _.set(e.tab, s), f.set(e.tab, !1), d.set(e.tab, e.error), c.set(e.tab, Date.now())
  },
  m = () => {
    _.clear(), u.clear(), d.clear(), f.clear(), l.clear(), c.clear()
  };
class E extends(r = i.ZP.Store) {
  getLastSuccessfulFetch(e) {
    return l.get(e)
  }
  getLastErrorTimestamp(e) {
    return c.get(e)
  }
  getLastFetchOptions(e) {
    return u.get(e)
  }
  getFetchShopHomeError(e) {
    return d.get(e)
  }
  getIsFetchingShopHome(e) {
    return f.get(e)
  }
  getShopBlocks(e) {
    var t;
    return null !== (t = _.get(e)) && void 0 !== t ? t : s
  }
}
a(E, "displayName", "CollectiblesShopHomesStore");
let v = new E(o.Z, {
  COLLECTIBLES_SHOP_HOME_FETCH: p,
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: h,
  COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: g,
  LOGOUT: m
})