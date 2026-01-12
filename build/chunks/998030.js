/** Chunk was on web.js **/
/** chunk id: 998030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hS: () => s,
  yc: () => o
});
var Chunk427164 = require("./427164.js"),
  Chunk283066 = require("./283066.js");
let a = (0, Chunk427164.le)({
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

function o(e) {
  let {
    location: t
  } = e, n = a.useConfig({
    location: t
  }).enabled, r = (0, i.Z)({
    location: t
  });
  return n && r
}

function s(e) {
  let {
    location: t
  } = e, n = o({
    location: t
  }), r = a.useConfig({
    location: t
  });
  return n && r.shouldShowShopBannerWhenWishlistEmpty
}