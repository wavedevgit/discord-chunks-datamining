/** Chunk was on web.js **/
/** chunk id: 694080, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Vn: () => m,
  _D: () => h,
  qz: () => g,
  u1: () => E
}), require("./65821.js");
var Chunk562465 = require("./562465.js"),
  Chunk554146 = require("./554146.js"),
  Chunk73153 = require("./73153.js"),
  Chunk826673 = require("./826673.js"),
  Chunk594061 = require("./594061.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js");

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
  return (0, c.isAndroid)() ? e = d.kM_.GOOGLE : (0, c.isIOS)() && (e = d.kM_.APPLE), e
};
async function h(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      offerId: true,
      paymentGatewayOverride: true
    },
    c = arguments.length > 3 ? arguments[3] : true,
    f = arguments.length > 4 ? arguments[4] : true;
  if (t) {
    a.h.dispatch({
      type: "BILLING_USER_OFFER_FETCH_START"
    });
    try {
      var h, m, g;
      null != e && l.default.track(d.HAw.FETCH_USER_OFFER_STARTED, {
        call_location: e
      });
      let {
        offerId: t,
        paymentGatewayOverride: E
      } = n, y = true !== E ? E : _(), b = null != y || null != t ? {
        payment_gateway: y,
        offer_id: t
      } : {}, O = await r.Bo.post({
        url: d.Rsh.USER_OFFER,
        body: b,
        rejectWithError: true,
        retries: null != c ? c.retries : true
      }), v = null != (h = O.body.user_trial_offer) ? h : null, A = null != (m = O.body.user_discount) ? m : null, I = null != (g = O.body.user_discount_offer) ? g : null;
      if (null != t && null != I && I.discount_id !== t) {
        let e = Error("Returned user discount offer does not match offer ID request parameter");
        throw u.A.captureException(e, p({
          extra: {
            offer_id: t,
            user_discount_offer: I
          }
        }, f)), e
      }
      return null == v && (0, o.k8)(i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, s.xB)(i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), a.h.dispatch({
        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
        userTrialOffer: v,
        userDiscount: A,
        userDiscountOffer: I
      }), {
        userTrialOffer: v,
        userDiscount: A,
        userDiscountOffer: I
      }
    } catch (e) {
      a.h.dispatch({
        type: "BILLING_USER_OFFER_FETCH_FAIL"
      })
    }
  }
}
async function m() {
  a.h.dispatch({
    type: "BILLING_USER_OFFER_FETCH_START"
  });
  try {
    var e;
    let t = null != (e = (await r.Bo.get({
      url: d.Rsh.CHURN_USER_OFFER,
      rejectWithError: true
    })).body.offer) ? e : null;
    return a.h.dispatch({
      type: "BILLING_USER_OFFER_FETCH_SUCCESS",
      userDiscountOffer: t
    }), {
      userDiscountOffer: t
    }
  } catch (e) {
    a.h.dispatch({
      type: "BILLING_USER_OFFER_FETCH_FAIL"
    })
  }
}
async function g() {
  let e = null;
  try {
    var t;
    e = null != (t = (await r.Bo.post({
      url: d.Rsh.CHURN_USER_OFFER,
      rejectWithError: true
    })).body.offer) ? t : null, null != e && a.h.dispatch({
      type: "BILLING_USER_OFFER_FETCH_SUCCESS",
      userDiscountOffer: e
    })
  } catch (e) {}
  return e
}

function E(e, t) {
  let n = null != e && null == e.expires_at ? e.id : true,
    i = null != t && null == t.expires_at ? t.id : true;
  if (true !== n || true !== i) return r.Bo.post({
    url: d.Rsh.USER_OFFER_ACKNOWLEDGED,
    body: {
      user_trial_offer_id: n,
      user_discount_offer_id: i
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    var t, n, r;
    a.h.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null != (t = e.body.user_trial_offer) ? t : null,
      userDiscount: null != (n = e.body.user_discount) ? n : null,
      userDiscountOffer: null != (r = e.body.user_discount_offer) ? r : null
    })
  }).catch(e => {
    404 === e.status && a.h.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null,
      userDiscount: null,
      userDiscountOffer: null
    })
  })
}