/** Chunk was on web.js **/
/** chunk id: 518638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A2: () => C,
  BU: () => A,
  Pz: () => S,
  Qf: () => w,
  ZC: () => R,
  a0: () => N,
  pD: () => D,
  t8: () => T,
  tq: () => P
}), require("./704826.js"), require("./35282.js"), require("./997841.js"), require("./642613.js");
var Chunk95015 = require("./95015.js"),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk780384 = require("./780384.js"),
  Chunk605236 = require("./605236.js"),
  Chunk706454 = require("./706454.js"),
  Chunk581883 = require("./581883.js"),
  Chunk605338 = require("./605338.js"),
  Chunk78839 = require("./78839.js"),
  Chunk431 = require("./431.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk709054 = require("./709054.js"),
  Chunk1844 = require("./1844.js"),
  Chunk397047 = require("./397047.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js");
let O = "{code}",
  v = 2592e5;

function S(e, t) {
  let n = (0, o.wj)(t) ? "logo-dark" : "logo-light",
    r = window.GLOBAL_ENV.CDN_HOST,
    i = "?size=256";
  return null != r ? "https://".concat(r, "/promotions/").concat(e, "/").concat(n).concat(i) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(i)
}

function I(e) {
  return {
    code: e.code,
    userId: e.user_id,
    claimedAt: e.claimed_at,
    promotion: u.Z.createFromServer(e.promotion)
  }
}
async function T() {
  return (await i.tn.get({
    url: b.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
    query: {
      locale: l.default.locale
    },
    oldFormErrors: true,
    rejectWithError: false
  })).body.map(I)
}
async function C(e) {
  let t, {
      promotionId: n,
      analyticsLocations: r
    } = e,
    a = await i.tn.post({
      url: b.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(n),
      rejectWithError: false
    }),
    o = a.body;
  return t = y.S4.DESKTOP, p.default.track(b.rMx.OUTBOUND_PROMOTION_CLAIMED, {
    platform: t,
    status: a.status,
    location_stack: r
  }), I(o)
}

function A(e, t) {
  var n;
  return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace(O, encodeURIComponent(e)) : null != (n = t.outboundRedemptionPageLink) ? n : ""
}

function N() {
  var e, t;
  let n = h.Z.outboundPromotions,
    i = h.Z.consumedInboundPromotionId,
    o = n.filter(e => {
      let {
        id: t,
        flags: n
      } = e;
      return t !== i && !(0, r.yE)(n, E.TD.SUPPRESS_NOTIFICATION)
    }),
    s = null == (t = c.Z.settings.userContent) || null == (e = t.recurringDismissibleContentStates[a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]) ? true : e.lastDismissedObjectId,
    l = null == s ? o : o.filter(e => {
      let {
        id: t
      } = e;
      return 1 === m.default.compare(t, s)
    }),
    u = d.Z.getPremiumTypeSubscription(),
    p = !!(null == u ? true : u.hasActiveTrial),
    _ = f.Z.hasAnyUnexpiredOffer(),
    g = p || _ ? l.filter(e => e.isRedeemableByTrialUsers()) : l;
  return 0 === g.length ? null : g.sort((e, t) => new Date(e.startDate) < new Date(t.startDate) ? false : 1)[0].id
}

function P() {
  let e = N();
  return null != e && !(0, s.UJ)(a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, {
    cooldownDurationMs: v
  })
}

function R(e) {
  return !(0, _.isIOS)() || !e.hasFlag(E.TD.IS_BLOCKED_IOS)
}

function w(e, t) {
  return null != t[e.id] || e.isRedeemableByTrialUsers()
}

function D(e) {
  let {
    promotionPartner: t,
    promotionType: n
  } = e;
  return n === g.$k.THIRD_PARTY_OUTBOUND_RECURRING || g.Ce.has(t.toLocaleLowerCase())
}