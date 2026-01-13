/** Chunk was on 89929 **/
/** chunk id: 409116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => v
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
  Chunk492436 = require("./492436.js");
let v = e => {
    let {
      price: t,
      nitroIconType: n,
      nitroIconSize: l = "md",
      className: i,
      discountOfferAmount: a,
      discount: o = c.f_,
      variant: s = "text-md/semibold"
    } = e;
    return t.currency === u.pK.DISCORD_ORB ? (0, r.jsx)(b, {
      orbAmount: t.amount,
      className: i,
      variant: s
    }) : (0, r.jsx)(f, {
      price: t,
      nitroIconType: n,
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
        amount: t,
        currency: n
      },
      nitroIconType: l,
      nitroIconSize: u = "md",
      className: v,
      discountOfferAmount: f,
      discount: b = c.f_,
      variant: g = "heading-md/semibold"
    } = e, h = null != f, m = (0, s.qr)(t, n), y = b !== c.f_ && b.discountPercentage >= 5 && !h ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.nn4, {
        children: d.intl.format(d.t.niC6DK, {
          price: m,
          discountPercentage: b.discountPercentage
        })
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        children: m
      }), (0, r.jsx)("span", {
        className: p.discount,
        "aria-hidden": true,
        children: " (-".concat(b.discountPercentage, "%)")
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.nn4, {
        children: d.intl.format(d.t["6C36MF"], {
          price: m
        })
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        className: i()({
          [p.priceStrikethrough]: h
        }, v),
        children: m
      })]
    });
    return (0, r.jsxs)("div", {
      className: i()({
        [p.discountBackgroundColor]: h
      }, p.container, v),
      children: ["tooltip" === l ? (0, r.jsx)(a.u, {
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
      }) : null, (0, r.jsx)(o.Text, {
        variant: g,
        color: "currentColor",
        lineClamp: 1,
        children: y
      }), h && (0, r.jsxs)(o.Text, {
        variant: g,
        className: p.discountPill,
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
      orbAmount: t,
      className: n,
      variant: l = "text-md/semibold"
    } = e;
    return (0, r.jsxs)("div", {
      className: i()(p.container, n),
      children: [(0, r.jsx)(o.aQr, {
        color: "currentColor",
        size: "sm",
        className: p.icon
      }), (0, r.jsxs)(o.Text, {
        variant: l,
        color: "currentColor",
        lineClamp: 1,
        children: [(0, r.jsx)(o.nn4, {
          children: d.intl.format(d.t["a/Y8PK"], {
            orbAmount: t
          })
        }), (0, r.jsx)("span", {
          "aria-hidden": true,
          children: t
        })]
      })]
    })
  }