/** Chunk was on web.js **/
/** chunk id: 896083, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk295141 = require("./295141.js");
let a = () => {
  let [e, t] = Chunk473749.useState(false), [n, a] = Chunk473749.useState(null);
  return {
    loading: module,
    error: require,
    getTrialPurchaseEligibility: Chunk473749.useCallback(async (e, n, r) => {
      t(true), a(null);
      try {
        return await (0, i.LB)(e, n, r)
      } catch (e) {
        a(e)
      } finally {
        t(false)
      }
    }, [])
  }
}