/** Chunk was on 8282 **/
/** chunk id: 953405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk558060 = require("./558060.jsx"),
  Chunk539598 = require("./539598.jsx"),
  Chunk409116 = require("./409116.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk551909 = require("./551909.js");

function d(e) {
  let {
    orbPrice: t,
    isProductDisabled: n,
    hasSufficientOrbs: a
  } = e, l = n ? c.intl.string(c.t.wu4gyV) : c.intl.string(c.t.eFNRzU), s = n || !a;
  return (0, r.jsxs)("div", {
    className: u.priceLine,
    children: [(0, r.jsx)("div", {
      className: u.orbText,
      children: (0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        className: s ? u.disabled : true,
        children: l
      })
    }), (0, r.jsx)(o.F, {
      price: t,
      className: s ? u.disabled : true
    })]
  })
}

function m(e) {
  let {
    prices: t,
    isPremiumUser: n,
    discount: i,
    product: c,
    hasSufficientOrbs: m,
    isProductDisabled: p,
    discountOfferAmount: f
  } = e, v = null != f;
  return 0 === t.length ? null : t[0].currency === s.pK.DISCORD_ORB ? (0, r.jsx)(d, {
    orbPrice: t[0],
    isProductDisabled: p,
    hasSufficientOrbs: m
  }) : (0, r.jsxs)("div", {
    className: u.priceLine,
    children: [(0, r.jsxs)("div", {
      className: u.priceTagContainer,
      children: [(0, r.jsx)(a.Z, {
        product: c,
        discount: i,
        isPremiumUser: n,
        hideStrikethroughPrice: !n || v,
        nitroIconType: "tooltip",
        nitroIconSize: "xs",
        discountOfferAmount: f
      }), n || v ? null : (0, r.jsx)(l.Z, {
        product: c
      })]
    }), t.length > 1 && t[1].currency === s.pK.DISCORD_ORB && (0, r.jsx)(o.F, {
      price: t[1],
      className: p || !m ? u.disabled : true
    })]
  })
}