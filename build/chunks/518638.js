/** Chunk was on web.js **/
/** chunk id: 518638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A2: () => T,
  BU: () => S,
  Pz: () => O,
  Qf: () => R,
  ZC: () => N,
  a0: () => A,
  pD: () => P,
  t8: () => I,
  tq: () => C
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
  Chunk358085 = require("./358085.js"),
  Chunk709054 = require("./709054.js"),
  Chunk1844 = require("./1844.js"),
  Chunk397047 = require("./397047.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");
let b = "{code}",
  y = 2592e5;

function O(e, t) {
  let n = (0, o.wj)(t) ? "logo-dark" : "logo-light",
    r = window.GLOBAL_ENV.CDN_HOST,
    i = "?size=256";
  return null != r ? "https://".concat(r, "/promotions/").concat(e, "/").concat(n).concat(i) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(i)
}

function v(e) {
  return {
    code: e.code,
    userId: e.user_id,
    claimedAt: e.claimed_at,
    promotion: u.Z.createFromServer(e.promotion)
  }
}
async function I() {
  return (await Chunk544891.tn.get({
    url: Chunk981631.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
    query: {
      locale: Chunk706454.default.locale
    },
    oldFormErrors: true,
    rejectWithError: false
  })).body.map(v)
}
async function T(e) {
  return v((await i.tn.post({
    url: E.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e),
    rejectWithError: false
  })).body)
}

function S(e, t) {
  var n;
  return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace(b, encodeURIComponent(e)) : null != (n = t.outboundRedemptionPageLink) ? n : ""
}

function A() {
  var e, t;
  let n = Chunk1844.Z.outboundPromotions,
    i = Chunk1844.Z.consumedInboundPromotionId,
    o = require.filter(e => {
      let {
        id: t,
        flags: n
      } = e;
      return t !== i && !(0, r.yE)(n, g.TD.SUPPRESS_NOTIFICATION)
    }),
    s = null == (t = Chunk581883.Z.settings.userContent) || null == (e = exports.recurringDismissibleContentStates[Chunk704215.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]) ? true : module.lastDismissedObjectId,
    l = null == Chunk605236 ? Chunk780384 : Chunk780384.filter(e => {
      let {
        id: t
      } = e;
      return 1 === p.default.compare(t, s)
    }),
    u = Chunk78839.Z.getPremiumTypeSubscription(),
    _ = !!(null == Chunk605338 ? true : Chunk605338.hasActiveTrial),
    m = Chunk431.Z.hasAnyUnexpiredOffer(),
    E = Chunk358085 || Chunk397047 ? Chunk706454.filter(e => e.isRedeemableByTrialUsers()) : Chunk706454;
  return 0 === Chunk981631.length ? null : Chunk981631.sort((e, t) => new Date(e.startDate) < new Date(t.startDate) ? false : 1)[0].id
}

function C() {
  let e = A();
  return null != module && !(0, Chunk605236.UJ)(Chunk704215.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, module, {
    cooldownDurationMs: y
  })
}

function N(e) {
  return !(0, _.isIOS)() || !e.hasFlag(g.TD.IS_BLOCKED_IOS)
}

function R(e, t) {
  return null != t[e.id] || e.isRedeemableByTrialUsers()
}

function P(e) {
  let {
    promotionPartner: t
  } = e;
  return m.Ce.has(t.toLocaleLowerCase())
}