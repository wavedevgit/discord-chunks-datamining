/** Chunk was on 55183 **/
/** chunk id: 566111, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk25251 = require("./25251.js"),
  Chunk238359 = require("./238359.js"),
  Chunk223143 = require("./223143.js");

function s() {
  var e;
  let {
    isFetching: t,
    fetchCategoriesError: r,
    fetchPurchasesError: s,
    categories: c,
    purchases: a
  } = (0, Chunk223143.ZP)();
  (0, Chunk238359.D)();
  let [u, d, f] = (0, Chunk442837.Wu)([Chunk25251.Z], () => [Chunk25251.Z.isFetchingAll, Chunk25251.Z.fetchError, Chunk25251.Z.profileEffects]);
  return {
    isFetching: exports || u,
    combinedError: null != (e = null != require ? require : s) ? module : d,
    profileEffects: f,
    categories: c,
    purchases: a
  }
}