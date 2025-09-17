/** Chunk was on web.js **/
/** chunk id: 453591, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => E
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk538981 = require("./538981.jsx"),
  Chunk29920 = require("./29920.js"),
  Chunk219333 = require("./219333.js"),
  Chunk304426 = require("./304426.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("75056").then(require.bind(require, 16919));
    return t => (0, r.jsx)(e, m({}, t))
  })
}

function E() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumSubscription()),
    n = (0, Chunk538981.r)(),
    [r, o] = (0, Chunk647438.useState)(false);
  return {
    redeemReward: async () => {
      Chunk481060(true);
      try {
        var r;
        let i = await (0, Chunk29920.Ul)({
          subscriptionId: null != (r = null == exports ? true : exports.id) ? Chunk951288 : ""
        });
        Chunk626135.default.track(Chunk981631.rMx.PROMOTION_REWARD_REDEMPTION_ATTEMPTED, {
          redemption_response_eligibility: null == Chunk647438 ? true : Chunk647438.eligible,
          redemption_response_reason: null == Chunk647438 ? true : Chunk647438.reason
        }), (null == Chunk647438 ? true : Chunk647438.entitlement) ? ((0, Chunk219333.j)({
          campaignID: Chunk304426.C
        }), null == require || require(Chunk647438.entitlement)) : ((null == Chunk647438 ? true : Chunk647438.reason) === "reward_already_granted" ? ((0, Chunk219333.j)({
          campaignID: Chunk304426.C
        }), Chunk960048.Z.captureMessage("September 2025 Marketing Moment reward already granted")) : Chunk960048.Z.captureException(Error("Failed to redeem September 2025 Marketing Moment reward")), module || g())
      } catch (e) {
        Chunk960048.Z.captureException(module)
      } finally {
        Chunk481060(false)
      }
    },
    isLoading: Chunk951288
  }
}