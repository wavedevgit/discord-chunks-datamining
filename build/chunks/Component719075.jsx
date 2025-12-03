/** Chunk was on 45620 **/
/** chunk id: 719075, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk409116 = require("./409116.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk58201 = require("./58201.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997033 = require("./997033.js");
let x = e => {
    let {
      product: t,
      prioritizedCurrency: n
    } = e, u = (0, i.e7)([a.default], () => a.default.getCurrentUser()), h = (0, m.jB)(), x = c.ZP.canUseCollectibles(u), {
      isDisabled: E
    } = (0, f.G)(t.skuId), {
      isPurchased: O,
      isPartiallyOwnedBundle: S,
      isRented: y,
      rentalExpiresAt: j
    } = (0, g.L)(t), I = (0, d.G1)(t), k = (0, d.rN)(t), T = l.useMemo(() => (0, d.BH)(t, x), [t, x]), L = (0, C.Iw)(t), {
      checkoutEligiblePrices: P,
      hasSufficientOrbs: B,
      shouldCheckoutWithOrbs: N
    } = (0, _.Ip)({
      product: t,
      isPremiumUser: x,
      prioritizedCurrency: n,
      hasDiscountOffer: null != L,
      isRental: null != h
    }), A = I && !x;
    if (E) return (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: b.intl.string(b.t.wu4gyV)
    });
    if (S) return (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: b.intl.string(b.t.BEjTij)
    });
    if (y && null != j) {
      let e = (0, s.TD)(Date.now(), j);
      return (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        lineClamp: 1,
        children: b.intl.format(b.t.Io7ozn, {
          days: e.days.toString()
        })
      })
    }
    return O && !A ? (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: b.intl.string(b.t["6cfuDj"])
    }) : k ? (0, r.jsx)(o.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: b.intl.string(b.t.nBtvYB)
    }) : I ? (0, r.jsx)(o.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: b.intl.string(b.t.rt69oo)
    }) : 0 === P.length ? null : (0, r.jsx)(p.F, {
      price: P[0],
      discount: T,
      nitroIconType: x ? "default" : true,
      nitroIconSize: "sm",
      discountOfferAmount: L,
      className: N && !B ? v.insufficientOrbs : true,
      variant: "text-md/bold"
    })
  },
  E = e => {
    let {
      skuId: t,
      prioritizedCurrency: n
    } = e, l = (0, m.LJ)(t), i = (0, u.o)(l);
    if (null == l) return null;
    let o = (0, h.W)(l, i);
    return (0, r.jsx)(x, {
      product: o,
      prioritizedCurrency: n
    })
  }