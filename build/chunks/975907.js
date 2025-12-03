/** Chunk was on 69844 **/
/** chunk id: 975907, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk31569 = require("./31569.js"),
  Chunk493646 = require("./493646.js"),
  Chunk881294 = require("./881294.js"),
  Chunk258971 = require("./258971.js"),
  Chunk133743 = require("./133743.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let {
    initialQuery: t = ""
  } = e, n = i.Z.useField("query");
  r.useEffect(() => i.Z.setState({
    query: t
  }), [t]);
  let d = r.useCallback(e => {
      i.Z.setState({
        query: e
      })
    }, []),
    u = r.useCallback(() => {
      i.Z.setState({
        query: ""
      })
    }, []),
    p = r.useCallback(() => {
      let e = (0, a.K)();
      (0, l.zZ)(c.rMx.APP_DIRECTORY_SEARCH_STARTED, {
        search_term: n,
        category: e.name,
        current_page: s.m_.HOME,
        category_id: e.id
      }), (0, o.pR)({
        query: n
      })
    }, [n]);
  return {
    searchQuery: n,
    onSearchTextChange: d,
    onClearSearch: u,
    onSearchSubmit: p
  }
}