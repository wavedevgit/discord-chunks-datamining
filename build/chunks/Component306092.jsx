/** Chunk was on 71387 **/
/** chunk id: 306092, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  e: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk409116 = require("./409116.jsx"),
  Chunk755007 = require("./755007.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk453510 = require("./453510.js");

function s(e) {
  let {
    price: t,
    isPremiumUser: r,
    discount: s,
    hasSufficientOrbs: c,
    discountOfferAmount: u
  } = e;
  return t.currency === l.pK.DISCORD_ORB ? (0, n.jsx)(a.Z, {
    orbAmount: t.amount,
    className: c ? true : o.disabled
  }) : (0, n.jsx)(i.F, {
    price: t,
    discount: s,
    nitroIconType: r ? "default" : true,
    nitroIconSize: "md",
    discountOfferAmount: u
  })
}

function c(e) {
  let {
    displayPrices: t,
    isPremiumUser: r,
    discount: i,
    hasSufficientOrbs: a,
    discountOfferAmount: l
  } = e;
  return (0, n.jsx)("div", {
    className: o.priceLine,
    children: t.map((e, t) => (0, n.jsx)(s, {
      price: e,
      isPremiumUser: r,
      discount: i,
      hasSufficientOrbs: a,
      discountOfferAmount: l
    }, t))
  })
}