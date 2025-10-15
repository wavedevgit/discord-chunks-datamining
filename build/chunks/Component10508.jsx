/** Chunk was on 69432 **/
/** chunk id: 10508, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  o: () => f,
  w: () => m
});
var i, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk74538 = require("./74538.js"),
  Chunk594135 = require("./594135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk623361 = require("./623361.js"),
  Chunk947866 = require("./947866.js"),
  m = ((i = {}).NONE = "none", i.CONFIRMING = "confirming", i.APPLIED = "applied", i);
let f = t => {
    let {
      userDiscountOffer: e,
      offerState: n = "none"
    } = t, {
      discountedPrice: i,
      premiumSubscription: l
    } = (0, s.a)();
    return (0, r.jsxs)("div", {
      className: u.discountOfferContainer,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: d,
        className: u.nitroIcon
      }), (0, r.jsxs)("div", {
        className: u.discountOfferContent,
        children: [(0, r.jsx)(a.xvT, {
          variant: "text-md/semibold",
          children: l.status === o.O0b.CANCELED ? c.intl.format(c.t["DC+nPC"], {
            numMonths: e.discount.user_usage_limit,
            discountedPrice: i
          }) : c.intl.format(c.t.tQvNll, {
            numMonths: e.discount.user_usage_limit
          })
        }), (0, r.jsx)(p, {
          userDiscountOffer: e,
          offerState: n
        })]
      })]
    })
  },
  p = t => {
    let {
      userDiscountOffer: e,
      offerState: n
    } = t, {
      discountedPrice: i,
      fullPrice: u,
      premiumSubscription: d
    } = (0, s.a)();
    switch (n) {
      case "applied":
        if (d.status === o.O0b.CANCELED) return (0, r.jsx)(a.xvT, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: c.intl.formatToPlainString(c.t.h2g1Ia, {
            billingPeriod: (0, l.JP)(e.discount.user_usage_limit_interval),
            numMonths: e.discount.user_usage_limit,
            fullPrice: u
          })
        });
        return (0, r.jsx)(a.xvT, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: c.intl.formatToPlainString(c.t.gPzMHa, {
            numMonths: e.discount.user_usage_limit,
            discountedPrice: i,
            regularPrice: u
          })
        });
      case "confirming":
        if (d.status === o.O0b.CANCELED) return (0, r.jsx)(a.xvT, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: c.intl.formatToPlainString(c.t.iDFk3v, {
            billingPeriod: (0, l.JP)(e.discount.user_usage_limit_interval),
            numMonths: e.discount.user_usage_limit,
            fullPrice: u
          })
        });
        return (0, r.jsx)(a.xvT, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: c.intl.formatToPlainString(c.t.Eq1RHL, {
            percent: e.discount.amount,
            numMonths: e.discount.user_usage_limit,
            price: u
          })
        });
      default:
        return (0, r.jsx)(a.xvT, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: c.intl.formatToPlainString(c.t["2gem05"], {
            percent: e.discount.amount,
            numMonths: e.discount.user_usage_limit
          })
        })
    }
  }