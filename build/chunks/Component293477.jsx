/** Chunk was on 77313 **/
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

function d(e) {
  let {
    orbPrice: t,
    isProductDisabled: n,
    hasSufficientOrbs: i
  } = e, a = n ? c.intl.string(c.t.wu4gyV) : c.intl.string(c.t.eFNRzU), o = n || !i;
  return (0, r.jsxs)("div", {
    className: u.eg,
    children: [(0, r.jsx)("div", {
      className: u.zR,
      children: (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        className: o ? u.r9 : true,
        children: a
      })
    }), (0, r.jsx)(s.x, {
      priceAmount: t.amount,
      priceCurrency: t.currency,
      className: o ? u.r9 : true
    })]
  })
}

function m(e) {
  let {
    prices: t,
    isPremiumUser: n,
    discount: l,
    product: c,
    hasSufficientOrbs: m,
    isProductDisabled: p,
    discountOfferAmount: f
  } = e, x = null != f;
  return 0 === t.length ? null : t[0].currency === o.Yr.DISCORD_ORB ? (0, r.jsx)(d, {
    orbPrice: t[0],
    isProductDisabled: p,
    hasSufficientOrbs: m
  }) : (0, r.jsxs)("div", {
    className: u.eg,
    children: [(0, r.jsxs)("div", {
      className: u.pw,
      children: [(0, r.jsx)(i.A, {
        product: c,
        discount: l,
        isPremiumUser: n,
        hideStrikethroughPrice: !n || x,
        nitroIconType: "tooltip",
        nitroIconSize: "xs",
        discountOfferAmount: f
      }), n || x ? null : (0, r.jsx)(a.A, {
        product: c
      })]
    }), t.length > 1 && t[1].currency === o.Yr.DISCORD_ORB && (0, r.jsx)(s.x, {
      priceAmount: t[1].amount,
      priceCurrency: t[1].currency,
      className: p || !m ? u.r9 : true
    })]
  })
}