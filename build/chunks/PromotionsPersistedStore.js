/** Chunk was on web.js **/
/** chunk id: 1844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./539854.js");
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
let _ = f(),
  p = null,
  h = false,
  m = null,
  g = false,
  E = null,
  b = {
    [Chunk397047.$k.BOGO]: {},
    [Chunk397047.$k.MARKETING_MOMENT]: {},
    [Chunk397047.$k.THIRD_PARTY_INBOUND]: {},
    [Chunk397047.$k.THIRD_PARTY_OUTBOUND]: {}
  },
  y = [],
  O = null,
  v = new Map;

function I() {
  h = true
}

function S() {
  p = null, h = false
}

function T(e) {
  let {
    activePromotion: t
  } = e;
  p = {
    id: t.id,
    startDate: t.startDate.toISOString(),
    endDate: t.endDate.toISOString()
  }, m = Date.now(), h = false
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
      })) y.push(t);
    else if (e.promotion_type === u.$k.THIRD_PARTY) b[u.$k.THIRD_PARTY_OUTBOUND][e.id] = t;
    else {
      var n;
      b[e.promotion_type][e.id] = t, null == (n = e.marketing_components) || n.forEach(e => {
        v.set(e.component_type, l.Z.createFromServer(e))
      })
    }
  }), E = Date.now(), g = false, _.hasFetchedConsumedInboundPromotionId || (_.hasFetchedConsumedInboundPromotionId = true, _.consumedInboundPromotionId = n)
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
  }, g = false, y = []
}

function R() {
  var e;
  let t = null;
  for (let e of Object.values(b[Chunk397047.$k.THIRD_PARTY_OUTBOUND]))(null == exports || module.startDate > exports) && (t = module.startDate);
  return null != (e = null == exports ? true : exports.toISOString()) ? module : null
}

function P() {
  if (0 === Object.values(b[Chunk397047.$k.THIRD_PARTY_OUTBOUND]).length) returnfalse;
  let e = R();
  null != module && (O = module)
}

function w() {
  if (0 === Object.values(b[Chunk397047.$k.THIRD_PARTY_OUTBOUND]).length) returnfalse;
  let e = R();
  null != module && (O = module, _.lastSeenOutboundPromotionStartDate = module)
}

function D(e) {
  let {
    data: t
  } = e, n = l.Z.createFromServer(t);
  v.set(n.componentType, n)
}

function x() {
  _ = f(), g = false, E = null, h = false, m = null, b = {
    [Chunk397047.$k.BOGO]: {},
    [Chunk397047.$k.MARKETING_MOMENT]: {},
    [Chunk397047.$k.THIRD_PARTY_INBOUND]: {},
    [Chunk397047.$k.THIRD_PARTY_OUTBOUND]: {}
  }, p = null, y = [], v.clear()
}

function L() {
  var e, t, n;
  O = null != (n = null == (t = Chunk581883.Z.settings.userContent) || null == (e = exports.lastDismissedOutboundPromotionStartDate) ? true : module.value) ? require : null
}
class M extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (_ = e), this.waitFor(o.Z), this.syncWith([o.Z], L)
  }
  get outboundPromotions() {
    return Object.values(b[Chunk397047.$k.THIRD_PARTY_OUTBOUND])
  }
  get outboundRecurringPromotions() {
    return y
  }
  get lastSeenOutboundPromotionStartDate() {
    return _.lastSeenOutboundPromotionStartDate
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
    return _.hasFetchedConsumedInboundPromotionId
  }
  get consumedInboundPromotionId() {
    return _.consumedInboundPromotionId
  }
  get bogoPromotion() {
    return p
  }
  get isFetchingActiveBogoPromotion() {
    return h
  }
  get lastFetchedActiveBogoPromotion() {
    return m
  }
  get promotionsByType() {
    return b
  }
  getState() {
    return _
  }
  getMarketingComponentByType(e) {
    var t;
    return null != (t = v.get(e)) ? t : null
  }
}
d(M, "displayName", "PromotionsStore"), d(M, "persistKey", "PromotionsPersistedStore"), d(M, "migrations", [e => {
  try {
    delete e.bogoPromotion
  } catch (e) {}
  return e
}]);
let j = new M(Chunk570140.Z, {
  ACTIVE_PROMOTIONS_FETCH_SUCCESS: A,
  ACTIVE_PROMOTIONS_FETCH: C,
  ACTIVE_PROMOTIONS_FETCH_FAIL: N,
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: T,
  ACTIVE_BOGO_PROMOTION_FETCH: I,
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: S,
  OUTBOUND_PROMOTION_NOTICE_DISMISS: P,
  OUTBOUND_PROMOTIONS_SEEN: w,
  LOGOUT: x,
  PREMIUM_MARKETING_PREVIEW: D
})