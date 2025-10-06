/** Chunk was on 70820 **/
/** chunk id: 409116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239051 = require("./239051.js");
let p = e => {
  let {
    price: {
      amount: t,
      currency: n
    },
    nitroIconType: l,
    nitroIconSize: p = "md",
    className: f,
    discountOfferAmount: b,
    discount: y = c.f_,
    variant: m = "heading-md/semibold"
  } = e, O = null != b, g = (0, s.qr)(t, n), j = y !== c.f_ && y.discountPercentage >= 5 && !O ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.nn4, {
      children: u.intl.format(u.t.niC6DA, {
        price: g,
        discountPercentage: y.discountPercentage
      })
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      children: g
    }), (0, r.jsxs)(o.Text, {
      variant: m,
      color: "text-feedback-positive",
      className: d.discount,
      "aria-hidden": true,
      children: ["(-", y.discountPercentage, "%)"]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.nn4, {
      children: u.intl.format(u.t["6C36MD"], {
        price: g
      })
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      className: i()({
        [d.priceStrikethrough]: O
      }, f),
      children: g
    })]
  });
  return (0, r.jsxs)(o.Text, {
    variant: m,
    className: i()({
      [d.discountBackgroundColor]: O
    }, d.container, f),
    children: ["tooltip" === l ? (0, r.jsx)(a.u, {
      text: u.intl.string(u.t.MPFyJy),
      "aria-label": u.intl.string(u.t.X3Ekj4),
      children: (0, r.jsx)(o.SrA, {
        size: p,
        color: "currentColor",
        className: d.nitroIcon
      })
    }) : "default" === l ? (0, r.jsx)(o.SrA, {
      size: p,
      color: "currentColor",
      className: d.nitroIcon
    }) : null, j, O && (0, r.jsxs)(o.X6q, {
      variant: "heading-md/semibold",
      className: d.discountPill,
      children: [(0, r.jsx)(o.nn4, {
        children: u.intl.format(u.t.rItDb2, {
          discountOfferAmount: b
        })
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        children: u.intl.formatToPlainString(u.t.AYcXGR, {
          discountOfferAmount: b
        })
      })]
    })]
  })
}