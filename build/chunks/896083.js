/** Chunk was on 48091 **/
/** chunk id: 896083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk295141 = require("./295141.js");
let l = () => {
  let [e, t] = Chunk647438.useState(false), [n, l] = Chunk647438.useState(null);
  return {
    loading: module,
    error: require,
    getTrialPurchaseEligibility: Chunk647438.useCallback(async (e, n, r) => {
      t(true), l(null);
      try {
        return await (0, i.LB)(e, n, r)
      } catch (e) {
        l(e)
      } finally {
        t(false)
      }
    }, [])
  }
}