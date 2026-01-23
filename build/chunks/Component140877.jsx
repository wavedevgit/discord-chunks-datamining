/** Chunk was on 22477 **/
/** chunk id: 140877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
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
let _ = e => {
    let {
      product: t,
      prioritizedCurrency: n
    } = e, d = (0, r.bG)([s.default], () => s.default.getCurrentUser()), h = (0, g.sC)(), _ = c.Ay.canUseCollectibles(d), {
      isDisabled: y
    } = (0, m.I)(t.skuId), {
      isPurchased: A,
      isPartiallyOwnedBundle: C,
      isRented: S,
      rentalExpiresAt: O
    } = (0, p.h)(t), E = (0, u.G0)(t), T = (0, u.tt)(t), N = l.useMemo(() => (0, u.fT)(t, _), [t, _]), w = (0, f.V_)(t), {
      checkoutEligiblePrices: I,
      hasSufficientOrbs: k,
      shouldCheckoutWithOrbs: P
    } = (0, b.FI)({
      product: t,
      isPremiumUser: _,
      prioritizedCurrency: n,
      hasDiscountOffer: null != w,
      isRental: null != h
    }), R = E && !_;
    if (y) return (0, a.jsx)(i.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t.wu4gyV)
    });
    if (C) return (0, a.jsx)(i.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t.BEjTij)
    });
    if (S && null != O) {
      let e = (0, o.Tf)(Date.now(), O);
      return (0, a.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        lineClamp: 1,
        children: v.intl.format(v.t.Io7ozn, {
          days: e.days.toString()
        })
      })
    }
    return A && !R ? (0, a.jsx)(i.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t["6cfuDj"])
    }) : T ? (0, a.jsx)(i.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: v.intl.string(v.t.nBtvYB)
    }) : E ? (0, a.jsx)(i.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: v.intl.string(v.t.rt69oo)
    }) : 0 === I.length ? null : (0, a.jsx)(x.x, {
      price: I[0],
      discount: N,
      nitroIconType: _ ? "default" : true,
      nitroIconSize: "sm",
      discountOfferAmount: w,
      className: P && !k ? j.c : true,
      variant: "text-md/bold"
    })
  },
  y = e => {
    let {
      skuId: t,
      prioritizedCurrency: n
    } = e, l = (0, g.Vm)(t), r = (0, d.Q)(l);
    if (null == l) return null;
    let i = (0, h.rb)(l, r);
    return (0, a.jsx)(_, {
      product: i,
      prioritizedCurrency: n
    })
  }