/** Chunk was on web.js **/
/** chunk id: 930114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk585483 = require("./585483.js"),
  Chunk74538 = require("./74538.js"),
  Chunk138464 = require("./138464.js"),
  Chunk474936 = require("./474936.js"),
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

function _(e) {
  let {
    processedCode: t,
    channelContext: f,
    customGiftMessage: _,
    giftInfo: h
  } = e, m = false, g = null, E = a.default.getCurrentUser(), b = (0, l.yd)(null == E ? true : E.premiumType, u.PremiumTypes.TIER_0);
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("38029").then(n.bind(n, 409858));
    return n => {
      var i, a;
      return (0, r.jsx)(e, p({
        code: t,
        channelContext: f,
        customGiftMessage: _,
        emojiName: null == h || null == (i = h.emoji) ? true : i.name,
        soundId: null == h || null == (a = h.sound) ? true : a.id,
        onComplete: (e, t) => {
          g = e, t && (m = t, e.isSubscription && null == o.Z.getPremiumSubscription(false) && (0, c.H)(true))
        }
      }, n))
    }
  }, {
    onCloseCallback: () => {
      var e;
      m && null != g && !b && g.isSubscription && (null == g || null == (e = g.subscriptionPlan) ? true : e.premiumSubscriptionType) === u.PremiumTypes.TIER_2 && s.S.dispatch(d.CkL.PREMIUM_SUBSCRIPTION_CREATED)
    }
  })
}