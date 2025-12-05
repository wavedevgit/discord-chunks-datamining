/** Chunk was on 75393 **/
/** chunk id: 719075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
let _ = e => {
    let {
      product: t,
      prioritizedCurrency: n
    } = e, d = (0, r.e7)([s.default], () => s.default.getCurrentUser()), f = (0, x.jB)(), _ = c.ZP.canUseCollectibles(d), {
      isDisabled: y
    } = (0, m.G)(t.skuId), {
      isPurchased: C,
      isPartiallyOwnedBundle: S,
      isRented: E,
      rentalExpiresAt: N
    } = (0, p.L)(t), O = (0, u.G1)(t), T = (0, u.rN)(t), P = l.useMemo(() => (0, u.BH)(t, _), [t, _]), I = (0, g.Iw)(t), {
      checkoutEligiblePrices: w,
      hasSufficientOrbs: k,
      shouldCheckoutWithOrbs: R
    } = (0, b.Ip)({
      product: t,
      isPremiumUser: _,
      prioritizedCurrency: n,
      hasDiscountOffer: null != I,
      isRental: null != f
    }), A = O && !_;
    if (y) return (0, a.jsx)(i.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t.wu4gyV)
    });
    if (S) return (0, a.jsx)(i.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t.BEjTij)
    });
    if (E && null != N) {
      let e = (0, o.TD)(Date.now(), N);
      return (0, a.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        lineClamp: 1,
        children: v.intl.format(v.t.Io7ozn, {
          days: e.days.toString()
        })
      })
    }
    return C && !A ? (0, a.jsx)(i.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      lineClamp: 1,
      children: v.intl.string(v.t["6cfuDj"])
    }) : T ? (0, a.jsx)(i.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: v.intl.string(v.t.nBtvYB)
    }) : O ? (0, a.jsx)(i.Text, {
      variant: "text-md/bold",
      color: "text-strong",
      lineClamp: 1,
      children: v.intl.string(v.t.rt69oo)
    }) : 0 === w.length ? null : (0, a.jsx)(h.F, {
      price: w[0],
      discount: P,
      nitroIconType: _ ? "default" : true,
      nitroIconSize: "sm",
      discountOfferAmount: I,
      className: R && !k ? j.insufficientOrbs : true,
      variant: "text-md/bold"
    })
  },
  y = e => {
    let {
      skuId: t,
      prioritizedCurrency: n
    } = e, l = (0, x.LJ)(t), r = (0, d.o)(l);
    if (null == l) return null;
    let i = (0, f.W)(l, r);
    return (0, a.jsx)(_, {
      product: i,
      prioritizedCurrency: n
    })
  }