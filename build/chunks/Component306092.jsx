/** Chunk was on 86031 **/
/** chunk id: 306092, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  e: () => c
});
var Chunk255367 = require("./255367.js"),
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
  return t.currency === l.pK.DISCORD_ORB ? (0, n.jsx)(i.Z, {
    orbAmount: t.amount,
    className: c ? true : o.disabled
  }) : (0, n.jsx)(a.F, {
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
    discount: a,
    hasSufficientOrbs: i,
    discountOfferAmount: l
  } = e;
  return (0, n.jsx)("div", {
    className: o.priceLine,
    children: t.map((e, t) => (0, n.jsx)(s, {
      price: e,
      isPremiumUser: r,
      discount: a,
      hasSufficientOrbs: i,
      discountOfferAmount: l
    }, t))
  })
}