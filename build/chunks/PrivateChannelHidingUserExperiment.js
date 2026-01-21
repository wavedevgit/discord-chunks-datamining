/** Chunk was on web.js **/
/** chunk id: 638214, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k8: () => o,
  kQ: () => i.k
});
var Chunk818083 = require("./818083.js"),
  Chunk742151 = require("./742151.js");
let a = (0, Chunk818083.B)({
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

function o(e) {
  return a.useExperiment({
    location: e
  }).enableObfuscation
}