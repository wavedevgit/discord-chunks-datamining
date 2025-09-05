/** Chunk was on 1272 **/
/** chunk id: 484605, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk264418 = require("./264418.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk230916 = require("./230916.js"),
  Chunk45474 = require("./45474.js"),
  Chunk474936 = require("./474936.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk22767 = require("./22767.js");
let m = e => {
  let {
    targetElementRef: t,
    discountOffer: m,
    premiumSubscription: b,
    dismissCoachmark: _,
    children: O
  } = e, {
    analyticsLocations: E
  } = (0, s.ZP)(o.Z.CHURN_DISCOUNT_POPOVER), [y, v] = i.useState(false), I = (0, u.W7)(p.Xh.PREMIUM_MONTH_TIER_2, m, b), C = (0, r.jsx)(l.Z, {
    targetElementRef: t,
    position: "right",
    align: "top",
    size: "md",
    caretConfig: {
      position: "left",
      align: "start"
    },
    title: h.intl.format(h.t["3yZP0N"], {
      percent: m.discount.amount
    }).toString(),
    body: h.intl.format(h.t["3Q4wCw"], {
      discountedPrice: I,
      billingPeriod: (0, c.JP)(m.discount.user_usage_limit_interval),
      numMonths: m.discount.user_usage_limit
    }),
    graphic: {
      type: "image",
      src: g
    },
    actions: [{
      text: h.intl.string(h.t.zrCzVF),
      variant: "expressive",
      onClick: () => {
        (0, a.ZDy)(async () => {
          let {
            PremiumBrandRefreshSubscriptionCancellationModal: e
          } = await n.e("26526").then(n.bind(n, 48813));
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
              premiumSubscription: b,
              analyticsLocations: E,
              initialStep: d.R.CONFIRM_DISCOUNT
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
      },
      icon: a.SrA
    }],
    onRequestClose: () => {
      _(f.L.USER_DISMISS)
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      onMouseEnter: () => v(true),
      children: O
    }), y && C]
  })
}