/** Chunk was on 45620 **/
/** chunk id: 306092, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  e: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk409116 = require("./409116.jsx"),
  Chunk755007 = require("./755007.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk858022 = require("./858022.js");

function s(e) {
  let {
    price: t,
    isPremiumUser: r,
    discount: s,
    hasSufficientOrbs: c,
    discountOfferAmount: u
  } = e;
  return t.currency === i.pK.DISCORD_ORB ? (0, n.jsx)(a.Z, {
    orbAmount: t.amount,
    className: c ? true : o.disabled
  }) : (0, n.jsx)(l.F, {
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
    discount: l,
    hasSufficientOrbs: a,
    discountOfferAmount: i
  } = e;
  return (0, n.jsx)("div", {
    className: o.priceLine,
    children: t.map((e, t) => (0, n.jsx)(s, {
      price: e,
      isPremiumUser: r,
      discount: l,
      hasSufficientOrbs: a,
      discountOfferAmount: i
    }, t))
  })
}