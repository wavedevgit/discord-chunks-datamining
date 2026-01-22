/** Chunk was on web.js **/
/** chunk id: 916023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jw: () => s,
  kt: () => i,
  xD: () => a
});
let r = (0, require("./945810.js").mj)({
  name: "2025-12-social-layer-storefront-user-experiment",
  kind: "user",
  defaultConfig: {
    enabled: false,
    wishlistRetargetingEnabled: false
  },
  variations: {
    0: {
      enabled: false,
      wishlistRetargetingEnabled: false
    },
    1: {
      enabled: true,
      wishlistRetargetingEnabled: false
    },
    2: {
      enabled: true,
      wishlistRetargetingEnabled: true
    }
  }
});

function i(e) {
  let {
    location: t
  } = e;
  return r.useConfig({
    location: t
  }).enabled
}

function a(e) {
  let {
    location: t
  } = e;
  return r.getConfig({
    location: t
  }).enabled
}

function s(e) {
  let {
    location: t
  } = e;
  return r.useConfig({
    location: t
  }).wishlistRetargetingEnabled
}