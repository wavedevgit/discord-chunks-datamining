/** Chunk was on web.js **/
/** chunk id: 660000, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => s
});
var Chunk427164 = require("./427164.js"),
  Chunk111361 = require("./111361.js"),
  Chunk474936 = require("./474936.js");
let o = (0, Chunk427164.le)({
  name: "2025-10-nitro-badge-churn-reminder",
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
  return null != e && !!(0, i.M5)(e, a.PremiumTypes.TIER_2) && n
}