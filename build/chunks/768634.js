/** Chunk was on web.js **/
/** chunk id: 768634, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => s
});
var Chunk427164 = require("./427164.js"),
  Chunk111361 = require("./111361.js"),
  Chunk474936 = require("./474936.js");
let o = (0, Chunk427164.le)({
  name: "2025-09-nitro-badge-churn-modal",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    1: {
      enabled: true
    }
  }
});

function s(e, t) {
  let {
    enabled: n
  } = o.useConfig({
    location: t
  });
  return !!(0, i.M5)(e, a.PremiumTypes.TIER_2) && n
}