/** Chunk was on web.js **/
/** chunk id: 349540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js");
require("./367074.js");
var Chunk163684 = require("./163684.js"),
  Chunk312973 = require("./312973.js"),
  Chunk748770 = require("./748770.js"),
  Chunk474936 = require("./474936.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk147913.Z {
  async onPostConnectionOpen() {
    this.maybeFetchActivePromotions(), await this.maybeFetchBogoPromotion()
  }
  maybeFetchActivePromotions() {
    let e = Chunk594174.default.getCurrentUser(),
      t = Chunk74538.ZP.isPremiumExactly(module, Chunk474936.PremiumTypes.TIER_2),
      n = (0, Chunk312973.$)({
        location: "maybeFetchActivePromotions"
      }),
      r = Chunk163684.g.getCurrentConfig({
        location: "maybeFetchActivePromotions"
      }, {
        autoTrackExposure: false,
        disable: exports
      }).enabled;
    (require || exports || Chunk147913) && (0, Chunk748770.Br)()
  }
  constructor(...e) {
    super(...e), u(this, "actions", {
      POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
      EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this)
    }), u(this, "maybeFetchBogoPromotion", async () => {
      let e = i.default.getCurrentUser();
      a.ZP.isPremiumExactly(e, c.PremiumTypes.TIER_2)
    })
  }
}
let f = new d