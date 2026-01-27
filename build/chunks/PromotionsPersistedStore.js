/** Chunk was on web.js **/
/** chunk id: 412260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk617617 = require("./617617.js"),
  Chunk835095 = require("./835095.js"),
  Chunk822571 = require("./822571.js"),
  Chunk264779 = require("./264779.js"),
  Chunk852218 = require("./852218.js");

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
  h = false,
  m = null,
  g = false,
  E = null,
  y = {
    [Chunk852218.pt.BOGO]: {},
    [Chunk852218.pt.MARKETING_MOMENT]: {},
    [Chunk852218.pt.THIRD_PARTY_INBOUND]: {},
    [Chunk852218.pt.THIRD_PARTY_OUTBOUND]: {},
    [Chunk852218.pt.GIFT_PROMOTION]: {},
    [Chunk852218.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {}
  },
  b = {},
  O = null,
  v = new Map;

function A() {
  h = true
}

function I() {
  _ = null, h = false
}

function S(e) {
  let {
    activePromotion: t
  } = e;
  _ = {
    id: t.id,
    startDate: t.startDate.toISOString(),
    endDate: t.endDate.toISOString()
  }, m = Date.now(), h = false
}

function T(e) {
  let {
    promotions: t,
    consumedInboundPromotionId: n
  } = e;
  b = {}, y = {
    [u.pt.BOGO]: {},
    [u.pt.MARKETING_MOMENT]: {},
    [u.pt.THIRD_PARTY_INBOUND]: {},
    [u.pt.THIRD_PARTY_OUTBOUND]: {},
    [u.pt.GIFT_PROMOTION]: {},
    [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {}
  }, v = new Map, t.forEach(e => {
    let t = s.A.createFromServer(e);
    if (true === (0, c.HB)({
        promotionPartner: t.outboundTitle,
        promotionType: t.promotionType
      })) t.id in b || (b[t.id] = t);
    else if (e.promotion_type === u.pt.THIRD_PARTY) y[u.pt.THIRD_PARTY_OUTBOUND][e.id] = t;
    else {
      var n;
      y[e.promotion_type][e.id] = t, null == (n = e.marketing_components) || n.forEach(e => {
        v.set(e.component_type, l.A.createFromServer(e))
      })
    }
  }), E = Date.now(), g = false, p.hasFetchedConsumedInboundPromotionId || (p.hasFetchedConsumedInboundPromotionId = true, p.consumedInboundPromotionId = n)
}

function C() {
  g = true
}

function N() {
  y = {
    [u.pt.BOGO]: {},
    [u.pt.MARKETING_MOMENT]: {},
    [u.pt.THIRD_PARTY_INBOUND]: {},
    [u.pt.THIRD_PARTY_OUTBOUND]: {},
    [u.pt.GIFT_PROMOTION]: {},
    [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {}
  }, v = new Map, g = false, b = {}
}

function w() {
  var e;
  let t = null;
  for (let e of Object.values(y[u.pt.THIRD_PARTY_OUTBOUND]))(null == t || e.startDate > t) && (t = e.startDate);
  return null != (e = null == t ? true : t.toISOString()) ? e : null
}

function R() {
  if (0 === Object.values(y[u.pt.THIRD_PARTY_OUTBOUND]).length) returnfalse;
  let e = w();
  null != e && (O = e)
}

function P() {
  if (0 === Object.values(y[u.pt.THIRD_PARTY_OUTBOUND]).length) returnfalse;
  let e = w();
  null != e && (O = e, p.lastSeenOutboundPromotionStartDate = e)
}

function D(e) {
  let {
    data: t
  } = e, n = l.A.createFromServer(t);
  v.set(n.componentType, n)
}

function L() {
  p = f(), g = false, E = null, h = false, m = null, y = {
    [u.pt.BOGO]: {},
    [u.pt.MARKETING_MOMENT]: {},
    [u.pt.THIRD_PARTY_INBOUND]: {},
    [u.pt.THIRD_PARTY_OUTBOUND]: {},
    [u.pt.GIFT_PROMOTION]: {},
    [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {}
  }, _ = null, b = {}, v.clear()
}

function x() {
  var e, t, n;
  O = null != (e = null == (n = o.A.settings.userContent) || null == (t = n.lastDismissedOutboundPromotionStartDate) ? true : t.value) ? e : null
}
class M extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (p = e), this.waitFor(o.A), this.syncWith([o.A], x)
  }
  get outboundPromotions() {
    return Object.values(y[u.pt.THIRD_PARTY_OUTBOUND])
  }
  get outboundRecurringPromotions() {
    return Object.values(b)
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
    return h
  }
  get lastFetchedActiveBogoPromotion() {
    return m
  }
  get promotionsByType() {
    return y
  }
  getPromotionByTypeAndId(e, t) {
    var n;
    return null == (n = y[e]) ? true : n[t]
  }
  getState() {
    return p
  }
  getMarketingComponentByType(e) {
    var t;
    return null != (t = v.get(e)) ? t : null
  }
  getGiftPromotionRewardSkuIds() {
    let e = y[u.pt.GIFT_PROMOTION],
      t = Object.keys(e);
    return 0 === t.length ? [] : e[t[0]].rewardSkuIds
  }
}
d(M, "displayName", "PromotionsStore"), d(M, "persistKey", "PromotionsPersistedStore"), d(M, "migrations", [e => {
  try {
    delete e.bogoPromotion
  } catch (e) {}
  return e
}]);
let j = new M(Chunk73153.h, {
  ACTIVE_PROMOTIONS_FETCH_SUCCESS: T,
  ACTIVE_PROMOTIONS_FETCH: C,
  ACTIVE_PROMOTIONS_FETCH_FAIL: N,
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: S,
  ACTIVE_BOGO_PROMOTION_FETCH: A,
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: I,
  OUTBOUND_PROMOTION_NOTICE_DISMISS: R,
  OUTBOUND_PROMOTIONS_SEEN: P,
  LOGOUT: L,
  PREMIUM_MARKETING_PREVIEW: D
})