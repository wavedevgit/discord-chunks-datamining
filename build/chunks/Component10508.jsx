/** Chunk was on 30202 **/
/** chunk id: 10508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => m,
  w: () => u
});
var i, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk74538 = require("./74538.js"),
  Chunk594135 = require("./594135.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk623361 = require("./623361.js"),
  Chunk947866 = require("./947866.js"),
  u = ((i = {}).NONE = "none", i.CONFIRMING = "confirming", i.APPLIED = "applied", i);
let m = e => {
    let {
      userDiscountOffer: t,
      offerState: n = "none"
    } = e, {
      discountedPrice: i,
      premiumSubscription: a
    } = (0, l.a)();
    return (0, r.jsxs)("div", {
      className: c.discountOfferContainer,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: d,
        className: c.nitroIcon
      }), (0, r.jsxs)("div", {
        className: c.discountOfferContent,
        children: [(0, r.jsx)(s.xv, {
          variant: "text-md/semibold",
          children: null != a.canceledAt ? o.intl.format(o.t["DC+nPD"], {
            numMonths: t.discount.user_usage_limit,
            discountedPrice: i
          }) : o.intl.format(o.t.tQvNlp, {
            numMonths: t.discount.user_usage_limit
          })
        }), (0, r.jsx)(p, {
          userDiscountOffer: t,
          offerState: n
        })]
      })]
    })
  },
  p = e => {
    let {
      userDiscountOffer: t,
      offerState: n
    } = e, {
      discountedPrice: i,
      fullPrice: c,
      premiumSubscription: d
    } = (0, l.a)();
    switch (n) {
      case "applied":
        if (null != d.canceledAt) return (0, r.jsx)(s.xv, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: o.intl.formatToPlainString(o.t.h2g1IS, {
            billingPeriod: (0, a.JP)(t.discount.user_usage_limit_interval),
            numMonths: t.discount.user_usage_limit,
            fullPrice: c
          })
        });
        return (0, r.jsx)(s.xv, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: o.intl.formatToPlainString(o.t.gPzMHR, {
            numMonths: t.discount.user_usage_limit,
            discountedPrice: i,
            regularPrice: c
          })
        });
      case "confirming":
        if (null != d.canceledAt) return (0, r.jsx)(s.xv, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: o.intl.formatToPlainString(o.t.iDFk3t, {
            billingPeriod: (0, a.JP)(t.discount.user_usage_limit_interval),
            numMonths: t.discount.user_usage_limit,
            fullPrice: c
          })
        });
        return (0, r.jsx)(s.xv, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: o.intl.formatToPlainString(o.t.Eq1RHB, {
            percent: t.discount.amount,
            numMonths: t.discount.user_usage_limit,
            price: c
          })
        });
      default:
        return (0, r.jsx)(s.xv, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: o.intl.formatToPlainString(o.t["2gem09"], {
            percent: t.discount.amount,
            numMonths: t.discount.user_usage_limit
          })
        })
    }
  }