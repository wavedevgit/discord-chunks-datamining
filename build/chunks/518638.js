/** Chunk was on web.js **/
/** chunk id: 518638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A2: () => I,
  BU: () => S,
  Pz: () => y,
  Qf: () => N,
  ZC: () => C,
  a0: () => T,
  t8: () => v,
  tq: () => A
}), require("./704826.js"), require("./35282.js"), require("./997841.js"), require("./642613.js");
var Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk780384 = require("./780384.js"),
  Chunk605236 = require("./605236.js"),
  Chunk706454 = require("./706454.js"),
  Chunk581883 = require("./581883.js"),
  Chunk605338 = require("./605338.js"),
  Chunk78839 = require("./78839.js"),
  Chunk431 = require("./431.js"),
  Chunk630388 = require("./630388.js"),
  Chunk358085 = require("./358085.js"),
  Chunk709054 = require("./709054.js"),
  Chunk1844 = require("./1844.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");
let E = "{code}",
  b = 2592e5;

function y(e, t) {
  let n = (0, a.wj)(t) ? "logo-dark" : "logo-light",
    r = window.GLOBAL_ENV.CDN_HOST,
    i = "?size=256";
  return null != r ? "https://".concat(r, "/promotions/").concat(e, "/").concat(n).concat(i) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(i)
}

function O(e) {
  return {
    code: e.code,
    userId: e.user_id,
    claimedAt: e.claimed_at,
    promotion: c.Z.createFromServer(e.promotion)
  }
}
async function v() {
  return (await Chunk544891.tn.get({
    url: Chunk981631.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
    query: {
      locale: Chunk706454.default.locale
    },
    oldFormErrors: true,
    rejectWithError: false
  })).body.map(O)
}
async function I(e) {
  return O((await r.tn.post({
    url: g.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e),
    rejectWithError: false
  })).body)
}

function S(e, t) {
  var n;
  return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace(E, encodeURIComponent(e)) : null != (n = t.outboundRedemptionPageLink) ? n : ""
}

function T() {
  var e, t;
  let n = Chunk1844.Z.outboundPromotions,
    r = Chunk1844.Z.consumedInboundPromotionId,
    a = require.filter(e => {
      let {
        id: t,
        flags: n
      } = e;
      return t !== r && !(0, f.yE)(n, m.TD.SUPPRESS_NOTIFICATION)
    }),
    o = null == (t = Chunk581883.Z.settings.userContent) || null == (e = exports.recurringDismissibleContentStates[Chunk704215.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]) ? true : module.lastDismissedObjectId,
    s = null == Chunk605236 ? Chunk780384 : Chunk780384.filter(e => {
      let {
        id: t
      } = e;
      return 1 === p.default.compare(t, o)
    }),
    c = Chunk78839.Z.getPremiumTypeSubscription(),
    _ = !!(null == Chunk605338 ? true : Chunk605338.hasActiveTrial),
    g = Chunk431.Z.hasAnyUnexpiredOffer(),
    E = Chunk358085 || Chunk981631 ? Chunk706454.filter(e => e.isRedeemableByTrialUsers()) : Chunk706454;
  return 0 === E.length ? null : E.sort((e, t) => new Date(e.startDate) < new Date(t.startDate) ? false : 1)[0].id
}

function A() {
  let e = T();
  return null != module && !(0, Chunk605236.UJ)(Chunk704215.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, module, {
    cooldownDurationMs: b
  })
}

function C(e) {
  return !(0, _.isIOS)() || !e.hasFlag(m.TD.IS_BLOCKED_IOS)
}

function N(e, t) {
  return null != t[e.id] || e.isRedeemableByTrialUsers()
}