/** Chunk was on web.js **/
/** chunk id: 790060, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => a,
  R: () => i
});
var Chunk427164 = require("./427164.js"),
  i = function(e) {
    return e.DISABLED = "disabled", e.CONTROL = "control", e.TREATMENT_1 = "treatment_1", e.TREATMENT_2 = "treatment_2", e
  }({});
let a = (0, Chunk427164.le)({
  name: "2025-07-trial-redemption-cta-copy",
  kind: "user",
  defaultConfig: {
    enabled: false,
    bucket: "disabled"
  },
  variations: {
    0: {
      enabled: true,
      bucket: "control"
    },
    1: {
      enabled: true,
      bucket: "treatment_1"
    },
    2: {
      enabled: true,
      bucket: "treatment_2"
    }
  }
})