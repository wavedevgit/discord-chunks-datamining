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
  Chunk530618 = require("./530618.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk230916 = require("./230916.js"),
  Chunk798769 = require("./798769.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk583532 = require("./583532.js"),
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
  } = e, O = (0, l.ZP)(), P = (0, s.wj)(O) ? y : h, v = r.useRef(null), [N, I] = r.useState(false), T = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, E), S = (0, d.aS)(f.Xh.PREMIUM_MONTH_TIER_2, false, false, {
    currency: t.currency,
    paymentSourceId: t.paymentSourceId
  }), R = (0, m.T4)(S.amount, S.currency), w = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
  if (r.useEffect(() => {
      null != v.current && null != T && I(true)
    }, [v, N, T]), null == E || null == T) return null;
  let D = b.intl.format(b.t.gPzMHR, {
      numMonths: E.discount.user_usage_limit,
      discountedPrice: T,
      regularPrice: R
    }),
    k = <div className={x.whatYouLoseButtonContainer}><o.zxk variant={"primary"} text={b.intl.string(b.t["/r8g/v"])} onClick={g} /></div>;
  return <i.Fragment>{<_.Z premiumType={n} className={x.cancellationHeader} onClose={g} />}{<div ref={v}><o.hzk data-migration-pending={true} className={x.body}>{null != T ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsxs)("div", {
            className: x.discountAppliedBody,
            children: [(0, i.jsx)("img", {
              alt: "",
              src: P,
              className: x.nitroIcon
            }), (0, i.jsx)(o.X6q, {
              variant: "heading-xl/bold",
              children: j ? b.intl.string(b.t.gOOPaG) : b.intl.string(b.t.PZSyRk)
            })]
          }), (0, i.jsx)("div", {
            className: x.bodyString,
            children: D
          }), k]
        }) : (0, i.jsx)(o.$jN, {})}</o.hzk></div>}{!w && N && <u.Z confettiTarget={v.current} confettiCanvas={C} confettiVelocityMultiplier={.75} />}</i.Fragment>
}