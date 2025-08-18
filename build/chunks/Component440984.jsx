/** Chunk was on 81709 **/
/** chunk id: 440984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk230916 = require("./230916.js"),
  Chunk798769 = require("./798769.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk957759 = require("./957759.js"),
  Chunk982404 = require("./982404.js"),
  Chunk299156 = require("./299156.js");

function g(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: g,
    confettiCanvas: C,
    userWasChurned: j = false,
    userDiscountOffer: E
  } = e, I = (0, l.ZP)(), v = (0, s.wj)(I) ? b : h, N = r.useRef(null), [P, O] = r.useState(false), T = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, E), R = (0, d.aS)(f.Xh.PREMIUM_MONTH_TIER_2, false, false, {
    currency: t.currency,
    paymentSourceId: t.paymentSourceId
  }), S = (0, m.T4)(R.amount, R.currency), w = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
  if (r.useEffect(() => {
      null != N.current && null != T && O(true)
    }, [N, P, T]), null == E || null == T) return null;
  let D = x.intl.format(x.t.gPzMHR, {
      numMonths: E.discount.user_usage_limit,
      discountedPrice: T,
      regularPrice: S
    }),
    k = (0, i.jsx)("div", {
      className: y.whatYouLoseButtonContainer,
      children: (0, i.jsx)(o.zxk, {
        variant: "primary",
        text: x.intl.string(x.t["/r8g/v"]),
        onClick: g
      })
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.Z, {
      premiumType: n,
      className: y.cancellationHeader,
      onClose: g
    }), (0, i.jsx)("div", {
      ref: N,
      children: (0, i.jsx)(o.hzk, {
        "data-migration-pending": true,
        className: y.body,
        children: null != T ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsxs)("div", {
            className: y.discountAppliedBody,
            children: [(0, i.jsx)("img", {
              alt: "",
              src: v,
              className: y.nitroIcon
            }), (0, i.jsx)(o.X6q, {
              variant: "heading-xl/bold",
              children: j ? x.intl.string(x.t.gOOPaG) : x.intl.string(x.t.PZSyRk)
            })]
          }), (0, i.jsx)("div", {
            className: y.bodyString,
            children: D
          }), k]
        }) : (0, i.jsx)(o.$jN, {})
      })
    }), !w && P && (0, i.jsx)(u.Z, {
      confettiTarget: N.current,
      confettiCanvas: C,
      confettiVelocityMultiplier: .75
    })]
  })
}