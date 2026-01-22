/** Chunk was on web.js **/
/** chunk id: 499454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk203982 = require("./203982.js"),
  Chunk927578 = require("./927578.js"),
  Chunk598653 = require("./598653.js"),
  Chunk788868 = require("./788868.js"),
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

function _(e) {
  let {
    processedCode: t,
    channelContext: f,
    customGiftMessage: _,
    giftInfo: h
  } = e, m = false, g = null, E = a.default.getCurrentUser(), b = (0, l.CC)(null == E ? true : E.premiumType, u.PremiumTypes.TIER_0);
  (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("14439").then(n.bind(n, 67327));
    return n => {
      var i, a;
      return (0, r.jsx)(e, p({
        code: t,
        channelContext: f,
        customGiftMessage: _,
        emojiName: null == h || null == (i = h.emoji) ? true : i.name,
        soundId: null == h || null == (a = h.sound) ? true : a.id,
        onComplete: (e, t) => {
          g = e, t && (m = t, e.isSubscription && null == s.A.getPremiumSubscription(false) && (0, c.o)(true))
        }
      }, n))
    }
  }, {
    onCloseCallback: () => {
      var e;
      m && null != g && !b && g.isSubscription && (null == g || null == (e = g.subscriptionPlan) ? true : e.premiumSubscriptionType) === u.PremiumTypes.TIER_2 && o._.dispatch(d.jej.PREMIUM_SUBSCRIPTION_CREATED)
    }
  })
}