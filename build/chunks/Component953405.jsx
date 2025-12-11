/** Chunk was on 8087 **/
/** chunk id: 953405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk558060 = require("./558060.jsx"),
  Chunk539598 = require("./539598.jsx"),
  Chunk409116 = require("./409116.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk390252 = require("./390252.js");

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

function f(e) {
  let {
    prices: t,
    isPremiumUser: n,
    discount: i,
    product: c,
    hasSufficientOrbs: f,
    isProductDisabled: m,
    discountOfferAmount: p
  } = e, v = null != p;
  return 0 === t.length ? null : t[0].currency === s.pK.DISCORD_ORB ? (0, r.jsx)(d, {
    orbPrice: t[0],
    isProductDisabled: m,
    hasSufficientOrbs: f
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
        discountOfferAmount: p
      }), n || v ? null : (0, r.jsx)(l.Z, {
        product: c
      })]
    }), t.length > 1 && t[1].currency === s.pK.DISCORD_ORB && (0, r.jsx)(o.F, {
      price: t[1],
      className: m || !f ? u.disabled : true
    })]
  })
}