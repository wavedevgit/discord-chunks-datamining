/** Chunk was on 91053 **/
/** chunk id: 909125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk619864 = require("./619864.js"),
  Chunk981631 = require("./981631.js");
let a = Chunk619864.vU + Chunk981631.vpv,
  s = Chunk619864.vU / Chunk981631.vpv;

function o(e) {
  let {
    totalResults: t,
    isSearching: n
  } = e, [o, c] = r.useState(t);
  return r.useEffect(() => {
    n || c(t)
  }, [t, n]), {
    isPaginationTotalCountLimited: o > i.vU + l.vpv,
    paginationTotalCount: Math.min(o, a),
    paginationMaxIndex: s
  }
}