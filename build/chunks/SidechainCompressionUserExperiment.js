/** Chunk was on web.js **/
/** chunk id: 111672, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-07_sidechain_compression",
  label: "Test sidechain compression",
  defaultConfig: {
    sidechainAvailable: false,
    sidechainEnabled: false
  },
  treatments: [{
    id: 1,
    label: "Sidechain Compression available, default enabled",
    config: {
      sidechainAvailable: true,
      sidechainEnabled: true
    }
  }, {
    id: 2,
    label: "Sidechain Compression avialable, default disabled",
    config: {
      sidechainAvailable: true,
      sidechainEnabled: false
    }
  }]
})