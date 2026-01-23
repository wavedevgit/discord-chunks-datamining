/** Chunk was on web.js **/
/** chunk id: 264779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cp: () => N,
  HB: () => D,
  OP: () => R,
  S0: () => P,
  So: () => w,
  WD: () => A,
  b3: () => S,
  kc: () => C,
  kd: () => T
}), require("./747238.js"), require("./812715.js"), require("./938796.js"), require("./638769.js");
var Chunk665260 = require("./665260.js"),
  Chunk562465 = require("./562465.js"),
  Chunk554146 = require("./554146.js"),
  Chunk582754 = require("./582754.js"),
  Chunk367727 = require("./367727.js"),
  Chunk773669 = require("./773669.js"),
  Chunk617617 = require("./617617.js"),
  Chunk835095 = require("./835095.js"),
  Chunk166403 = require("./166403.js"),
  Chunk816733 = require("./816733.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk661191 = require("./661191.js"),
  Chunk412260 = require("./412260.js"),
  Chunk852218 = require("./852218.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js");
let O = "{code}",
  v = 2592e5;

function A(e, t) {
  let n = (0, s.Mw)(t) ? "logo-dark" : "logo-light",
    r = window.GLOBAL_ENV.CDN_HOST,
    i = "?size=256";
  return null != r ? "https://".concat(r, "/promotions/").concat(e, "/").concat(n).concat(i) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(i)
}

function I(e) {
  return {
    code: e.code,
    userId: e.user_id,
    claimedAt: e.claimed_at,
    promotion: u.A.createFromServer(e.promotion)
  }
}
async function S() {
  return (await i.Bo.get({
    url: y.Rsh.CLAIMED_OUTBOUND_PROMOTION_CODES,
    query: {
      locale: l.default.locale
    },
    oldFormErrors: true,
    rejectWithError: false
  })).body.map(I)
}
async function T(e) {
  let t, {
      promotionId: n,
      analyticsLocations: r
    } = e,
    a = await i.Bo.post({
      url: y.Rsh.CLAIM_OUTBOUND_PROMOTION_CODE(n),
      rejectWithError: false
    }),
    s = a.body;
  return t = b.vu.DESKTOP, p.default.track(y.HAw.OUTBOUND_PROMOTION_CLAIMED, {
    platform: t,
    status: a.status,
    location_stack: r
  }), I(s)
}

function C(e, t) {
  var n;
  return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace(O, encodeURIComponent(e)) : null != (n = t.outboundRedemptionPageLink) ? n : ""
}

function N() {
  var e, t;
  let n = m.A.outboundPromotions,
    i = m.A.consumedInboundPromotionId,
    s = n.filter(e => {
      let {
        id: t,
        flags: n
      } = e;
      return t !== i && !(0, r.Lt)(n, E.$3.SUPPRESS_NOTIFICATION)
    }),
    o = null == (t = c.A.settings.userContent) || null == (e = t.recurringDismissibleContentStates[a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]) ? true : e.lastDismissedObjectId,
    l = null == o ? s : s.filter(e => {
      let {
        id: t
      } = e;
      return 1 === h.default.compare(t, o)
    }),
    u = d.A.getPremiumTypeSubscription(),
    p = !!(null == u ? true : u.hasActiveTrial),
    _ = f.A.hasAnyUnexpiredOffer(),
    g = p || _ ? l.filter(e => e.isRedeemableByTrialUsers()) : l;
  return 0 === g.length ? null : g.sort((e, t) => new Date(e.startDate) < new Date(t.startDate) ? false : 1)[0].id
}

function w() {
  let e = N();
  return null != e && !(0, o.j6)(a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, {
    cooldownDurationMs: v
  })
}

function R(e) {
  return !(0, _.isIOS)() || !e.hasFlag(E.$3.IS_BLOCKED_IOS)
}

function P(e, t) {
  return null != t[e.id] || e.isRedeemableByTrialUsers()
}

function D(e) {
  let {
    promotionPartner: t,
    promotionType: n
  } = e;
  return n === g.pt.THIRD_PARTY_OUTBOUND_RECURRING || g.SW.has(t.toLocaleLowerCase())
}