/** Chunk was on web.js **/
/** chunk id: 1844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk581883 = require("./581883.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l() {
  return {
    hasFetchedConsumedInboundPromotionId: false,
    consumedInboundPromotionId: null,
    lastSeenOutboundPromotionStartDate: null
  }
}
let c = l(),
  u = null,
  d = false,
  f = null,
  _ = false,
  p = null,
  h = [],
  m = null;

function g() {
  d = true
}

function E() {
  u = null, d = false
}

function b(e) {
  let {
    activePromotion: t
  } = e;
  u = {
    id: t.id,
    startDate: t.startDate.toISOString(),
    endDate: t.endDate.toISOString()
  }, f = Date.now(), d = false
}

function y(e) {
  let {
    activeOutboundPromotions: t,
    consumedInboundPromotionId: n
  } = e;
  h = t, p = Date.now(), _ = false, c.hasFetchedConsumedInboundPromotionId || (c.hasFetchedConsumedInboundPromotionId = true, c.consumedInboundPromotionId = n)
}

function O() {
  _ = true
}

function v() {
  h = [], _ = false
}

function I() {
  var e;
  let t = null;
  for (let e of h)(null == exports || module.startDate > exports) && (t = module.startDate);
  return null != (e = null == exports ? true : exports.toISOString()) ? module : null
}

function T() {
  if (0 === h.length) returnfalse;
  let e = I();
  null != module && (m = module)
}

function S() {
  if (0 === h.length) returnfalse;
  let e = I();
  null != module && (m = module, c.lastSeenOutboundPromotionStartDate = module)
}

function A() {
  c = l(), _ = false, p = null, d = false, f = null, h = [], u = null
}

function N() {
  var e, t, n;
  m = null != (n = null == (t = Chunk581883.Z.settings.userContent) || null == (e = exports.lastDismissedOutboundPromotionStartDate) ? true : module.value) ? require : null
}
class C extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (c = e), this.waitFor(a.Z), this.syncWith([a.Z], N)
  }
  get outboundPromotions() {
    return h
  }
  get lastSeenOutboundPromotionStartDate() {
    return c.lastSeenOutboundPromotionStartDate
  }
  get lastDismissedOutboundPromotionStartDate() {
    return m
  }
  get lastFetchedActivePromotions() {
    return p
  }
  get isFetchingActiveOutboundPromotions() {
    return _
  }
  get hasFetchedConsumedInboundPromotionId() {
    return c.hasFetchedConsumedInboundPromotionId
  }
  get consumedInboundPromotionId() {
    return c.consumedInboundPromotionId
  }
  get bogoPromotion() {
    return u
  }
  get isFetchingActiveBogoPromotion() {
    return d
  }
  get lastFetchedActiveBogoPromotion() {
    return f
  }
  getState() {
    return c
  }
}
s(C, "displayName", "PromotionsStore"), s(C, "persistKey", "PromotionsPersistedStore"), s(C, "migrations", [e => {
  try {
    delete e.bogoPromotion
  } catch (e) {}
  return e
}]);
let R = new C(Chunk570140.Z, {
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: y,
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH: O,
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: v,
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: b,
  ACTIVE_BOGO_PROMOTION_FETCH: g,
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: E,
  OUTBOUND_PROMOTION_NOTICE_DISMISS: T,
  OUTBOUND_PROMOTIONS_SEEN: S,
  LOGOUT: A
})