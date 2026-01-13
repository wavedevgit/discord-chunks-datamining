/** Chunk was on 8087 **/
/** chunk id: 953405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => m
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
  } = e, l = n ? s.intl.string(s.t.wu4gyV) : s.intl.string(s.t.eFNRzU), c = n || !a;
  return (0, r.jsxs)("div", {
    className: u.priceLine,
    children: [(0, r.jsx)("div", {
      className: u.orbText,
      children: (0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        className: c ? u.disabled : true,
        children: l
      })
    }), (0, r.jsx)(o.F, {
      price: t,
      className: c ? u.disabled : true
    })]
  })
}

function m(e) {
  let {
    prices: t,
    isPremiumUser: n,
    discount: i,
    product: s,
    hasSufficientOrbs: m,
    isProductDisabled: f,
    discountOfferAmount: p
  } = e, b = null != p;
  return 0 === t.length ? null : t[0].currency === c.pK.DISCORD_ORB ? (0, r.jsx)(d, {
    orbPrice: t[0],
    isProductDisabled: f,
    hasSufficientOrbs: m
  }) : (0, r.jsxs)("div", {
    className: u.priceLine,
    children: [(0, r.jsxs)("div", {
      className: u.priceTagContainer,
      children: [(0, r.jsx)(a.Z, {
        product: s,
        discount: i,
        isPremiumUser: n,
        hideStrikethroughPrice: !n || b,
        nitroIconType: "tooltip",
        nitroIconSize: "xs",
        discountOfferAmount: p
      }), n || b ? null : (0, r.jsx)(l.Z, {
        product: s
      })]
    }), t.length > 1 && t[1].currency === c.pK.DISCORD_ORB && (0, r.jsx)(o.F, {
      price: t[1],
      className: f || !m ? u.disabled : true
    })]
  })
}