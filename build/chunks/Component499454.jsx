/** Chunk was on 92917 **/
/** chunk id: 499454, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => p
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

function p(e) {
  let {
    processedCode: t,
    channelContext: p,
    customGiftMessage: m,
    giftInfo: f
  } = e, g = false, h = null, _ = l.default.getCurrentUser(), b = (0, o.CC)(null == _ ? true : _.premiumType, u.PremiumTypes.TIER_0);
  (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("14439").then(n.bind(n, 67327));
    return n => {
      var i, l;
      return (0, r.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        code: t,
        channelContext: p,
        customGiftMessage: m,
        emojiName: null == f || null == (i = f.emoji) ? true : i.name,
        soundId: null == f || null == (l = f.sound) ? true : l.id,
        onComplete: (e, t) => {
          h = e, t && (g = t, e.isSubscription && null == a.A.getPremiumSubscription(false) && (0, c.o)(true))
        }
      }, n))
    }
  }, {
    onCloseCallback: () => {
      var e;
      g && null != h && !b && h.isSubscription && (null == h || null == (e = h.subscriptionPlan) ? true : e.premiumSubscriptionType) === u.PremiumTypes.TIER_2 && s._.dispatch(d.jej.PREMIUM_SUBSCRIPTION_CREATED)
    }
  })
}