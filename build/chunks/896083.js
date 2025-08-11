/** Chunk was on 25548 **/
/** chunk id: 896083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => l
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk295141 = require("./295141.js");
let l = () => {
  let [e, t] = Chunk73800.useState(false), [n, l] = Chunk73800.useState(null);
  return {
    loading: module,
    error: require,
    getTrialPurchaseEligibility: Chunk73800.useCallback(async (e, n, i) => {
      t(true), l(null);
      try {
        return await (0, r.LB)(e, n, i)
      } catch (e) {
        l(e)
      } finally {
        t(false)
      }
    }, [])
  }
}