/** Chunk was on 81709 **/
/** chunk id: 440984, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  D: () => E
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

function E(t) {
  let {
    premiumSubscription: e,
    premiumType: n,
    onClose: E,
    confettiCanvas: g,
    userWasChurned: C = false,
    userDiscountOffer: b
  } = t, N = (0, o.ZP)(), O = (0, s.wj)(N) ? h : j, P = a.useRef(null), [I, T] = a.useState(false), R = (0, p._n)(e, f.Xh.PREMIUM_MONTH_TIER_2, b), v = (0, d.aS)(f.Xh.PREMIUM_MONTH_TIER_2, false, false, {
    currency: e.currency,
    paymentSourceId: e.paymentSourceId
  }), S = (0, m.T4)(v.amount, v.currency), w = (0, r.e7)([c.Z], () => c.Z.useReducedMotion);
  if (a.useEffect(() => {
      null != P.current && null != R && T(true)
    }, [P, I, R]), null == b || null == R) return null;
  let D = _.intl.format(_.t.gPzMHR, {
      numMonths: b.discount.user_usage_limit,
      discountedPrice: R,
      regularPrice: S
    }),
    k = (0, i.jsx)("div", {
      className: y.whatYouLoseButtonContainer,
      children: (0, i.jsx)(l.zxk, {
        variant: "primary",
        text: _.intl.string(_.t["/r8g/v"]),
        onClick: E
      })
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(x.Z, {
      premiumType: n,
      className: y.cancellationHeader,
      onClose: E
    }), (0, i.jsx)("div", {
      ref: P,
      children: (0, i.jsx)(l.hzk, {
        "data-migration-pending": true,
        className: y.body,
        children: null != R ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsxs)("div", {
            className: y.discountAppliedBody,
            children: [(0, i.jsx)("img", {
              alt: "",
              src: O,
              className: y.nitroIcon
            }), (0, i.jsx)(l.X6q, {
              variant: "heading-xl/bold",
              children: C ? _.intl.string(_.t.gOOPaG) : _.intl.string(_.t.PZSyRk)
            })]
          }), (0, i.jsx)("div", {
            className: y.bodyString,
            children: D
          }), k]
        }) : (0, i.jsx)(l.$jN, {})
      })
    }), !w && I && (0, i.jsx)(u.Z, {
      confettiTarget: P.current,
      confettiCanvas: g,
      confettiVelocityMultiplier: .75
    })]
  })
}