/** Chunk was on 33638 **/
/** chunk id: 837244, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk782568 = require("./782568.js"),
  Chunk63063 = require("./63063.js"),
  Chunk648613 = require("./648613.jsx"),
  Chunk864218 = require("./864218.js"),
  Chunk474936 = require("./474936.js"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk731490 = require("./731490.js");

function P(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = r[e], e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = n
    })
  }
  return t
}

function d(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(e)).forEach(function(r) {
    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
  }), t
}
let y = t => {
  let {
    subscribeButtonProps: e
  } = (0, s.F)({
    subscriptionTier: l.Si.TIER_2,
    subscriptionPlanId: l.Xh.PREMIUM_GROUP_MONTH
  });
  return (0, n.jsx)(a.Z, {
    subscriptionTier: l.Si.TIER_2,
    initialPlanId: l.Xh.PREMIUM_GROUP_MONTH,
    children: r => {
      let {
        onClick: a
      } = r;
      return (0, n.jsx)(i.ExpressiveModal, d(P({}, t), {
        graphic: {
          src: f,
          type: "image"
        },
        gradientColor: "nitro-pink",
        title: O.intl.formatToPlainString(b.default.tJbHtN, {
          premiumGroupProductName: (0, u.sO)()
        }),
        badge: {
          type: "beta",
          variant: "expressive"
        },
        subtitle: O.intl.formatToPlainString(b.default.csDq8A, {
          premiumGroupProductName: (0, u.sO)(),
          totalSeats: u.Q5
        }),
        actions: [{
          text: O.intl.string(b.default.z8re5H),
          variant: "secondary",
          onClick: () => {
            var e;
            return e = t.onClose, void((0, o.Z)(c.Z.getArticleURL(p.BhN.PREMIUM_GROUP_ABOUT)), e())
          }
        }, d(P({}, e), {
          onClick: a
        })]
      }))
    }
  })
}