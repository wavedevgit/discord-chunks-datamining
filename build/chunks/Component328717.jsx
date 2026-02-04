/** Chunk was on 21738 **/
/** chunk id: 328717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk43105 = require("./43105.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk511484 = require("./511484.js"),
  Chunk473702 = require("./473702.js"),
  Chunk788868 = require("./788868.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk398932 = require("./398932.js");
let g = e => {
  let {
    targetElementRef: t,
    discountOffer: g,
    premiumSubscription: m,
    dismissCoachmark: A,
    children: _
  } = e, {
    analyticsLocations: b
  } = (0, s.Ay)(a.A.CHURN_DISCOUNT_POPOVER), E = (0, c.iU)(d.gD.PREMIUM_MONTH_TIER_2, g, m), O = (0, r.jsx)(i.h, {
    targetElementRef: t,
    position: "right",
    align: "top",
    size: "md",
    caretConfig: {
      align: "start"
    },
    title: h.intl.format(h.t["3yZP0G"], {
      percent: g.discount.amount
    }).toString(),
    body: h.intl.format(h.t["3Q4wCy"], {
      discountedPrice: E,
      billingPeriod: (0, o.Ke)(g.discount.user_usage_limit_interval),
      numMonths: g.discount.user_usage_limit
    }),
    graphic: {
      type: "image",
      src: f.A
    },
    gradientColor: "nitro-pink",
    actions: [{
      text: h.intl.string(h.t.zrCzVB),
      variant: "expressive",
      onClick: () => {
        A(p.i.TAKE_ACTION), (0, l.mMO)(async () => {
          let {
            PremiumBrandRefreshSubscriptionCancellationModal: e
          } = await n.e("72820").then(n.bind(n, 281439));
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
              analyticsLocations: b,
              initialStep: u.g.CONFIRM_DISCOUNT
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
      icon: l.tvc
    }],
    onRequestClose: () => {
      A(p.i.USER_DISMISS)
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: _
    }), O]
  })
}