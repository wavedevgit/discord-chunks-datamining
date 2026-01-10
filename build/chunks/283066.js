/** Chunk was on web.js **/
/** chunk id: 283066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => a,
  Z: () => i
});
let r = (0, require("./722733.js").ZP)({
  kind: "user",
  name: "2025-10-premium-brand-refresh-ga-backtest",
  defaultConfig: {
    enabled: true
  },
  variations: {
    1: {
      enabled: false
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