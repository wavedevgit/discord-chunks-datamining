/** Chunk was on web.js **/
/** chunk id: 1844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk581883 = require("./581883.js"),
  Chunk605338 = require("./605338.js"),
  Chunk357 = require("./357.js"),
  Chunk518638 = require("./518638.js"),
  Chunk397047 = require("./397047.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f() {
  return {
    hasFetchedConsumedInboundPromotionId: false,
    consumedInboundPromotionId: null,
    lastSeenOutboundPromotionStartDate: null
  }
}
let p = f(),
  _ = null,
  m = false,
  h = null,
  g = false,
  E = null,
  b = {
    [Chunk397047.$k.BOGO]: {},
    [Chunk397047.$k.MARKETING_MOMENT]: {},
    [Chunk397047.$k.THIRD_PARTY_INBOUND]: {},
    [Chunk397047.$k.THIRD_PARTY_OUTBOUND]: {}
  },
  y = {},
  O = null,
  v = new Map;

function S() {
  m = true
}

function I() {
  _ = null, m = false
}

function T(e) {
  let {
    activePromotion: t
  } = e;
  _ = {
    id: t.id,
    startDate: t.startDate.toISOString(),
    endDate: t.endDate.toISOString()
  }, h = Date.now(), m = false
}

function A(e) {
  let {
    promotions: t,
    consumedInboundPromotionId: n
  } = e;
  t.forEach(e => {
    let t = s.Z.createFromServer(e);
    if (true === (0, c.pD)({
        promotionPartner: t.outboundTitle
      })) t.id in y || (y[t.id] = t);
    else if (e.promotion_type === u.$k.THIRD_PARTY) b[u.$k.THIRD_PARTY_OUTBOUND][e.id] = t;
    else {
      var n;
      b[e.promotion_type][e.id] = t, null == (n = e.marketing_components) || n.forEach(e => {
        v.set(e.component_type, l.Z.createFromServer(e))
      })
    }
  }), E = Date.now(), g = false, p.hasFetchedConsumedInboundPromotionId || (p.hasFetchedConsumedInboundPromotionId = true, p.consumedInboundPromotionId = n)
}

function C() {
  g = true
}

function N() {
  b = {
    [Chunk397047.$k.BOGO]: {},
    [Chunk397047.$k.MARKETING_MOMENT]: {},
    [Chunk397047.$k.THIRD_PARTY_INBOUND]: {},
    [Chunk397047.$k.THIRD_PARTY_OUTBOUND]: {}
  }, g = false, y = {}
}

function P() {
  var e;
  let t = null;
  for (let e of Object.values(b[Chunk397047.$k.THIRD_PARTY_OUTBOUND]))(null == exports || module.startDate > exports) && (t = module.startDate);
  return null != (e = null == exports ? true : exports.toISOString()) ? module : null
}

function R() {
  if (0 === Object.values(b[Chunk397047.$k.THIRD_PARTY_OUTBOUND]).length) returnfalse;
  let e = P();
  null != module && (O = module)
}

function D() {
  if (0 === Object.values(b[Chunk397047.$k.THIRD_PARTY_OUTBOUND]).length) returnfalse;
  let e = P();
  null != module && (O = module, p.lastSeenOutboundPromotionStartDate = module)
}

function w(e) {
  let {
    data: t
  } = e, n = l.Z.createFromServer(t);
  v.set(n.componentType, n)
}

function x() {
  p = f(), g = false, E = null, m = false, h = null, b = {
    [Chunk397047.$k.BOGO]: {},
    [Chunk397047.$k.MARKETING_MOMENT]: {},
    [Chunk397047.$k.THIRD_PARTY_INBOUND]: {},
    [Chunk397047.$k.THIRD_PARTY_OUTBOUND]: {}
  }, _ = null, y = {}, v.clear()
}

function L() {
  var e, t, n;
  O = null != (n = null == (t = Chunk581883.Z.settings.userContent) || null == (e = exports.lastDismissedOutboundPromotionStartDate) ? true : module.value) ? require : null
}
class j extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (p = e), this.waitFor(o.Z), this.syncWith([o.Z], L)
  }
  get outboundPromotions() {
    return Object.values(b[Chunk397047.$k.THIRD_PARTY_OUTBOUND])
  }
  get outboundRecurringPromotions() {
    return Object.values(y)
  }
  get lastSeenOutboundPromotionStartDate() {
    return p.lastSeenOutboundPromotionStartDate
  }
  get lastDismissedOutboundPromotionStartDate() {
    return O
  }
  get lastFetchedActivePromotions() {
    return E
  }
  get isFetchingActivePromotions() {
    return g
  }
  get hasFetchedConsumedInboundPromotionId() {
    return p.hasFetchedConsumedInboundPromotionId
  }
  get consumedInboundPromotionId() {
    return p.consumedInboundPromotionId
  }
  get bogoPromotion() {
    return _
  }
  get isFetchingActiveBogoPromotion() {
    return m
  }
  get lastFetchedActiveBogoPromotion() {
    return h
  }
  get promotionsByType() {
    return b
  }
  getState() {
    return p
  }
  getMarketingComponentByType(e) {
    var t;
    return null != (t = v.get(e)) ? t : null
  }
}
d(j, "displayName", "PromotionsStore"), d(j, "persistKey", "PromotionsPersistedStore"), d(j, "migrations", [e => {
  try {
    delete e.bogoPromotion
  } catch (e) {}
  return e
}]);
let M = new j(Chunk570140.Z, {
  ACTIVE_PROMOTIONS_FETCH_SUCCESS: A,
  ACTIVE_PROMOTIONS_FETCH: C,
  ACTIVE_PROMOTIONS_FETCH_FAIL: N,
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: T,
  ACTIVE_BOGO_PROMOTION_FETCH: S,
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: I,
  OUTBOUND_PROMOTION_NOTICE_DISMISS: R,
  OUTBOUND_PROMOTIONS_SEEN: D,
  LOGOUT: x,
  PREMIUM_MARKETING_PREVIEW: w
})