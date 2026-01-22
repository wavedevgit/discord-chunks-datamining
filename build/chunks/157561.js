/** Chunk was on 28636 **/
/** chunk id: 157561, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk416730 = require("./416730.js"),
  Chunk620140 = require("./620140.js"),
  Chunk412461 = require("./412461.js"),
  Chunk310419 = require("./310419.js"),
  Chunk656106 = require("./656106.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let {
    initialQuery: t = ""
  } = e, n = a.A.useField("query");
  l.useEffect(() => a.A.setState({
    query: t
  }), [t]);
  let d = l.useCallback(e => {
      a.A.setState({
        query: e
      })
    }, []),
    u = l.useCallback(() => {
      a.A.setState({
        query: ""
      })
    }, []),
    p = l.useCallback(() => {
      let e = (0, r.A)();
      (0, i.TR)(o.HAw.APP_DIRECTORY_SEARCH_STARTED, {
        search_term: n,
        category: e.name,
        current_page: s.ev.HOME,
        category_id: e.id
      }), (0, c.JX)({
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