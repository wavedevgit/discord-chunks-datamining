/** Chunk was on web.js **/
/** chunk id: 219103, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk580630 = require("./580630.js"),
  Chunk993408 = require("./993408.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473443 = require("./473443.js");
let p = 5,
  _ = e => {
    let {
      priceAmount: t,
      priceCurrency: n,
      nitroIconType: i,
      nitroIconSize: a = "md",
      className: o,
      discountOfferAmount: s,
      discount: l = c.rr,
      variant: d = "text-md/semibold"
    } = e;
    return n === u.Yr.DISCORD_ORB ? (0, r.jsx)(m, {
      orbAmount: t,
      className: o,
      variant: d
    }) : (0, r.jsx)(h, {
      priceAmount: t,
      priceCurrency: n,
      nitroIconType: i,
      nitroIconSize: a,
      className: o,
      discountOfferAmount: s,
      discount: l,
      variant: d
    })
  },
  h = e => {
    let {
      priceAmount: t,
      priceCurrency: n,
      nitroIconType: i,
      nitroIconSize: u = "md",
      className: _,
      discountOfferAmount: h,
      discount: m = c.rr,
      variant: g = "heading-md/semibold"
    } = e, E = null != h, y = (0, l.RS)(t, n), b = m !== c.rr && m.discountPercentage >= p && !E ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.AC4, {
        children: d.intl.format(d.t.niC6DK, {
          price: y,
          discountPercentage: m.discountPercentage
        })
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        children: y
      }), (0, r.jsx)("span", {
        className: f.id,
        "aria-hidden": true,
        children: " (-".concat(m.discountPercentage, "%)")
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.AC4, {
        children: d.intl.format(d.t["6C36MF"], {
          price: y
        })
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        className: a()({
          [f.rN]: E
        }, _),
        children: y
      })]
    });
    return (0, r.jsxs)("div", {
      className: a()({
        [f.nn]: E
      }, f.kL, _),
      children: ["tooltip" === i ? (0, r.jsx)(o.m, {
        text: d.intl.string(d.t.MPFyJ5),
        "aria-label": d.intl.string(d.t.X3Ekj8),
        children: (0, r.jsx)(s.tvc, {
          size: u,
          color: "currentColor",
          className: f.Kk
        })
      }) : "default" === i ? (0, r.jsx)(s.tvc, {
        size: u,
        color: "currentColor",
        className: f.Kk
      }) : null, (0, r.jsx)(s.Text, {
        variant: g,
        color: "currentColor",
        lineClamp: 1,
        children: b
      }), E && (0, r.jsxs)(s.Text, {
        variant: g,
        className: f.NM,
        lineClamp: 1,
        children: [(0, r.jsx)(s.AC4, {
          children: d.intl.format(d.t.rItDbx, {
            discountOfferAmount: h
          })
        }), (0, r.jsx)("span", {
          "aria-hidden": true,
          children: d.intl.formatToPlainString(d.t.AYcXGW, {
            discountOfferAmount: h
          })
        })]
      })]
    })
  },
  m = e => {
    let {
      orbAmount: t,
      className: n,
      variant: i = "text-md/semibold"
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(f.kL, n),
      children: [(0, r.jsx)(s.Cp8, {
        color: "currentColor",
        size: "sm",
        className: f.Kk
      }), (0, r.jsxs)(s.Text, {
        variant: i,
        color: "currentColor",
        lineClamp: 1,
        children: [(0, r.jsx)(s.AC4, {
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