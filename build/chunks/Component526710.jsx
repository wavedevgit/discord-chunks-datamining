/** Chunk was on 91976 **/
/** chunk id: 526710, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk975807 = require("./975807.js"),
  Chunk975571 = require("./975571.js"),
  Chunk783420 = require("./783420.jsx"),
  Chunk938973 = require("./938973.js"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438705 = require("./438705.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let y = e => {
  let {
    subscribeButtonProps: t
  } = (0, l.B)({
    subscriptionTier: p.pe.TIER_2,
    subscriptionPlanId: p.gD.PREMIUM_GROUP_MONTH
  });
  return (0, n.jsx)(a.A, {
    subscriptionTier: p.pe.TIER_2,
    initialPlanId: p.gD.PREMIUM_GROUP_MONTH,
    children: r => {
      let {
        onClick: a
      } = r;
      return (0, n.jsx)(i.ExpressiveModal, d(f({}, e), {
        graphic: {
          src: P,
          type: "image"
        },
        gradientColor: "nitro-pink",
        title: O.intl.formatToPlainString(b.default.tJbHtN, {
          premiumGroupProductName: (0, s.DP)()
        }),
        badge: {
          type: "beta",
          variant: "expressive"
        },
        subtitle: O.intl.formatToPlainString(b.default.csDq8A, {
          premiumGroupProductName: (0, s.DP)(),
          totalSeats: s.aw
        }),
        actions: [{
          text: O.intl.string(b.default.z8re5H),
          variant: "secondary",
          onClick: () => void(0, o.A)(c.A.getArticleURL(u.MVz.PREMIUM_GROUP_ABOUT))
        }, d(f({}, t), {
          onClick: t => {
            var r;
            null == a || a(t), null == (r = e.onClose) || r.call(e)
          }
        })]
      }))
    }
  })
}