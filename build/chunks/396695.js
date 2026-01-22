/** Chunk was on web.js **/
/** chunk id: 396695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk695825 = require("./695825.js");
let a = () => {
  let [e, t] = r.useState(false), [n, a] = r.useState(null);
  return {
    loading: e,
    error: n,
    getTrialPurchaseEligibility: r.useCallback(async (e, n, r) => {
      t(true), a(null);
      try {
        return await (0, i.KD)(e, n, r)
      } catch (e) {
        a(e)
      } finally {
        t(false)
      }
    }, [])
  }
}