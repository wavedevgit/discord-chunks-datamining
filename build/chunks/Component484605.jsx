/** Chunk was on 1272 **/
/** chunk id: 484605, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk264418 = require("./264418.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk230916 = require("./230916.js"),
  Chunk45474 = require("./45474.js"),
  Chunk474936 = require("./474936.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk22767 = require("./22767.js");
let _ = e => {
  let {
    targetElementRef: t,
    discountOffer: _,
    premiumSubscription: O,
    children: E
  } = e, {
    analyticsLocations: y
  } = (0, c.ZP)(s.Z.CHURN_DISCOUNT_POPOVER), [v, I] = (0, u.US)([l.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK], true, true), [C, S] = i.useState(false), N = C && v === l.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK, T = (0, p.W7)(O, h.Xh.PREMIUM_MONTH_TIER_2, _), P = (0, r.jsx)(a.Z, {
    targetElementRef: t,
    position: "right",
    align: "top",
    size: "md",
    caretConfig: {
      position: "left",
      align: "start"
    },
    title: m.intl.format(m.t["3yZP0N"], {
      percent: _.discount.amount
    }).toString(),
    body: m.intl.format(m.t["3Q4wCw"], {
      discountedPrice: T,
      billingPeriod: (0, d.JP)(_.discount.user_usage_limit_interval),
      numMonths: _.discount.user_usage_limit
    }),
    graphic: {
      type: "image",
      src: b
    },
    gradientColor: "nitro-pink",
    actions: [{
      text: m.intl.string(m.t.zrCzVF),
      variant: "expressive",
      onClick: () => {
        (0, o.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("58067"), n.e("81709"), n.e("98361")]).then(n.bind(n, 833569));
          return t => {
            var n, i;
            return (0, r.jsx)(e, (n = function(e) {
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
            }({}, t), i = i = {
              premiumSubscription: O,
              analyticsLocations: y,
              initialStep: f.R.CONFIRM_DISCOUNT
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
            }), n))
          }
        })
      }
    }],
    onRequestClose: () => {
      I(g.L.USER_DISMISS)
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      onMouseEnter: () => S(true),
      children: E
    }), N && P]
  })
}