/** Chunk was on 5410 **/
/** chunk id: 409116, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  F: () => f
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
  Chunk239051 = require("./239051.js");
let f = e => {
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
    }) : (0, r.jsx)(v, {
      price: n,
      nitroIconType: t,
      nitroIconSize: l,
      className: i,
      discountOfferAmount: a,
      discount: o,
      variant: s
    })
  },
  v = e => {
    let {
      price: {
        amount: n,
        currency: t
      },
      nitroIconType: l,
      nitroIconSize: u = "md",
      className: f,
      discountOfferAmount: v,
      discount: b = c.f_,
      variant: g = "heading-md/semibold"
    } = e, h = null != v, m = (0, s.qr)(n, t), j = b !== c.f_ && b.discountPercentage >= 5 && !h ? (0, r.jsxs)(r.Fragment, {
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
        }, f),
        children: m
      })]
    });
    return (0, r.jsxs)("div", {
      className: i()({
        [p.discountBackgroundColor]: h
      }, p.container, f),
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
        children: j
      }), h && (0, r.jsxs)(o.Text, {
        variant: g,
        className: p.discountPill,
        lineClamp: 1,
        children: [(0, r.jsx)(o.nn4, {
          children: d.intl.format(d.t.rItDbx, {
            discountOfferAmount: v
          })
        }), (0, r.jsx)("span", {
          "aria-hidden": true,
          children: d.intl.formatToPlainString(d.t.AYcXGW, {
            discountOfferAmount: v
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
      className: i()(p.container, t),
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
            orbAmount: n
          })
        }), (0, r.jsx)("span", {
          "aria-hidden": true,
          children: n
        })]
      })]
    })
  }