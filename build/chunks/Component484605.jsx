/** Chunk was on 1272 **/
/** chunk id: 484605, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk264418 = require("./264418.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk230916 = require("./230916.js"),
  Chunk45474 = require("./45474.js"),
  Chunk474936 = require("./474936.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942257 = require("./942257.js");
let h = e => {
  let {
    targetElementRef: t,
    discountOffer: h,
    premiumSubscription: m,
    dismissCoachmark: b,
    children: E
  } = e, {
    analyticsLocations: _
  } = (0, o.ZP)(a.Z.CHURN_DISCOUNT_POPOVER), O = (0, c.W7)(d.Xh.PREMIUM_MONTH_TIER_2, h, m), I = (0, r.jsx)(i.Z, {
    targetElementRef: t,
    position: "right",
    align: "top",
    size: "md",
    caretConfig: {
      align: "start"
    },
    title: f.intl.format(f.t["3yZP0G"], {
      percent: h.discount.amount
    }).toString(),
    body: f.intl.format(f.t["3Q4wCy"], {
      discountedPrice: O,
      billingPeriod: (0, s.JP)(h.discount.user_usage_limit_interval),
      numMonths: h.discount.user_usage_limit
    }),
    graphic: {
      type: "image",
      src: g.Z
    },
    gradientColor: "nitro-pink",
    actions: [{
      text: f.intl.string(f.t.zrCzVB),
      variant: "expressive",
      onClick: () => {
        b(p.L.TAKE_ACTION), (0, l.ZDy)(async () => {
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
              premiumSubscription: m,
              analyticsLocations: _,
              initialStep: u.R.CONFIRM_DISCOUNT
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
      icon: l.SrA
    }],
    onRequestClose: () => {
      b(p.L.USER_DISMISS)
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: E
    }), I]
  })
}