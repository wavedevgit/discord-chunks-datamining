/** Chunk was on 33907 **/
/** chunk id: 953405, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  a: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk558060 = require("./558060.jsx"),
  Chunk539598 = require("./539598.jsx"),
  Chunk755007 = require("./755007.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk75344 = require("./75344.js");

function d(e) {
  var t;
  let {
    orbPrice: n,
    isProductDisabled: a,
    hasSufficientOrbs: l
  } = e, s = a ? c.intl.string(c.t.wu4gyc) : c.intl.string(c.t.eFNRzc), d = a || !l;
  return (0, r.jsxs)("div", {
    className: u.priceLine,
    children: [(0, r.jsx)("div", {
      className: u.orbText,
      children: (0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        className: d ? u.disabled : true,
        children: s
      })
    }), (0, r.jsx)(o.Z, {
      orbAmount: null != (t = null == n ? true : n.amount) ? t : 1 / 0,
      className: d ? u.disabled : true
    })]
  })
}

function p(e) {
  var t;
  let {
    prices: n,
    isPremiumUser: i,
    discount: c,
    product: p,
    hasSufficientOrbs: m,
    isProductDisabled: f,
    discountOfferAmount: v
  } = e, h = null != v;
  return 0 === n.length ? null : n[0].currency === s.pK.DISCORD_ORB ? (0, r.jsx)(d, {
    orbPrice: n[0],
    isProductDisabled: f,
    hasSufficientOrbs: m
  }) : (0, r.jsxs)("div", {
    className: u.priceLine,
    children: [(0, r.jsxs)("div", {
      className: u.priceTagContainer,
      children: [(0, r.jsx)(a.Z, {
        product: p,
        discount: c,
        isPremiumUser: i,
        hideStrikethroughPrice: !i || h,
        nitroIconType: "tooltip",
        nitroIconSize: "xs",
        discountOfferAmount: v
      }), i || h ? null : (0, r.jsx)(l.Z, {
        product: p
      })]
    }), n.length > 1 && n[1].currency === s.pK.DISCORD_ORB && (0, r.jsx)(o.Z, {
      orbAmount: null != (t = n[1].amount) ? t : 1 / 0,
      className: f || !m ? u.disabled : true
    })]
  })
}