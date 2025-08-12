/** Chunk was on 21087 **/
/** chunk id: 909125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => c
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk619864 = require("./619864.js"),
  Chunk672041 = require("./672041.js"),
  Chunk981631 = require("./981631.js");
let s = Chunk619864.vU + Chunk981631.vpv,
  o = Chunk619864.vU / Chunk981631.vpv;

function c(e) {
  let {
    totalResults: t,
    isSearching: n
  } = e, [c, u] = r.useState(t);
  r.useEffect(() => {
    n || u(t)
  }, [t, n]);
  let d = c > i.vU + a.vpv,
    h = (0, l.t)({
      location: "useSearchResultsPagination"
    });
  return {
    isPaginationTotalCountLimited: d && h,
    paginationTotalCount: Math.min(c, s),
    paginationMaxIndex: o
  }
}