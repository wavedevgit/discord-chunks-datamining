/** Chunk was on web.js **/
/** chunk id: 998030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hS: () => l,
  yc: () => s
});
var Chunk427164 = require("./427164.js"),
  Chunk46841 = require("./46841.js"),
  Chunk283066 = require("./283066.js");
let o = (0, Chunk427164.le)({
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
  } = e, n = o.useConfig({
    location: t
  }).enabled, r = (0, a.Z)({
    location: t
  }), s = (0, i.S)({
    location: t
  });
  return n && r && s
}

function l(e) {
  let {
    location: t
  } = e, n = s({
    location: t
  }), r = o.useConfig({
    location: t
  });
  return n && r.shouldShowShopBannerWhenWishlistEmpty
}