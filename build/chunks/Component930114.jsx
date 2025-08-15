/** Chunk was on 66866 **/
/** chunk id: 930114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk585483 = require("./585483.js"),
  Chunk74538 = require("./74538.js"),
  Chunk138464 = require("./138464.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let {
    processedCode: t,
    channelContext: p,
    customGiftMessage: m,
    giftInfo: f
  } = e, _ = false, g = null, h = l.default.getCurrentUser(), b = (0, s.yd)(null == h ? true : h.premiumType, u.p9.TIER_0);
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("92446"), n.e("50981")]).then(n.bind(n, 409858));
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
          g = e, t && (_ = t, e.isSubscription && null == a.Z.getPremiumSubscription(false) && (0, c.H)(true))
        }
      }, n))
    }
  }, {
    onCloseCallback: () => {
      var e;
      _ && null != g && !b && g.isSubscription && (null == g || null == (e = g.subscriptionPlan) ? true : e.premiumSubscriptionType) === u.p9.TIER_2 && o.S.dispatch(d.CkL.PREMIUM_SUBSCRIPTION_CREATED)
    }
  })
}