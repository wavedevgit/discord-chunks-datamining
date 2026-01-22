/** Chunk was on web.js **/
/** chunk id: 950806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OS: () => o,
  xD: () => s
});
var Chunk945810 = require("./945810.js"),
  Chunk170887 = require("./170887.js");
let a = (0, Chunk945810.mj)({
  name: "2025-09-wishlist-in-dm-gifting-flow",
  kind: "user",
  defaultConfig: {
    enabled: false,
    shouldShowShopBannerWhenWishlistEmpty: false
  },
  variations: {
    0: {
      enabled: false,
      shouldShowShopBannerWhenWishlistEmpty: false
    },
    1: {
      enabled: true,
      shouldShowShopBannerWhenWishlistEmpty: true
    },
    2: {
      enabled: true,
      shouldShowShopBannerWhenWishlistEmpty: false
    }
  }
});

function s(e) {
  let {
    location: t
  } = e, n = a.useConfig({
    location: t
  }).enabled, r = (0, i.A)({
    location: t
  });
  return n && r
}

function o(e) {
  let {
    location: t
  } = e, n = s({
    location: t
  }), r = a.useConfig({
    location: t
  });
  return n && r.shouldShowShopBannerWhenWishlistEmpty
}