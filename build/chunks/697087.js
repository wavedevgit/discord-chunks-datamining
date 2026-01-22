/** Chunk was on web.js **/
/** chunk id: 697087, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => o
});
var Chunk945810 = require("./945810.js"),
  Chunk474090 = require("./474090.js"),
  Chunk788868 = require("./788868.js");
let s = (0, Chunk945810.mj)({
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

function o(e, t) {
  let {
    enabled: n
  } = s.useConfig({
    location: t
  });
  return null != e && !!(0, i.YE)(e, a.PremiumTypes.TIER_2) && n
}