/** Chunk was on web.js **/
"use strict";
let r;
n.d(t, {
  Z: () => D
}), n(47120);
var i, o = n(442837),
  a = n(570140),
  s = n(959546),
  l = n(317951);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = new Map,
  d = new Set,
  f = new Set,
  _ = new Set,
  p = new Map,
  h = new Map,
  g = null,
  m = !1,
  E = e => {
    d.add(e.skuId)
  },
  v = e => {
    u.set(e.skuId, e.price), d.delete(e.skuId)
  },
  b = e => {
    d.delete(e.skuId), _.add(e.skuId)
  },
  y = e => {
    _.delete(e.skuId)
  },
  O = e => {
    if (1 !== e.entitlements.length) return;
    let t = e.entitlements[0];
    l.Rm.has(t.sku_id) && p.set(e.skuId, s.Z.createFromServer(t))
  },
  S = e => {
    f.delete(e.skuId), p.set(e.skuId, e.entitlement), null != e.numPotions && h.set(e.skuId, e.numPotions)
  },
  I = e => {
    _.add(e.skuId), f.delete(e.skuId)
  },
  T = e => {
    f.add(e.skuId)
  },
  N = e => {
    g = e.previousGoLiveSettings
  },
  A = e => {
    p.delete(e.skuId)
  },
  C = e => {
    let {
      emoji: t,
      boundingRect: n
    } = e;
    r = {
      emoji: t,
      boundingRect: n,
      triggerTime: Date.now()
    }
  },
  R = e => {
    m = e.enabled
  };
class P extends(i = o.ZP.Store) {
  get lastConfetti() {
    return r
  }
  get confettiMode() {
    return m
  }
  getPrice(e) {
    return u.get(e)
  }
  isFetchingPrice(e) {
    return d.has(e)
  }
  getErrored(e) {
    return _.has(e)
  }
  getEntitlement(e) {
    return p.get(e)
  }
  fetchPotionCount(e) {
    return h.get(e)
  }
  isEntitlementFetched(e) {
    return p.has(e)
  }
  isEntitlementFetching(e) {
    return f.has(e)
  }
  getPreviousGoLiveSettings() {
    return g
  }
}
c(P, "displayName", "ConsumablesStore");
let D = new P(a.Z, {
  CONSUMABLES_PRICE_FETCH_STARTED: E,
  CONSUMABLES_PRICE_FETCH_SUCCEEDED: v,
  CONSUMABLES_PRICE_FETCH_FAILED: b,
  CONSUMABLES_CLEAR_ERROR: y,
  CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: S,
  SKU_PURCHASE_SUCCESS: O,
  CONSUMABLES_ENTITLEMENT_FETCH_FAILED: I,
  CONSUMABLES_ENTITLEMENT_FETCH_STARTED: T,
  SET_PREVIOUS_GO_LIVE_SETTINGS: N,
  CLEAR_CONSUMED_ENTITLEMENT: A,
  POTIONS_TRIGGER_MESSAGE_CONFETTI: C,
  POTIONS_SET_CONFETTI_MODE: R
})