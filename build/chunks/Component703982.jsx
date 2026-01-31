/** Chunk was on 78376 **/
/** chunk id: 703982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk473702 = require("./473702.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk677300 = require("./677300.js"),
  Chunk67423 = require("./67423.js");
let g = function(e) {
  let {
    isVisible: t,
    premiumSubscription: i,
    churnDiscountOffer: g,
    discountedPrice: A
  } = e, {
    analyticsLocations: f
  } = (0, c.Ay)(o.A.CHURN_DISCOUNT_PERSISTENT_CTA), b = (0, a.zhh)({
    transform: t ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 12
    }
  });
  return (0, r.jsx)(s.animated.div, {
    className: l()(p.iE, {
      [p.q4]: !t
    }),
    style: b,
    children: (0, r.jsxs)("div", {
      className: p.iJ,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: m,
        className: p.oU
      }), (0, r.jsxs)("div", {
        className: p.iQ,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          children: _.intl.format(_.t["3yZP0G"], {
            percent: g.discount.amount
          })
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: _.intl.format(_.t["3Q4wCy"], {
            numMonths: g.discount.user_usage_limit,
            discountedPrice: A,
            billingPeriod: (0, d.Ke)(g.discount.user_usage_limit_interval)
          })
        })]
      }), (0, r.jsx)(a.Button, {
        variant: "expressive",
        icon: a.tvc,
        size: "md",
        text: _.intl.string(_.t.zrCzVB),
        onClick: () => void(0, a.mMO)(async () => {
          let {
            PremiumBrandRefreshSubscriptionCancellationModal: e
          } = await n.e("72820").then(n.bind(n, 281439));
          return t => {
            var n, l;
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
            }({}, t), l = l = {
              premiumSubscription: i,
              analyticsLocations: f,
              initialStep: u.g.CONFIRM_DISCOUNT
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(l)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
            }), n))
          }
        })
      })]
    })
  })
}