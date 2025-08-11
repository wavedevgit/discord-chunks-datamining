/** Chunk was on web.js **/
/** chunk id: 638214, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-08_private_channel_hiding",
  label: "Private Channel Hiding",
  defaultConfig: {
    enableObfuscation: false,
    enableIntegrityCheck: false
  },
  treatments: [{
    id: 1,
    label: "Obfuscation Enabled",
    config: {
      enableObfuscation: true,
      enableIntegrityCheck: false
    }
  }, {
    id: 2,
    label: "Obfuscation + Integrity Check Enabled",
    config: {
      enableObfuscation: true,
      enableIntegrityCheck: true
    }
  }]
});

function i() {
  return r.getCurrentConfig({
    location: "1"
  }).enableObfuscation
}