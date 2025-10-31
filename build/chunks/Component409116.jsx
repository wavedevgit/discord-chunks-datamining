/** Chunk was on 72740 **/
/** chunk id: 409116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk884697 = require("./884697.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239051 = require("./239051.js");
let b = e => {
    let {
      price: t,
      nitroIconType: n,
      nitroIconSize: l = "md",
      className: a,
      discountOfferAmount: i,
      discount: o = c.f_,
      variant: s = "heading-md/semibold"
    } = e;
    return t.currency === u.pK.DISCORD_ORB ? (0, r.jsx)(y, {
      orbAmount: t.amount,
      className: a
    }) : (0, r.jsx)(f, {
      price: t,
      nitroIconType: n,
      nitroIconSize: l,
      className: a,
      discountOfferAmount: i,
      discount: o,
      variant: s
    })
  },
  f = e => {
    let {
      price: {
        amount: t,
        currency: n
      },
      nitroIconType: l,
      nitroIconSize: u = "md",
      className: b,
      discountOfferAmount: f,
      discount: y = c.f_,
      variant: O = "heading-md/semibold"
    } = e, v = null != f, m = (0, s.qr)(t, n), g = y !== c.f_ && y.discountPercentage >= 5 && !v ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.nn4, {
        children: d.intl.format(d.t.niC6DK, {
          price: m,
          discountPercentage: y.discountPercentage
        })
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        children: m
      }), (0, r.jsxs)(o.Text, {
        variant: O,
        color: "text-feedback-positive",
        className: p.discount,
        "aria-hidden": true,
        children: ["(-", y.discountPercentage, "%)"]
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.nn4, {
        children: d.intl.format(d.t["6C36MF"], {
          price: m
        })
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        className: a()({
          [p.priceStrikethrough]: v
        }, b),
        children: m
      })]
    });
    return (0, r.jsxs)(o.Text, {
      variant: O,
      className: a()({
        [p.discountBackgroundColor]: v
      }, p.container, b),
      children: ["tooltip" === l ? (0, r.jsx)(i.u, {
        text: d.intl.string(d.t.MPFyJ5),
        "aria-label": d.intl.string(d.t.X3Ekj8),
        children: (0, r.jsx)(o.SrA, {
          size: u,
          color: "currentColor",
          className: p.icon
        })
      }) : "default" === l ? (0, r.jsx)(o.SrA, {
        size: u,
        color: "currentColor",
        className: p.icon
      }) : null, g, v && (0, r.jsxs)(o.Heading, {
        variant: "heading-md/semibold",
        className: p.discountPill,
        children: [(0, r.jsx)(o.nn4, {
          children: d.intl.format(d.t.rItDbx, {
            discountOfferAmount: f
          })
        }), (0, r.jsx)("span", {
          "aria-hidden": true,
          children: d.intl.formatToPlainString(d.t.AYcXGW, {
            discountOfferAmount: f
          })
        })]
      })]
    })
  },
  y = e => {
    let {
      orbAmount: t,
      className: n
    } = e;
    return (0, r.jsxs)(o.Text, {
      variant: "text-md/semibold",
      className: a()(p.container, n),
      children: [(0, r.jsx)(o.nn4, {
        children: d.intl.format(d.t["a/Y8PK"], {
          orbAmount: t
        })
      }), (0, r.jsx)(o.aQr, {
        color: "currentColor",
        size: "sm",
        className: p.icon
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        children: t
      })]
    })
  }