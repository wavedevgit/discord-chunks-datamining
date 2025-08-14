/** Chunk was on 81709 **/
/** chunk id: 440984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  } = e, O = (0, l.ZP)(), P = (0, o.wj)(O) ? y : h, N = r.useRef(null), [v, I] = r.useState(false), T = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, E), S = (0, d.aS)(f.Xh.PREMIUM_MONTH_TIER_2, false, false, {
    currency: t.currency,
    paymentSourceId: t.paymentSourceId
  }), R = (0, m.T4)(S.amount, S.currency), w = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
  if (r.useEffect(() => {
      null != N.current && null != T && I(true)
    }, [N, v, T]), null == E || null == T) return null;
  let D = b.intl.format(b.t.gPzMHR, {
      numMonths: E.discount.user_usage_limit,
      discountedPrice: T,
      regularPrice: R
    }),
    k = (0, i.jsx)("div", {
      className: x.whatYouLoseButtonContainer,
      children: (0, i.jsx)(s.zxk, {
        variant: "primary",
        text: b.intl.string(b.t["/r8g/v"]),
        onClick: g
      })
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.Z, {
      premiumType: n,
      className: x.cancellationHeader,
      onClose: g
    }), (0, i.jsx)("div", {
      ref: N,
      children: (0, i.jsx)(s.hzk, {
        "data-migration-pending": true,
        className: x.body,
        children: null != T ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsxs)("div", {
            className: x.discountAppliedBody,
            children: [(0, i.jsx)("img", {
              alt: "",
              src: P,
              className: x.nitroIcon
            }), (0, i.jsx)(s.X6q, {
              variant: "heading-xl/bold",
              children: j ? b.intl.string(b.t.gOOPaG) : b.intl.string(b.t.PZSyRk)
            })]
          }), (0, i.jsx)("div", {
            className: x.bodyString,
            children: D
          }), k]
        }) : (0, i.jsx)(s.$jN, {})
      })
    }), !w && v && (0, i.jsx)(u.Z, {
      confettiTarget: N.current,
      confettiCanvas: C,
      confettiVelocityMultiplier: .75
    })]
  })
}