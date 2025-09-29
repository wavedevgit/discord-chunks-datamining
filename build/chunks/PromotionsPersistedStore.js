/** Chunk was on web.js **/
/** chunk id: 1844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk581883 = require("./581883.js"),
  Chunk605338 = require("./605338.js"),
  Chunk397047 = require("./397047.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u() {
  return {
    hasFetchedConsumedInboundPromotionId: false,
    consumedInboundPromotionId: null,
    lastSeenOutboundPromotionStartDate: null
  }
}
let d = u(),
  f = null,
  _ = false,
  p = null,
  h = false,
  m = null,
  g = {
    [Chunk397047.$.BOGO]: {},
    [Chunk397047.$.MARKETING_MOMENT]: {},
    [Chunk397047.$.THIRD_PARTY_INBOUND]: {},
    [Chunk397047.$.THIRD_PARTY_OUTBOUND]: {}
  },
  E = null;

function b() {
  _ = true
}

function y() {
  f = null, _ = false
}

function O(e) {
  let {
    activePromotion: t
  } = e;
  f = {
    id: t.id,
    startDate: t.startDate.toISOString(),
    endDate: t.endDate.toISOString()
  }, p = Date.now(), _ = false
}

function v(e) {
  return [l.$.THIRD_PARTY, l.$.THIRD_PARTY_OUTBOUND].includes(e.promotion_type)
}

function I(e) {
  let {
    promotions: t,
    consumedInboundPromotionId: n
  } = e;
  t.forEach(e => {
    true === v(e) && (g[l.$.THIRD_PARTY_OUTBOUND][e.id] = s.Z.createFromServer(e))
  }), m = Date.now(), h = false, d.hasFetchedConsumedInboundPromotionId || (d.hasFetchedConsumedInboundPromotionId = true, d.consumedInboundPromotionId = n)
}

function T() {
  h = true
}

function S() {
  g = {
    [Chunk397047.$.BOGO]: {},
    [Chunk397047.$.MARKETING_MOMENT]: {},
    [Chunk397047.$.THIRD_PARTY_INBOUND]: {},
    [Chunk397047.$.THIRD_PARTY_OUTBOUND]: {}
  }, h = false
}

function A() {
  var e;
  let t = null;
  for (let e of Object.values(g[Chunk397047.$.THIRD_PARTY_OUTBOUND]))(null == exports || module.startDate > exports) && (t = module.startDate);
  return null != (e = null == exports ? true : exports.toISOString()) ? module : null
}

function C() {
  if (0 === Object.values(g[Chunk397047.$.THIRD_PARTY_OUTBOUND]).length) returnfalse;
  let e = A();
  null != module && (E = module)
}

function N() {
  if (0 === Object.values(g[Chunk397047.$.THIRD_PARTY_OUTBOUND]).length) returnfalse;
  let e = A();
  null != module && (E = module, d.lastSeenOutboundPromotionStartDate = module)
}

function R() {
  d = u(), h = false, m = null, _ = false, p = null, g = {
    [Chunk397047.$.BOGO]: {},
    [Chunk397047.$.MARKETING_MOMENT]: {},
    [Chunk397047.$.THIRD_PARTY_INBOUND]: {},
    [Chunk397047.$.THIRD_PARTY_OUTBOUND]: {}
  }, f = null
}

function P() {
  var e, t, n;
  E = null != (n = null == (t = Chunk581883.Z.settings.userContent) || null == (e = exports.lastDismissedOutboundPromotionStartDate) ? true : module.value) ? require : null
}
class w extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (d = e), this.waitFor(o.Z), this.syncWith([o.Z], P)
  }
  get outboundPromotions() {
    return Object.values(g[Chunk397047.$.THIRD_PARTY_OUTBOUND])
  }
  get lastSeenOutboundPromotionStartDate() {
    return d.lastSeenOutboundPromotionStartDate
  }
  get lastDismissedOutboundPromotionStartDate() {
    return E
  }
  get lastFetchedActivePromotions() {
    return m
  }
  get isFetchingActiveOutboundPromotions() {
    return h
  }
  get hasFetchedConsumedInboundPromotionId() {
    return d.hasFetchedConsumedInboundPromotionId
  }
  get consumedInboundPromotionId() {
    return d.consumedInboundPromotionId
  }
  get bogoPromotion() {
    return f
  }
  get isFetchingActiveBogoPromotion() {
    return _
  }
  get lastFetchedActiveBogoPromotion() {
    return p
  }
  get promotionsByType() {
    return g
  }
  getState() {
    return d
  }
}
c(w, "displayName", "PromotionsStore"), c(w, "persistKey", "PromotionsPersistedStore"), c(w, "migrations", [e => {
  try {
    delete e.bogoPromotion
  } catch (e) {}
  return e
}]);
let D = new w(Chunk570140.Z, {
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: I,
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH: T,
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: S,
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: O,
  ACTIVE_BOGO_PROMOTION_FETCH: b,
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: y,
  OUTBOUND_PROMOTION_NOTICE_DISMISS: C,
  OUTBOUND_PROMOTIONS_SEEN: N,
  LOGOUT: R
})