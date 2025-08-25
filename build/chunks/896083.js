/** Chunk was on web.js **/
/** chunk id: 896083, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk295141 = require("./295141.js");
let o = () => {
  let [e, t] = Chunk647438.useState(false), [n, o] = Chunk647438.useState(null);
  return {
    loading: module,
    error: require,
    getTrialPurchaseEligibility: Chunk647438.useCallback(async (e, n, r) => {
      t(true), o(null);
      try {
        return await (0, i.LB)(e, n, r)
      } catch (e) {
        o(e)
      } finally {
        t(false)
      }
    }, [])
  }
}