/** Chunk was on 22477 **/
/** chunk id: 140877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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
  Chunk219103 = require("./219103.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk767503 = require("./767503.js"),
  Chunk525723 = require("./525723.js"),
  Chunk57020 = require("./57020.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk491153 = require("./491153.js");
let y = e => {
    let {
      product: t,
      prioritizedCurrency: n
    } = e, d = (0, i.bG)([s.default], () => s.default.getCurrentUser()), x = (0, f.sC)(), y = c.Ay.canUseCollectibles(d), {
      isDisabled: _
    } = (0, m.I)(t.skuId), {
      isPurchased: A,
      isPartiallyOwnedBundle: C,
      isRented: S,
      rentalExpiresAt: O
    } = (0, p.h)(t), E = (0, u.G0)(t), N = (0, u.tt)(t), T = l.useMemo(() => (0, u.fT)(t, y), [t, y]), I = (0, b.V_)(t), {
      checkoutEligiblePrices: w,
      hasSufficientOrbs: k,
      shouldCheckoutWithOrbs: P
    } = (0, g.FI)({
      product: t,
      isPremiumUser: y,
      prioritizedCurrency: n,
      hasDiscountOffer: null != I,
      isRental: null != x
    }), R = E && !y;
    if (_) return (0, a.jsx)(r.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t.wu4gyV)
    });
    if (C) return (0, a.jsx)(r.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t.BEjTij)
    });
    if (S && null != O) {
      let e = (0, o.Tf)(Date.now(), O);
      return (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        lineClamp: 1,
        children: v.intl.format(v.t.Io7ozn, {
          days: e.days.toString()
        })
      })
    }
    return A && !R ? (0, a.jsx)(r.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t["6cfuDj"])
    }) : N ? (0, a.jsx)(r.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: v.intl.string(v.t.nBtvYB)
    }) : E ? (0, a.jsx)(r.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: v.intl.string(v.t.rt69oo)
    }) : 0 === w.length ? null : (0, a.jsx)(h.x, {
      price: w[0],
      discount: T,
      nitroIconType: y ? "default" : true,
      nitroIconSize: "sm",
      discountOfferAmount: I,
      className: P && !k ? j.c : true,
      variant: "text-md/bold"
    })
  },
  _ = e => {
    let {
      skuId: t,
      prioritizedCurrency: n
    } = e, l = (0, f.Vm)(t), i = (0, d.Q)(l);
    if (null == l) return null;
    let r = (0, x.r)(l, i);
    return (0, a.jsx)(y, {
      product: r,
      prioritizedCurrency: n
    })
  }