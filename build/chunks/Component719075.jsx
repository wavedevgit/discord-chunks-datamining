/** Chunk was on 945 **/
/** chunk id: 719075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk897467 = require("./897467.js");
let y = e => {
    let {
      product: t,
      prioritizedCurrency: n
    } = e, d = (0, i.e7)([s.default], () => s.default.getCurrentUser()), x = (0, f.jB)(), y = c.ZP.canUseCollectibles(d), {
      isDisabled: C
    } = (0, m.G)(t.skuId), {
      isPurchased: _,
      isPartiallyOwnedBundle: S,
      isRented: E,
      rentalExpiresAt: O
    } = (0, p.L)(t), T = (0, u.G1)(t), N = (0, u.rN)(t), P = r.useMemo(() => (0, u.BH)(t, y), [t, y]), w = (0, b.Iw)(t), {
      checkoutEligiblePrices: I,
      hasSufficientOrbs: k,
      shouldCheckoutWithOrbs: R
    } = (0, g.Ip)({
      product: t,
      isPremiumUser: y,
      prioritizedCurrency: n,
      hasDiscountOffer: null != w,
      isRental: null != x
    }), A = T && !y;
    if (C) return (0, a.jsx)(l.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t.wu4gyV)
    });
    if (S) return (0, a.jsx)(l.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t.BEjTij)
    });
    if (E && null != O) {
      let e = (0, o.TD)(Date.now(), O);
      return (0, a.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        lineClamp: 1,
        children: v.intl.format(v.t.Io7ozn, {
          days: e.days.toString()
        })
      })
    }
    return _ && !A ? (0, a.jsx)(l.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t["6cfuDj"])
    }) : N ? (0, a.jsx)(l.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: v.intl.string(v.t.nBtvYB)
    }) : T ? (0, a.jsx)(l.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: v.intl.string(v.t.rt69oo)
    }) : 0 === I.length ? null : (0, a.jsx)(h.F, {
      price: I[0],
      discount: P,
      nitroIconType: y ? "default" : true,
      nitroIconSize: "sm",
      discountOfferAmount: w,
      className: R && !k ? j.insufficientOrbs : true,
      variant: "text-md/bold"
    })
  },
  C = e => {
    let {
      skuId: t,
      prioritizedCurrency: n
    } = e, r = (0, f.LJ)(t), i = (0, d.o)(r);
    if (null == r) return null;
    let l = (0, x.W)(r, i);
    return (0, a.jsx)(y, {
      product: l,
      prioritizedCurrency: n
    })
  }