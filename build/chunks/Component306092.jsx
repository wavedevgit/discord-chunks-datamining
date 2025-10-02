/** Chunk was on 204 **/
/** chunk id: 306092, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  e: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk409116 = require("./409116.jsx"),
  Chunk755007 = require("./755007.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk198729 = require("./198729.js");

function o(e) {
  let {
    price: t,
    isPremiumUser: i,
    discount: o,
    hasSufficientOrbs: u,
    discountOfferAmount: d
  } = e;
  return t.currency === a.pK.DISCORD_ORB ? (0, l.jsx)(n.Z, {
    orbAmount: t.amount,
    className: u ? true : s.disabled
  }) : (0, l.jsx)(r.F, {
    price: t,
    discount: o,
    nitroIconType: i ? "default" : true,
    nitroIconSize: "md",
    discountOfferAmount: d
  })
}

function u(e) {
  let {
    displayPrices: t,
    isPremiumUser: i,
    discount: r,
    hasSufficientOrbs: n,
    discountOfferAmount: a
  } = e;
  return (0, l.jsx)("div", {
    className: s.priceLine,
    children: t.map((e, t) => (0, l.jsx)(o, {
      price: e,
      isPremiumUser: i,
      discount: r,
      hasSufficientOrbs: n,
      discountOfferAmount: a
    }, t))
  })
}