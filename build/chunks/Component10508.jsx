/** Chunk was on web.js **/
/** chunk id: 10508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => f,
  w: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk74538 = require("./74538.js"),
  Chunk594135 = require("./594135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk623361 = require("./623361.js"),
  Chunk947866 = require("./947866.js"),
  d = function(e) {
    return e.NONE = "none", e.CONFIRMING = "confirming", e.APPLIED = "applied", e
  }({});
let f = e => {
    let {
      userDiscountOffer: t,
      offerState: n = "none"
    } = e, {
      discountedPrice: a,
      premiumSubscription: d
    } = (0, o.a)();
    return (0, r.jsxs)("div", {
      className: c.discountOfferContainer,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: u,
        className: c.nitroIcon
      }), (0, r.jsxs)("div", {
        className: c.discountOfferContent,
        children: [(0, r.jsx)(i.xvT, {
          variant: "text-md/semibold",
          children: d.status === s.O0b.CANCELED ? l.intl.format(l.t["DC+nPC"], {
            numMonths: t.discount.user_usage_limit,
            discountedPrice: a
          }) : l.intl.format(l.t.tQvNll, {
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
      discountedPrice: c,
      fullPrice: u,
      premiumSubscription: d
    } = (0, o.a)();
    switch (n) {
      case "applied":
        if (d.status === s.O0b.CANCELED) return (0, r.jsx)(i.xvT, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: l.intl.formatToPlainString(l.t.h2g1Ia, {
            billingPeriod: (0, a.JP)(t.discount.user_usage_limit_interval),
            numMonths: t.discount.user_usage_limit,
            fullPrice: u
          })
        });
        return (0, r.jsx)(i.xvT, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: l.intl.formatToPlainString(l.t.gPzMHa, {
            numMonths: t.discount.user_usage_limit,
            discountedPrice: c,
            regularPrice: u
          })
        });
      case "confirming":
        if (d.status === s.O0b.CANCELED) return (0, r.jsx)(i.xvT, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: l.intl.formatToPlainString(l.t.iDFk3v, {
            billingPeriod: (0, a.JP)(t.discount.user_usage_limit_interval),
            numMonths: t.discount.user_usage_limit,
            fullPrice: u
          })
        });
        return (0, r.jsx)(i.xvT, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: l.intl.formatToPlainString(l.t.Eq1RHL, {
            percent: t.discount.amount,
            numMonths: t.discount.user_usage_limit,
            price: u
          })
        });
      default:
        return (0, r.jsx)(i.xvT, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: l.intl.formatToPlainString(l.t["2gem05"], {
            percent: t.discount.amount,
            numMonths: t.discount.user_usage_limit
          })
        })
    }
  }