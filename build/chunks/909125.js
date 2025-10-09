/** Chunk was on 91053 **/
/** chunk id: 909125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk619864 = require("./619864.js"),
  Chunk154579 = require("./154579.js"),
  Chunk981631 = require("./981631.js");
let s = Chunk619864.vU + Chunk981631.vpv,
  o = Chunk619864.vU / Chunk981631.vpv;

function c(e) {
  let {
    totalResults: t,
    isSearching: n
  } = e, [c, d] = r.useState(t);
  r.useEffect(() => {
    n || d(t)
  }, [t, n]);
  let u = c > i.vU + a.vpv,
    h = (0, l.nd)({
      location: "useSearchResultsPagination"
    });
  return {
    isPaginationTotalCountLimited: u && !h,
    paginationTotalCount: Math.min(c, s),
    paginationMaxIndex: o
  }
}