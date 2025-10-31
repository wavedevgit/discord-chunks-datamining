/** Chunk was on 78825 **/
/** chunk id: 409116, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  F: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk884697 = require("./884697.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239051 = require("./239051.js");
let f = e => {
    let {
      price: n,
      nitroIconType: t,
      nitroIconSize: l = "md",
      className: i,
      discountOfferAmount: a,
      discount: o = u.f_,
      variant: s = "heading-md/semibold"
    } = e;
    return n.currency === c.pK.DISCORD_ORB ? (0, r.jsx)(g, {
      orbAmount: n.amount,
      className: i
    }) : (0, r.jsx)(p, {
      price: n,
      nitroIconType: t,
      nitroIconSize: l,
      className: i,
      discountOfferAmount: a,
      discount: o,
      variant: s
    })
  },
  p = e => {
    let {
      price: {
        amount: n,
        currency: t
      },
      nitroIconType: l,
      nitroIconSize: c = "md",
      className: f,
      discountOfferAmount: p,
      discount: g = u.f_,
      variant: b = "heading-md/semibold"
    } = e, m = null != p, h = (0, s.qr)(n, t), x = g !== u.f_ && g.discountPercentage >= 5 && !m ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.nn4, {
        children: d.intl.format(d.t.niC6DK, {
          price: h,
          discountPercentage: g.discountPercentage
        })
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        children: h
      }), (0, r.jsxs)(o.Text, {
        variant: b,
        color: "text-feedback-positive",
        className: v.discount,
        "aria-hidden": true,
        children: ["(-", g.discountPercentage, "%)"]
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.nn4, {
        children: d.intl.format(d.t["6C36MF"], {
          price: h
        })
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        className: i()({
          [v.priceStrikethrough]: m
        }, f),
        children: h
      })]
    });
    return (0, r.jsxs)(o.Text, {
      variant: b,
      className: i()({
        [v.discountBackgroundColor]: m
      }, v.container, f),
      children: ["tooltip" === l ? (0, r.jsx)(a.u, {
        text: d.intl.string(d.t.MPFyJ5),
        "aria-label": d.intl.string(d.t.X3Ekj8),
        children: (0, r.jsx)(o.SrA, {
          size: c,
          color: "currentColor",
          className: v.icon
        })
      }) : "default" === l ? (0, r.jsx)(o.SrA, {
        size: c,
        color: "currentColor",
        className: v.icon
      }) : null, x, m && (0, r.jsxs)(o.Heading, {
        variant: "heading-md/semibold",
        className: v.discountPill,
        children: [(0, r.jsx)(o.nn4, {
          children: d.intl.format(d.t.rItDbx, {
            discountOfferAmount: p
          })
        }), (0, r.jsx)("span", {
          "aria-hidden": true,
          children: d.intl.formatToPlainString(d.t.AYcXGW, {
            discountOfferAmount: p
          })
        })]
      })]
    })
  },
  g = e => {
    let {
      orbAmount: n,
      className: t
    } = e;
    return (0, r.jsxs)(o.Text, {
      variant: "text-md/semibold",
      className: i()(v.container, t),
      children: [(0, r.jsx)(o.nn4, {
        children: d.intl.format(d.t["a/Y8PK"], {
          orbAmount: n
        })
      }), (0, r.jsx)(o.aQr, {
        color: "currentColor",
        size: "sm",
        className: v.icon
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        children: n
      })]
    })
  }