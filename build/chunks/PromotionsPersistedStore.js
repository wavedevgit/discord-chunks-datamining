/** Chunk was on web.js **/
/** chunk id: 1844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk581883 = require("./581883.js"),
  Chunk605338 = require("./605338.js"),
  Chunk357 = require("./357.js"),
  Chunk397047 = require("./397047.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d() {
  return {
    hasFetchedConsumedInboundPromotionId: false,
    consumedInboundPromotionId: null,
    lastSeenOutboundPromotionStartDate: null
  }
}
let f = d(),
  _ = null,
  p = false,
  h = null,
  m = false,
  g = null,
  E = {
    [Chunk397047.$.BOGO]: {},
    [Chunk397047.$.MARKETING_MOMENT]: {},
    [Chunk397047.$.THIRD_PARTY_INBOUND]: {},
    [Chunk397047.$.THIRD_PARTY_OUTBOUND]: {}
  },
  b = null,
  y = new Map;

function O() {
  p = true
}

function v() {
  _ = null, p = false
}

function I(e) {
  let {
    activePromotion: t
  } = e;
  _ = {
    id: t.id,
    startDate: t.startDate.toISOString(),
    endDate: t.endDate.toISOString()
  }, h = Date.now(), p = false
}

function T(e) {
  let {
    promotions: t,
    consumedInboundPromotionId: n
  } = e;
  t.forEach(e => {
    if (e.promotion_type === c.$.THIRD_PARTY) E[c.$.THIRD_PARTY_OUTBOUND][e.id] = s.Z.createFromServer(e);
    else {
      var t;
      E[e.promotion_type][e.id] = s.Z.createFromServer(e), null == (t = e.marketing_components) || t.forEach(e => {
        y.set(e.component_type, l.Z.createFromServer(e))
      })
    }
  }), g = Date.now(), m = false, f.hasFetchedConsumedInboundPromotionId || (f.hasFetchedConsumedInboundPromotionId = true, f.consumedInboundPromotionId = n)
}

function S() {
  m = true
}

function A() {
  E = {
    [Chunk397047.$.BOGO]: {},
    [Chunk397047.$.MARKETING_MOMENT]: {},
    [Chunk397047.$.THIRD_PARTY_INBOUND]: {},
    [Chunk397047.$.THIRD_PARTY_OUTBOUND]: {}
  }, m = false
}

function C() {
  var e;
  let t = null;
  for (let e of Object.values(E[Chunk397047.$.THIRD_PARTY_OUTBOUND]))(null == exports || module.startDate > exports) && (t = module.startDate);
  return null != (e = null == exports ? true : exports.toISOString()) ? module : null
}

function N() {
  if (0 === Object.values(E[Chunk397047.$.THIRD_PARTY_OUTBOUND]).length) returnfalse;
  let e = C();
  null != module && (b = module)
}

function R() {
  if (0 === Object.values(E[Chunk397047.$.THIRD_PARTY_OUTBOUND]).length) returnfalse;
  let e = C();
  null != module && (b = module, f.lastSeenOutboundPromotionStartDate = module)
}

function P(e) {
  let {
    data: t
  } = e, n = l.Z.createFromServer(t);
  y.set(n.componentType, n)
}

function w() {
  f = d(), m = false, g = null, p = false, h = null, E = {
    [Chunk397047.$.BOGO]: {},
    [Chunk397047.$.MARKETING_MOMENT]: {},
    [Chunk397047.$.THIRD_PARTY_INBOUND]: {},
    [Chunk397047.$.THIRD_PARTY_OUTBOUND]: {}
  }, _ = null, y.clear()
}

function D() {
  var e, t, n;
  b = null != (n = null == (t = Chunk581883.Z.settings.userContent) || null == (e = exports.lastDismissedOutboundPromotionStartDate) ? true : module.value) ? require : null
}
class x extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (f = e), this.waitFor(o.Z), this.syncWith([o.Z], D)
  }
  get outboundPromotions() {
    return Object.values(E[Chunk397047.$.THIRD_PARTY_OUTBOUND])
  }
  get lastSeenOutboundPromotionStartDate() {
    return f.lastSeenOutboundPromotionStartDate
  }
  get lastDismissedOutboundPromotionStartDate() {
    return b
  }
  get lastFetchedActivePromotions() {
    return g
  }
  get isFetchingActivePromotions() {
    return m
  }
  get hasFetchedConsumedInboundPromotionId() {
    return f.hasFetchedConsumedInboundPromotionId
  }
  get consumedInboundPromotionId() {
    return f.consumedInboundPromotionId
  }
  get bogoPromotion() {
    return _
  }
  get isFetchingActiveBogoPromotion() {
    return p
  }
  get lastFetchedActiveBogoPromotion() {
    return h
  }
  get promotionsByType() {
    return E
  }
  getState() {
    return f
  }
  getMarketingComponentByType(e) {
    var t;
    return null != (t = y.get(e)) ? t : null
  }
}
u(x, "displayName", "PromotionsStore"), u(x, "persistKey", "PromotionsPersistedStore"), u(x, "migrations", [e => {
  try {
    delete e.bogoPromotion
  } catch (e) {}
  return e
}]);
let L = new x(Chunk570140.Z, {
  ACTIVE_PROMOTIONS_FETCH_SUCCESS: T,
  ACTIVE_PROMOTIONS_FETCH: S,
  ACTIVE_PROMOTIONS_FETCH_FAIL: A,
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: I,
  ACTIVE_BOGO_PROMOTION_FETCH: O,
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: v,
  OUTBOUND_PROMOTION_NOTICE_DISMISS: N,
  OUTBOUND_PROMOTIONS_SEEN: R,
  LOGOUT: w,
  PREMIUM_MARKETING_PREVIEW: P
})