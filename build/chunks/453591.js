/** Chunk was on web.js **/
/** chunk id: 453591, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => f
}), require("./388685.js"), require("./415506.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk78839 = require("./78839.js"),
  Chunk960048 = require("./960048.js"),
  Chunk538981 = require("./538981.jsx"),
  Chunk29920 = require("./29920.js"),
  Chunk219333 = require("./219333.js"),
  Chunk951570 = require("./951570.jsx"),
  Chunk304426 = require("./304426.js");

function f() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumSubscription()),
    n = (0, Chunk538981.r)(),
    [f, _] = (0, Chunk647438.useState)(false);
  return {
    redeemReward: async () => {
      _(true);
      try {
        var r;
        let i = await (0, Chunk29920.Ul)({
          subscriptionId: null != (r = null == exports ? true : exports.id) ? Chunk647438 : ""
        });
        (null == Chunk442837 ? true : Chunk442837.entitlement) ? ((0, Chunk219333.j)({
          campaignID: Chunk304426.C
        }), null == require || require(Chunk442837.entitlement)) : (module || (0, Chunk951570.lK)(), Chunk960048.Z.captureException(Error("Failed to redeem September 2025 Marketing Moment reward")))
      } catch (e) {
        Chunk960048.Z.captureException(module)
      } finally {
        _(false)
      }
    },
    isLoading: f
  }
}