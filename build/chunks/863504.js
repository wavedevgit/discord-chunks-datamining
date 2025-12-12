/** Chunk was on web.js **/
/** chunk id: 863504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk692547 = require("./692547.js"),
  Chunk474936 = require("./474936.js");
let a = Chunk474936.VU.PREMIUM_TENURE_1_MONTH,
  o = {
    [Chunk474936.VU.PREMIUM_TENURE_1_MONTH]: {
      start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START",
      end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END"
    },
    [Chunk474936.VU.PREMIUM_TENURE_3_MONTH]: {
      start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START",
      end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END"
    },
    [Chunk474936.VU.PREMIUM_TENURE_6_MONTH]: {
      start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START",
      end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END"
    },
    [Chunk474936.VU.PREMIUM_TENURE_12_MONTH]: {
      start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START",
      end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END"
    },
    [Chunk474936.VU.PREMIUM_TENURE_24_MONTH]: {
      start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START",
      end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END"
    },
    [Chunk474936.VU.PREMIUM_TENURE_36_MONTH]: {
      start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START",
      end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END"
    },
    [Chunk474936.VU.PREMIUM_TENURE_60_MONTH]: {
      start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START",
      end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END"
    },
    [Chunk474936.VU.PREMIUM_TENURE_72_MONTH]: {
      start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START",
      end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END"
    }
  };

function s(e) {
  var t;
  let n = null != (t = o[null != e ? e : a]) ? t : o[a];
  return {
    type: "custom",
    start: r.Z.colors[n.start],
    end: r.Z.colors[n.end]
  }
}