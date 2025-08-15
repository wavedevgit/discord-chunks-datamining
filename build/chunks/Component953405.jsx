/** Chunk was on 17768 **/
/** chunk id: 953405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk794231 = require("./794231.js"),
  Chunk558060 = require("./558060.jsx"),
  Chunk539598 = require("./539598.jsx"),
  Chunk755007 = require("./755007.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk551909 = require("./551909.js");

function m(e) {
  var t;
  let {
    orbPrice: n,
    isProductDisabled: l,
    hasSufficientOrbs: c
  } = e, {
    showBetaTag: u
  } = o.Z.useExperiment({
    location: "shop_orb_full_price_line"
  }), m = l ? d.intl.string(d.t.wu4gyc) : d.intl.string(d.t.eFNRzc), g = l || !c;
  return (0, r.jsxs)("div", {
    className: p.priceLine,
    children: [(0, r.jsxs)("div", {
      className: p.orbText,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        className: g ? p.disabled : true,
        children: m
      }), u && (0, r.jsx)(i.Z, {})]
    }), (0, r.jsx)(s.Z, {
      orbAmount: null != (t = null == n ? true : n.amount) ? t : 1 / 0,
      className: g ? p.disabled : true
    })]
  })
}

function g(e) {
  var t;
  let {
    prices: n,
    isPremiumUser: a,
    discount: i,
    product: o,
    hasSufficientOrbs: d,
    isProductDisabled: g,
    discountOfferAmount: f
  } = e, b = null != f;
  return 0 === n.length ? null : n[0].currency === u.pK.DISCORD_ORB ? (0, r.jsx)(m, {
    orbPrice: n[0],
    isProductDisabled: g,
    hasSufficientOrbs: d
  }) : (0, r.jsxs)("div", {
    className: p.priceLine,
    children: [(0, r.jsxs)("div", {
      className: p.priceTagContainer,
      children: [(0, r.jsx)(l.Z, {
        product: o,
        discount: i,
        isPremiumUser: a,
        hideStrikethroughPrice: !a || b,
        nitroIconType: "tooltip",
        nitroIconSize: "xs",
        discountOfferAmount: f
      }), a || b ? null : (0, r.jsx)(c.Z, {
        product: o
      })]
    }), n.length > 1 && n[1].currency === u.pK.DISCORD_ORB && (0, r.jsx)(s.Z, {
      orbAmount: null != (t = n[1].amount) ? t : 1 / 0,
      className: g || !d ? p.disabled : true
    })]
  })
}