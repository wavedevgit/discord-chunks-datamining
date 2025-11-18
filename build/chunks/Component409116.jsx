/** Chunk was on 78825 **/
/** chunk id: 409116, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  F: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk884697 = require("./884697.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk601160 = require("./601160.js");
let p = e => {
    let {
      price: n,
      nitroIconType: t,
      nitroIconSize: l = "md",
      className: i,
      discountOfferAmount: a,
      discount: o = c.f_,
      variant: s = "text-md/semibold"
    } = e;
    return n.currency === u.pK.DISCORD_ORB ? (0, r.jsx)(b, {
      orbAmount: n.amount,
      className: i,
      variant: s
    }) : (0, r.jsx)(f, {
      price: n,
      nitroIconType: t,
      nitroIconSize: l,
      className: i,
      discountOfferAmount: a,
      discount: o,
      variant: s
    })
  },
  f = e => {
    let {
      price: {
        amount: n,
        currency: t
      },
      nitroIconType: l,
      nitroIconSize: u = "md",
      className: p,
      discountOfferAmount: f,
      discount: b = c.f_,
      variant: g = "heading-md/semibold"
    } = e, m = null != f, h = (0, s.qr)(n, t), x = b !== c.f_ && b.discountPercentage >= 5 && !m ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.nn4, {
        children: d.intl.format(d.t.niC6DK, {
          price: h,
          discountPercentage: b.discountPercentage
        })
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        children: h
      }), (0, r.jsx)("span", {
        className: v.discount,
        "aria-hidden": true,
        children: " (-".concat(b.discountPercentage, "%)")
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
        }, p),
        children: h
      })]
    });
    return (0, r.jsxs)("div", {
      className: i()({
        [v.discountBackgroundColor]: m
      }, v.container, p),
      children: ["tooltip" === l ? (0, r.jsx)(a.u, {
        text: d.intl.string(d.t.MPFyJ5),
        "aria-label": d.intl.string(d.t.X3Ekj8),
        children: (0, r.jsx)(o.SrA, {
          size: u,
          color: "currentColor",
          className: v.icon
        })
      }) : "default" === l ? (0, r.jsx)(o.SrA, {
        size: u,
        color: "currentColor",
        className: v.icon
      }) : null, (0, r.jsx)(o.Text, {
        variant: g,
        color: "currentColor",
        lineClamp: 1,
        children: x
      }), m && (0, r.jsxs)(o.Text, {
        variant: g,
        className: v.discountPill,
        lineClamp: 1,
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
  b = e => {
    let {
      orbAmount: n,
      className: t,
      variant: l = "text-md/semibold"
    } = e;
    return (0, r.jsxs)("div", {
      className: i()(v.container, t),
      children: [(0, r.jsx)(o.aQr, {
        color: "currentColor",
        size: "sm",
        className: v.icon
      }), (0, r.jsxs)(o.Text, {
        variant: l,
        color: "currentColor",
        lineClamp: 1,
        children: [(0, r.jsx)(o.nn4, {
          children: d.intl.format(d.t["a/Y8PK"], {
            orbAmount: n
          })
        }), (0, r.jsx)("span", {
          "aria-hidden": true,
          children: n
        })]
      })]
    })
  }