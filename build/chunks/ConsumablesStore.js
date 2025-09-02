/** Chunk was on web.js **/
/** chunk id: 823961, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk959546 = require("./959546.js"),
  Chunk317951 = require("./317951.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Map,
  d = new Set,
  f = new Set,
  _ = new Set,
  p = new Map,
  h = new Map,
  m = null,
  g = false,
  E = e => {
    d.add(e.skuId)
  },
  b = e => {
    u.set(e.skuId, e.price), d.delete(e.skuId)
  },
  y = e => {
    d.delete(e.skuId), _.add(e.skuId)
  },
  O = e => {
    _.delete(e.skuId)
  },
  v = e => {
    if (1 !== e.entitlements.length) return;
    let t = e.entitlements[0];
    l.Rm.has(t.sku_id) && p.set(e.skuId, s.Z.createFromServer(t))
  },
  I = e => {
    f.delete(e.skuId), p.set(e.skuId, e.entitlement), null != e.numPotions && h.set(e.skuId, e.numPotions)
  },
  S = e => {
    _.add(e.skuId), f.delete(e.skuId)
  },
  T = e => {
    f.add(e.skuId)
  },
  A = e => {
    m = e.previousGoLiveSettings
  },
  C = e => {
    p.delete(e.skuId)
  },
  N = e => {
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
    g = e.enabled
  };
class P extends(i = Chunk442837.ZP.Store) {
  get lastConfetti() {
    return r
  }
  get confettiMode() {
    return g
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
    return m
  }
}
c(P, "displayName", "ConsumablesStore");
let w = new P(Chunk570140.Z, {
  CONSUMABLES_PRICE_FETCH_STARTED: E,
  CONSUMABLES_PRICE_FETCH_SUCCEEDED: b,
  CONSUMABLES_PRICE_FETCH_FAILED: y,
  CONSUMABLES_CLEAR_ERROR: O,
  CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: I,
  SKU_PURCHASE_SUCCESS: v,
  CONSUMABLES_ENTITLEMENT_FETCH_FAILED: S,
  CONSUMABLES_ENTITLEMENT_FETCH_STARTED: T,
  SET_PREVIOUS_GO_LIVE_SETTINGS: A,
  CLEAR_CONSUMED_ENTITLEMENT: C,
  POTIONS_TRIGGER_MESSAGE_CONFETTI: N,
  POTIONS_SET_CONFETTI_MODE: R
})