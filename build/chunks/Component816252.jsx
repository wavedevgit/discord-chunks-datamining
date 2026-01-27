/** Chunk was on web.js **/
/** chunk id: 816252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => f,
  b: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk927578 = require("./927578.js"),
  Chunk916974 = require("./916974.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk803758 = require("./803758.js"),
  Chunk67423 = require("./67423.js"),
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
    } = (0, o.X)();
    return (0, r.jsxs)("div", {
      className: c.j2,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: u,
        className: c.oU
      }), (0, r.jsxs)("div", {
        className: c.br,
        children: [(0, r.jsx)(i.EYj, {
          variant: "text-md/semibold",
          children: d.status === s.Dmq.CANCELED ? l.intl.format(l.t["DC+nPC"], {
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
    } = (0, o.X)();
    switch (n) {
      case "applied":
        if (d.status === s.Dmq.CANCELED) return (0, r.jsx)(i.EYj, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: l.intl.formatToPlainString(l.t.h2g1Ia, {
            billingPeriod: (0, a.Ke)(t.discount.user_usage_limit_interval),
            numMonths: t.discount.user_usage_limit,
            fullPrice: u
          })
        });
        return (0, r.jsx)(i.EYj, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: l.intl.formatToPlainString(l.t.gPzMHa, {
            numMonths: t.discount.user_usage_limit,
            discountedPrice: c,
            regularPrice: u
          })
        });
      case "confirming":
        if (d.status === s.Dmq.CANCELED) return (0, r.jsx)(i.EYj, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: l.intl.formatToPlainString(l.t.iDFk3v, {
            billingPeriod: (0, a.Ke)(t.discount.user_usage_limit_interval),
            numMonths: t.discount.user_usage_limit,
            fullPrice: u
          })
        });
        return (0, r.jsx)(i.EYj, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: l.intl.formatToPlainString(l.t.Eq1RHL, {
            percent: t.discount.amount,
            numMonths: t.discount.user_usage_limit,
            price: u
          })
        });
      default:
        return (0, r.jsx)(i.EYj, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: l.intl.formatToPlainString(l.t["2gem05"], {
            percent: t.discount.amount,
            numMonths: t.discount.user_usage_limit
          })
        })
    }
  }