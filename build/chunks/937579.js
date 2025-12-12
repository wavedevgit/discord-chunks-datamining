/** Chunk was on web.js **/
/** chunk id: 937579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qe: () => h,
  Tf: () => m,
  ab: () => E,
  ev: () => g
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk570140 = require("./570140.js"),
  Chunk266454 = require("./266454.js"),
  Chunk675478 = require("./675478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let _ = () => {
  let e = null;
  return (0, Chunk358085.isAndroid)() ? e = Chunk981631.gg$.GOOGLE : (0, Chunk358085.isIOS)() && (e = Chunk981631.gg$.APPLE), module
};
async function m(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      offerId: true,
      paymentGatewayOverride: true
    },
    c = arguments.length > 3 ? arguments[3] : true,
    f = arguments.length > 4 ? arguments[4] : true;
  if (t) {
    o.Z.dispatch({
      type: "BILLING_USER_OFFER_FETCH_START"
    });
    try {
      var m, h, g;
      null != e && l.default.track(d.rMx.FETCH_USER_OFFER_STARTED, {
        call_location: e
      });
      let {
        offerId: t,
        paymentGatewayOverride: E
      } = n, b = true !== E ? E : _(), y = null != b || null != t ? {
        payment_gateway: b,
        offer_id: t
      } : {}, O = await r.tn.post({
        url: d.ANM.USER_OFFER,
        body: y,
        rejectWithError: true,
        retries: null != c ? c.retries : true
      }), v = null != (m = O.body.user_trial_offer) ? m : null, S = null != (h = O.body.user_discount) ? h : null, I = null != (g = O.body.user_discount_offer) ? g : null;
      if (null != t && null != I && I.discount_id !== t) {
        let e = Error("Returned user discount offer does not match offer ID request parameter");
        throw u.Z.captureException(e, p({
          extra: {
            offer_id: t,
            user_discount_offer: I
          }
        }, f)), e
      }
      return null == v && (0, a.zu)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, s.w9)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), o.Z.dispatch({
        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
        userTrialOffer: v,
        userDiscount: S,
        userDiscountOffer: I
      }), {
        userTrialOffer: v,
        userDiscount: S,
        userDiscountOffer: I
      }
    } catch (e) {
      o.Z.dispatch({
        type: "BILLING_USER_OFFER_FETCH_FAIL"
      })
    }
  }
}
async function h() {
  Chunk570140.Z.dispatch({
    type: "BILLING_USER_OFFER_FETCH_START"
  });
  try {
    var e;
    let t = null != (e = (await Chunk544891.tn.get({
      url: Chunk981631.ANM.CHURN_USER_OFFER,
      rejectWithError: true
    })).body.offer) ? module : null;
    return Chunk570140.Z.dispatch({
      type: "BILLING_USER_OFFER_FETCH_SUCCESS",
      userDiscountOffer: exports
    }), {
      userDiscountOffer: exports
    }
  } catch (e) {
    Chunk570140.Z.dispatch({
      type: "BILLING_USER_OFFER_FETCH_FAIL"
    })
  }
}
async function g() {
  let e = null;
  try {
    var t;
    e = null != (t = (await Chunk544891.tn.post({
      url: Chunk981631.ANM.CHURN_USER_OFFER,
      rejectWithError: true
    })).body.offer) ? exports : null, null != module && Chunk570140.Z.dispatch({
      type: "BILLING_USER_OFFER_FETCH_SUCCESS",
      userDiscountOffer: module
    })
  } catch (e) {}
  return module
}

function E(e, t) {
  let n = null != e && null == e.expires_at ? e.id : true,
    i = null != t && null == t.expires_at ? t.id : true;
  if (true !== n || true !== i) return r.tn.post({
    url: d.ANM.USER_OFFER_ACKNOWLEDGED,
    body: {
      user_trial_offer_id: n,
      user_discount_offer_id: i
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    var t, n, r;
    o.Z.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null != (t = e.body.user_trial_offer) ? t : null,
      userDiscount: null != (n = e.body.user_discount) ? n : null,
      userDiscountOffer: null != (r = e.body.user_discount_offer) ? r : null
    })
  }).catch(e => {
    404 === e.status && o.Z.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null,
      userDiscount: null,
      userDiscountOffer: null
    })
  })
}