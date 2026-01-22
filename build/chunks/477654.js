/** Chunk was on 97492 **/
/** chunk id: 477654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
require("./309613.js");
var Chunk652215 = require("./652215.js");
let i = 9975 + Chunk652215.T_y,
  a = 9975 / Chunk652215.T_y;

function s(e) {
  let {
    totalResults: t,
    isSearching: n
  } = e, [s, o] = r.useState(t);
  return r.useEffect(() => {
    n || o(t)
  }, [t, n]), {
    isPaginationTotalCountLimited: s > 9975 + l.T_y,
    paginationTotalCount: Math.min(s, i),
    paginationMaxIndex: a
  }
}