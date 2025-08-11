/** Chunk was on 55183 **/
/** chunk id: 566111, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk25251 = require("./25251.js"),
  Chunk238359 = require("./238359.js"),
  Chunk223143 = require("./223143.js");

function s(e) {
  var t;
  let {
    isFetching: r,
    fetchCategoriesError: s,
    fetchPurchasesError: c,
    categories: a,
    purchases: u
  } = (0, o.ZP)({
    location: e
  });
  (0, l.D)();
  let [d, f, p] = (0, n.Wu)([i.Z], () => [i.Z.isFetchingAll, i.Z.fetchError, i.Z.profileEffects]);
  return {
    isFetching: r || d,
    combinedError: null != (t = null != s ? s : c) ? t : f,
    profileEffects: p,
    categories: a,
    purchases: u
  }
}