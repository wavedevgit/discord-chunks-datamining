/** Chunk was on 32160 **/
/** chunk id: 953405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk794231 = require("./794231.js"),
  Chunk558060 = require("./558060.jsx"),
  Chunk539598 = require("./539598.jsx"),
  Chunk755007 = require("./755007.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk551909 = require("./551909.js");

function p(e) {
  var t;
  let {
    orbPrice: n,
    isProductDisabled: c,
    hasSufficientOrbs: s
  } = e, {
    showBetaTag: d
  } = o.Z.useExperiment({
    location: "shop_orb_full_price_line"
  }), p = c ? u.intl.string(u.t.wu4gyc) : u.intl.string(u.t.eFNRzc), _ = c || !s;
  return (0, r.jsxs)("div", {
    className: m.priceLine,
    children: [(0, r.jsxs)("div", {
      className: m.orbText,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        className: _ ? m.disabled : true,
        children: p
      }), d && (0, r.jsx)(i.Z, {})]
    }), (0, r.jsx)(l.Z, {
      orbAmount: null != (t = null == n ? true : n.amount) ? t : 1 / 0,
      className: _ ? m.disabled : true
    })]
  })
}

function _(e) {
  var t;
  let {
    prices: n,
    isPremiumUser: a,
    discount: i,
    product: o,
    hasSufficientOrbs: u,
    isProductDisabled: _,
    discountOfferAmount: f
  } = e, g = null != f;
  return 0 === n.length ? null : n[0].currency === d.pK.DISCORD_ORB ? (0, r.jsx)(p, {
    orbPrice: n[0],
    isProductDisabled: _,
    hasSufficientOrbs: u
  }) : (0, r.jsxs)("div", {
    className: m.priceLine,
    children: [(0, r.jsxs)("div", {
      className: m.priceTagContainer,
      children: [(0, r.jsx)(c.Z, {
        product: o,
        discount: i,
        isPremiumUser: a,
        hideStrikethroughPrice: !a || g,
        nitroIconType: "tooltip",
        nitroIconSize: "xs",
        discountOfferAmount: f
      }), a || g ? null : (0, r.jsx)(s.Z, {
        product: o
      })]
    }), n.length > 1 && n[1].currency === d.pK.DISCORD_ORB && (0, r.jsx)(l.Z, {
      orbAmount: null != (t = n[1].amount) ? t : 1 / 0,
      className: _ || !u ? m.disabled : true
    })]
  })
}