/** Chunk was on 81709 **/
/** chunk id: 440984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => C
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

function C(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: C,
    confettiCanvas: g,
    userWasChurned: E = false,
    userDiscountOffer: j
  } = e, N = (0, l.ZP)(), I = (0, s.wj)(N) ? y : h, v = r.useRef(null), [O, P] = r.useState(false), T = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, j), R = (0, d.aS)(f.Xh.PREMIUM_MONTH_TIER_2, false, false, {
    currency: t.currency,
    paymentSourceId: t.paymentSourceId
  }), S = (0, m.T4)(R.amount, R.currency), D = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
  if (r.useEffect(() => {
      null != v.current && null != T && P(true)
    }, [v, O, T]), null == j || null == T) return null;
  let w = x.intl.format(x.t.gPzMHR, {
      numMonths: j.discount.user_usage_limit,
      discountedPrice: T,
      regularPrice: S
    }),
    k = (0, i.jsx)("div", {
      className: b.whatYouLoseButtonContainer,
      children: (0, i.jsx)(o.zxk, {
        variant: "primary",
        text: x.intl.string(x.t["/r8g/v"]),
        onClick: C
      })
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.Z, {
      premiumType: n,
      className: b.cancellationHeader,
      onClose: C
    }), (0, i.jsx)("div", {
      ref: v,
      children: (0, i.jsx)(o.hzk, {
        "data-migration-pending": true,
        className: b.body,
        children: null != T ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsxs)("div", {
            className: b.discountAppliedBody,
            children: [(0, i.jsx)("img", {
              alt: "",
              src: I,
              className: b.nitroIcon
            }), (0, i.jsx)(o.X6q, {
              variant: "heading-xl/bold",
              children: E ? x.intl.string(x.t.gOOPaG) : x.intl.string(x.t.PZSyRk)
            })]
          }), (0, i.jsx)("div", {
            className: b.bodyString,
            children: w
          }), k]
        }) : (0, i.jsx)(o.$jN, {})
      })
    }), !D && O && (0, i.jsx)(u.Z, {
      confettiTarget: v.current,
      confettiCanvas: g,
      confettiVelocityMultiplier: .75
    })]
  })
}