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
  p = new Set,
  _ = new Map,
  m = new Map,
  h = null,
  g = false,
  E = e => {
    d.add(e.skuId)
  },
  b = e => {
    u.set(e.skuId, e.price), d.delete(e.skuId)
  },
  y = e => {
    d.delete(e.skuId), p.add(e.skuId)
  },
  O = e => {
    p.delete(e.skuId)
  },
  v = e => {
    if (1 !== e.entitlements.length) return;
    let t = e.entitlements[0];
    l.Rm.has(t.sku_id) && _.set(e.skuId, s.Z.createFromServer(t))
  },
  S = e => {
    f.delete(e.skuId), _.set(e.skuId, e.entitlement), null != e.numPotions && m.set(e.skuId, e.numPotions)
  },
  I = e => {
    p.add(e.skuId), f.delete(e.skuId)
  },
  T = e => {
    f.add(e.skuId)
  },
  A = e => {
    h = e.previousGoLiveSettings
  },
  C = e => {
    _.delete(e.skuId)
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
  P = e => {
    g = e.enabled
  };
class R extends(i = Chunk442837.ZP.Store) {
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
    return p.has(e)
  }
  getEntitlement(e) {
    return _.get(e)
  }
  fetchPotionCount(e) {
    return m.get(e)
  }
  isEntitlementFetched(e) {
    return _.has(e)
  }
  isEntitlementFetching(e) {
    return f.has(e)
  }
  getPreviousGoLiveSettings() {
    return h
  }
}
c(R, "displayName", "ConsumablesStore");
let w = new R(Chunk570140.Z, {
  CONSUMABLES_PRICE_FETCH_STARTED: E,
  CONSUMABLES_PRICE_FETCH_SUCCEEDED: b,
  CONSUMABLES_PRICE_FETCH_FAILED: y,
  CONSUMABLES_CLEAR_ERROR: O,
  CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: S,
  SKU_PURCHASE_SUCCESS: v,
  CONSUMABLES_ENTITLEMENT_FETCH_FAILED: I,
  CONSUMABLES_ENTITLEMENT_FETCH_STARTED: T,
  SET_PREVIOUS_GO_LIVE_SETTINGS: A,
  CLEAR_CONSUMED_ENTITLEMENT: C,
  POTIONS_TRIGGER_MESSAGE_CONFETTI: N,
  POTIONS_SET_CONFETTI_MODE: P
})