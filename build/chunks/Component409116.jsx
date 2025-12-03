/** Chunk was on 88282 **/
/** chunk id: 409116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk884697 = require("./884697.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239051 = require("./239051.js");
let p = e => {
    let {
      price: t,
      nitroIconType: n,
      nitroIconSize: l = "md",
      className: r,
      discountOfferAmount: i,
      discount: s = c.f_,
      variant: o = "text-md/semibold"
    } = e;
    return t.currency === d.pK.DISCORD_ORB ? (0, a.jsx)(x, {
      orbAmount: t.amount,
      className: r,
      variant: o
    }) : (0, a.jsx)(h, {
      price: t,
      nitroIconType: n,
      nitroIconSize: l,
      className: r,
      discountOfferAmount: i,
      discount: s,
      variant: o
    })
  },
  h = e => {
    let {
      price: {
        amount: t,
        currency: n
      },
      nitroIconType: l,
      nitroIconSize: d = "md",
      className: p,
      discountOfferAmount: h,
      discount: x = c.f_,
      variant: f = "heading-md/semibold"
    } = e, g = null != h, b = (0, o.qr)(t, n), v = x !== c.f_ && x.discountPercentage >= 5 && !g ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(s.nn4, {
        children: u.intl.format(u.t.niC6DK, {
          price: b,
          discountPercentage: x.discountPercentage
        })
      }), (0, a.jsx)("span", {
        "aria-hidden": true,
        children: b
      }), (0, a.jsx)("span", {
        className: m.discount,
        "aria-hidden": true,
        children: " (-".concat(x.discountPercentage, "%)")
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(s.nn4, {
        children: u.intl.format(u.t["6C36MF"], {
          price: b
        })
      }), (0, a.jsx)("span", {
        "aria-hidden": true,
        className: r()({
          [m.priceStrikethrough]: g
        }, p),
        children: b
      })]
    });
    return (0, a.jsxs)("div", {
      className: r()({
        [m.discountBackgroundColor]: g
      }, m.container, p),
      children: ["tooltip" === l ? (0, a.jsx)(i.u, {
        text: u.intl.string(u.t.MPFyJ5),
        "aria-label": u.intl.string(u.t.X3Ekj8),
        children: (0, a.jsx)(s.SrA, {
          size: d,
          color: "currentColor",
          className: m.icon
        })
      }) : "default" === l ? (0, a.jsx)(s.SrA, {
        size: d,
        color: "currentColor",
        className: m.icon
      }) : null, (0, a.jsx)(s.Text, {
        variant: f,
        color: "currentColor",
        lineClamp: 1,
        children: v
      }), g && (0, a.jsxs)(s.Text, {
        variant: f,
        className: m.discountPill,
        lineClamp: 1,
        children: [(0, a.jsx)(s.nn4, {
          children: u.intl.format(u.t.rItDbx, {
            discountOfferAmount: h
          })
        }), (0, a.jsx)("span", {
          "aria-hidden": true,
          children: u.intl.formatToPlainString(u.t.AYcXGW, {
            discountOfferAmount: h
          })
        })]
      })]
    })
  },
  x = e => {
    let {
      orbAmount: t,
      className: n,
      variant: l = "text-md/semibold"
    } = e;
    return (0, a.jsxs)("div", {
      className: r()(m.container, n),
      children: [(0, a.jsx)(s.aQr, {
        color: "currentColor",
        size: "sm",
        className: m.icon
      }), (0, a.jsxs)(s.Text, {
        variant: l,
        color: "currentColor",
        lineClamp: 1,
        children: [(0, a.jsx)(s.nn4, {
          children: u.intl.format(u.t["a/Y8PK"], {
            orbAmount: t
          })
        }), (0, a.jsx)("span", {
          "aria-hidden": true,
          children: t
        })]
      })]
    })
  }