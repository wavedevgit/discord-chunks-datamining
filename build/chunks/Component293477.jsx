/** Chunk was on 1784 **/
/** chunk id: 293477, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk501664 = require("./501664.jsx"),
  Chunk882342 = require("./882342.jsx"),
  Chunk219103 = require("./219103.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk969061 = require("./969061.js");

function u(e) {
  let {
    orbPrice: t,
    isProductDisabled: n,
    hasSufficientOrbs: a
  } = e, i = n ? o.intl.string(o.t.wu4gyV) : o.intl.string(o.t.eFNRzU), c = n || !a;
  return (0, r.jsxs)("div", {
    className: d.eg,
    children: [(0, r.jsx)("div", {
      className: d.zR,
      children: (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        className: c ? d.r9 : true,
        children: i
      })
    }), (0, r.jsx)(s.x, {
      price: t,
      className: c ? d.r9 : true
    })]
  })
}

function m(e) {
  let {
    prices: t,
    isPremiumUser: n,
    discount: l,
    product: o,
    hasSufficientOrbs: m,
    isProductDisabled: f,
    discountOfferAmount: b
  } = e, p = null != b;
  return 0 === t.length ? null : t[0].currency === c.Yr.DISCORD_ORB ? (0, r.jsx)(u, {
    orbPrice: t[0],
    isProductDisabled: f,
    hasSufficientOrbs: m
  }) : (0, r.jsxs)("div", {
    className: d.eg,
    children: [(0, r.jsxs)("div", {
      className: d.pw,
      children: [(0, r.jsx)(a.A, {
        product: o,
        discount: l,
        isPremiumUser: n,
        hideStrikethroughPrice: !n || p,
        nitroIconType: "tooltip",
        nitroIconSize: "xs",
        discountOfferAmount: b
      }), n || p ? null : (0, r.jsx)(i.A, {
        product: o
      })]
    }), t.length > 1 && t[1].currency === c.Yr.DISCORD_ORB && (0, r.jsx)(s.x, {
      price: t[1],
      className: f || !m ? d.r9 : true
    })]
  })
}