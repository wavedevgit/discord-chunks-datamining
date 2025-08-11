/** Chunk was on web.js **/
/** chunk id: 937579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tf: () => f,
  ab: () => _
});
var Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk570140 = require("./570140.js"),
  Chunk266454 = require("./266454.js"),
  Chunk675478 = require("./675478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");
let d = () => {
  let e = null;
  return (0, Chunk358085.isAndroid)() ? e = Chunk981631.gg$.GOOGLE : (0, Chunk358085.isIOS)() && (e = Chunk981631.gg$.APPLE), module
};
async function f(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  if (t) {
    o.Z.dispatch({
      type: "BILLING_USER_OFFER_FETCH_START"
    });
    try {
      var n, c, f;
      null != e && l.default.track(u.rMx.FETCH_USER_OFFER_STARTED, {
        call_location: e
      });
      let t = d(),
        _ = await r.tn.post({
          url: u.ANM.USER_OFFER,
          body: null != t ? {
            payment_gateway: t
          } : {},
          rejectWithError: true
        }),
        p = null != (n = _.body.user_trial_offer) ? n : null,
        h = null != (c = _.body.user_discount) ? c : null,
        m = null != (f = _.body.user_discount_offer) ? f : null;
      return null == p && (0, a.zu)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, s.w9)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), o.Z.dispatch({
        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
        userTrialOffer: p,
        userDiscount: h,
        userDiscountOffer: m
      }), {
        userTrialOffer: p,
        userDiscount: h,
        userDiscountOffer: m
      }
    } catch (e) {
      o.Z.dispatch({
        type: "BILLING_USER_OFFER_FETCH_FAIL"
      })
    }
  }
}

function _(e, t) {
  let n = null != e && null == e.expires_at ? e.id : true,
    i = null != t && null == t.expires_at ? t.id : true;
  if (true !== n || true !== i) return r.tn.post({
    url: u.ANM.USER_OFFER_ACKNOWLEDGED,
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