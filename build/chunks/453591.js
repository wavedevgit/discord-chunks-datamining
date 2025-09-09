/** Chunk was on web.js **/
/** chunk id: 453591, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => u
}), require("./388685.js"), require("./415506.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk78839 = require("./78839.js"),
  Chunk960048 = require("./960048.js"),
  Chunk29920 = require("./29920.js"),
  Chunk219333 = require("./219333.js"),
  Chunk304426 = require("./304426.js");

function u() {
  let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumSubscription()),
    [t, n] = (0, Chunk647438.useState)(false);
  return {
    redeemReward: async () => {
      require(true);
      try {
        var t;
        let n = await (0, Chunk29920.Ul)({
          subscriptionId: null != (t = null == module ? true : module.id) ? exports : ""
        });
        (null == require ? true : require.entitlement) ? (0, Chunk219333.j)({
          campaignID: Chunk304426.C
        }) : Chunk960048.Z.captureException(Error("Failed to redeem September 2025 Marketing Moment reward"))
      } catch (e) {
        Chunk960048.Z.captureException(module)
      } finally {
        require(false)
      }
    },
    isLoading: exports
  }
}