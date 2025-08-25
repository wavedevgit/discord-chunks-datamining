/** Chunk was on web.js **/
/** chunk id: 306092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk409116 = require("./409116.jsx"),
  Chunk755007 = require("./755007.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk453510 = require("./453510.js");

function l(e) {
  let {
    price: t,
    isPremiumUser: n,
    discount: l,
    hasSufficientOrbs: c,
    discountOfferAmount: u
  } = e;
  return t.currency === a.pK.DISCORD_ORB ? (0, r.jsx)(o.Z, {
    orbAmount: t.amount,
    className: c ? true : s.disabled
  }) : (0, r.jsx)(i.F, {
    price: t,
    discount: l,
    nitroIconType: n ? "default" : true,
    nitroIconSize: "md",
    discountOfferAmount: u
  })
}

function c(e) {
  let {
    displayPrices: t,
    isPremiumUser: n,
    discount: i,
    hasSufficientOrbs: o,
    discountOfferAmount: a
  } = e;
  return (0, r.jsx)("div", {
    className: s.priceLine,
    children: t.map((e, t) => (0, r.jsx)(l, {
      price: e,
      isPremiumUser: n,
      discount: i,
      hasSufficientOrbs: o,
      discountOfferAmount: a
    }, t))
  })
}