/** Chunk was on 66181 **/
/** chunk id: 10508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => p,
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
let p = e => {
    let {
      userDiscountOffer: t,
      offerState: n = "none"
    } = e, {
      discountedPrice: i,
      premiumSubscription: a
    } = (0, l.a)();
    return (0, r.jsxs)("div", {
      className: d.discountOfferContainer,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: u,
        className: d.nitroIcon
      }), (0, r.jsxs)("div", {
        className: d.discountOfferContent,
        children: [(0, r.jsx)(s.xv, {
          variant: "text-md/semibold",
          children: a.status === o.O0b.CANCELED ? c.intl.format(c.t["DC+nPD"], {
            numMonths: t.discount.user_usage_limit,
            discountedPrice: i
          }) : c.intl.format(c.t.tQvNlp, {
            numMonths: t.discount.user_usage_limit
          })
        }), (0, r.jsx)(g, {
          userDiscountOffer: t,
          offerState: n
        })]
      })]
    })
  },
  g = e => {
    let {
      userDiscountOffer: t,
      offerState: n
    } = e, {
      discountedPrice: i,
      fullPrice: d,
      premiumSubscription: u
    } = (0, l.a)();
    switch (n) {
      case "applied":
        if (u.status === o.O0b.CANCELED) return (0, r.jsx)(s.xv, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: c.intl.formatToPlainString(c.t.h2g1IS, {
            billingPeriod: (0, a.JP)(t.discount.user_usage_limit_interval),
            numMonths: t.discount.user_usage_limit,
            fullPrice: d
          })
        });
        return (0, r.jsx)(s.xv, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: c.intl.formatToPlainString(c.t.gPzMHR, {
            numMonths: t.discount.user_usage_limit,
            discountedPrice: i,
            regularPrice: d
          })
        });
      case "confirming":
        if (u.status === o.O0b.CANCELED) return (0, r.jsx)(s.xv, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: c.intl.formatToPlainString(c.t.iDFk3t, {
            billingPeriod: (0, a.JP)(t.discount.user_usage_limit_interval),
            numMonths: t.discount.user_usage_limit,
            fullPrice: d
          })
        });
        return (0, r.jsx)(s.xv, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: c.intl.formatToPlainString(c.t.Eq1RHB, {
            percent: t.discount.amount,
            numMonths: t.discount.user_usage_limit,
            price: d
          })
        });
      default:
        return (0, r.jsx)(s.xv, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: c.intl.formatToPlainString(c.t["2gem09"], {
            percent: t.discount.amount,
            numMonths: t.discount.user_usage_limit
          })
        })
    }
  }