/** Chunk was on web.js **/
/** chunk id: 703982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk473702 = require("./473702.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk677300 = require("./677300.js"),
  Chunk67423 = require("./67423.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = function(e) {
  let {
    isVisible: t,
    premiumSubscription: i,
    churnDiscountOffer: h,
    discountedPrice: g
  } = e, {
    analyticsLocations: y
  } = (0, c.Ay)(l.A.CHURN_DISCOUNT_PERSISTENT_CTA), b = (0, o.zhh)({
    transform: t ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 12
    }
  }), O = () => {
    (0, o.mMO)(async () => {
      let {
        PremiumBrandRefreshSubscriptionCancellationModal: e
      } = await n.e("72820").then(n.bind(n, 281439));
      return t => (0, r.jsx)(e, E(m({}, t), {
        premiumSubscription: i,
        analyticsLocations: y,
        initialStep: d.g.CONFIRM_DISCOUNT
      }))
    })
  };
  return (0, r.jsx)(s.animated.div, {
    className: a()(p.iE, {
      [p.q4]: !t
    }),
    style: b,
    children: (0, r.jsxs)("div", {
      className: p.iJ,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: _,
        className: p.oU
      }), (0, r.jsxs)("div", {
        className: p.iQ,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          children: f.intl.format(f.t["3yZP0G"], {
            percent: h.discount.amount
          })
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: f.intl.format(f.t["3Q4wCy"], {
            numMonths: h.discount.user_usage_limit,
            discountedPrice: g,
            billingPeriod: (0, u.Ke)(h.discount.user_usage_limit_interval)
          })
        })]
      }), (0, r.jsx)(o.Button, {
        variant: "expressive",
        icon: o.tvc,
        size: "md",
        text: f.intl.string(f.t.zrCzVB),
        onClick: () => O()
      })]
    })
  })
}