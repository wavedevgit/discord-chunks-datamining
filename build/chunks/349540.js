/** Chunk was on web.js **/
/** chunk id: 349540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js");
require("./367074.js");
var Chunk163684 = require("./163684.js"),
  Chunk748770 = require("./748770.js"),
  Chunk474936 = require("./474936.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk147913.Z {
  async onPostConnectionOpen() {
    this.maybeFetchActiveOutboundPromotions(), await this.maybeFetchBogoPromotion()
  }
  maybeFetchActiveOutboundPromotions() {
    let e = Chunk594174.default.getCurrentUser(),
      t = Chunk74538.ZP.isPremiumExactly(module, Chunk474936.PremiumTypes.TIER_2),
      n = Chunk163684.g.getCurrentConfig({
        location: "maybeFetchActiveOutboundPromotions"
      }, {
        autoTrackExposure: false,
        disable: exports
      }).enabled;
    (exports || require) && (0, Chunk748770.vM)()
  }
  constructor(...e) {
    super(...e), c(this, "actions", {
      POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
      EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this)
    }), c(this, "maybeFetchBogoPromotion", async () => {
      let e = i.default.getCurrentUser();
      a.ZP.isPremiumExactly(e, l.PremiumTypes.TIER_2)
    })
  }
}
let d = new u