/** Chunk was on 2026 **/
/** chunk id: 953405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => p
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

function f(e) {
  var t;
  let {
    orbPrice: n,
    isProductDisabled: o,
    hasSufficientOrbs: s
  } = e, {
    showBetaTag: u
  } = a.Z.useExperiment({
    location: "shop_orb_full_price_line"
  }), f = o ? d.intl.string(d.t.wu4gyc) : d.intl.string(d.t.eFNRzc), p = o || !s;
  return (0, r.jsxs)("div", {
    className: m.priceLine,
    children: [(0, r.jsxs)("div", {
      className: m.orbText,
      children: [(0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        className: p ? m.disabled : true,
        children: f
      }), u && (0, r.jsx)(l.Z, {})]
    }), (0, r.jsx)(c.Z, {
      orbAmount: null != (t = null == n ? true : n.amount) ? t : 1 / 0,
      className: p ? m.disabled : true
    })]
  })
}

function p(e) {
  var t;
  let {
    prices: n,
    isPremiumUser: i,
    discount: l,
    product: a,
    hasSufficientOrbs: d,
    isProductDisabled: p,
    discountOfferAmount: v
  } = e, b = null != v;
  return 0 === n.length ? null : n[0].currency === u.pK.DISCORD_ORB ? (0, r.jsx)(f, {
    orbPrice: n[0],
    isProductDisabled: p,
    hasSufficientOrbs: d
  }) : (0, r.jsxs)("div", {
    className: m.priceLine,
    children: [(0, r.jsxs)("div", {
      className: m.priceTagContainer,
      children: [(0, r.jsx)(o.Z, {
        product: a,
        discount: l,
        isPremiumUser: i,
        hideStrikethroughPrice: !i || b,
        nitroIconType: "tooltip",
        nitroIconSize: "xs",
        discountOfferAmount: v
      }), i || b ? null : (0, r.jsx)(s.Z, {
        product: a
      })]
    }), n.length > 1 && n[1].currency === u.pK.DISCORD_ORB && (0, r.jsx)(c.Z, {
      orbAmount: null != (t = n[1].amount) ? t : 1 / 0,
      className: p || !d ? m.disabled : true
    })]
  })
}