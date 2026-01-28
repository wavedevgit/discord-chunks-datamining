/** Chunk was on web.js **/
/** chunk id: 140877, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927578 = require("./927578.js"),
  Chunk298072 = require("./298072.js"),
  Chunk993408 = require("./993408.js"),
  Chunk740076 = require("./740076.js"),
  Chunk466459 = require("./466459.js"),
  Chunk623373 = require("./623373.js"),
  Chunk219103 = require("./219103.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk525723 = require("./525723.js"),
  Chunk57020 = require("./57020.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk491153 = require("./491153.js");
let O = e => {
    let {
      product: t,
      prioritizedCurrency: n
    } = e, u = (0, a.bG)([s.default], () => s.default.getCurrentUser()), _ = (0, m.sC)(), O = c.Ay.canUseCollectibles(u), {
      isDisabled: v
    } = (0, f.I)(t.skuId), {
      isPurchased: A,
      isPartiallyOwnedBundle: I,
      isRented: S,
      rentalExpiresAt: T
    } = (0, p.h)(t), C = (0, d.G0)(t), N = (0, d.tt)(t), w = i.useMemo(() => (0, d.fT)(t, O), [t, O]), R = (0, g.V_)(t), P = null != R, {
      checkoutEligiblePrices: D,
      hasSufficientOrbs: L,
      shouldCheckoutWithOrbs: x
    } = (0, E.FI)({
      product: t,
      isPremiumUser: O,
      prioritizedCurrency: n,
      hasDiscountOffer: P,
      isRental: null != _
    }), M = C && !O;
    if (v) return (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: y.intl.string(y.t.wu4gyV)
    });
    if (I) return (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: y.intl.string(y.t.BEjTij)
    });
    if (S && null != T) {
      let e = (0, l.Tf)(Date.now(), T);
      return (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        lineClamp: 1,
        children: y.intl.format(y.t.Io7ozn, {
          days: e.days.toString()
        })
      })
    }
    return A && !M ? (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: y.intl.string(y.t["6cfuDj"])
    }) : N ? (0, r.jsx)(o.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: y.intl.string(y.t.nBtvYB)
    }) : C ? (0, r.jsx)(o.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: y.intl.string(y.t.rt69oo)
    }) : 0 === D.length ? null : (0, r.jsx)(h.x, {
      priceAmount: D[0].amount,
      priceCurrency: D[0].currency,
      discount: w,
      nitroIconType: O ? "default" : true,
      nitroIconSize: "sm",
      discountOfferAmount: R,
      className: x && !L ? b.c : true,
      variant: "text-md/bold"
    })
  },
  v = e => {
    let {
      skuId: t,
      prioritizedCurrency: n
    } = e, i = (0, m.Vm)(t), a = (0, u.Q)(i);
    if (null == i) return null;
    let o = (0, _.rb)(i, a);
    return (0, r.jsx)(O, {
      product: o,
      prioritizedCurrency: n
    })
  }