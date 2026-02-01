/** Chunk was on 21738 **/
/** chunk id: 418616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk773669 = require("./773669.js"),
  Chunk417426 = require("./417426.js"),
  Chunk747550 = require("./747550.js"),
  Chunk282026 = require("./282026.js"),
  Chunk965660 = require("./965660.js"),
  Chunk324580 = require("./324580.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk678042 = require("./678042.js");

function m(e) {
  let {
    loadId: t
  } = e, n = (0, l.bG)([s.default], () => (0, d.Kv)([s.default])), m = u.A.useField("languageCode"), f = i.useCallback(e => {
    u.A.setState({
      languageCode: e
    });
    let n = u.A.getField("fetchedQuery");
    o.A.clearSearchResults({
      ignoreQueries: [n]
    }), c.A.loadCategoryResults({
      loadId: t,
      categoryId: u.A.getField("categoryId"),
      query: n,
      languageCode: e
    })
  }, [t]), A = i.useMemo(() => (0, p.tO)().map(e => ({
    id: e.code,
    value: e.code,
    label: e.name
  })), []);
  return (0, r.jsx)("div", {
    className: g.k,
    children: (0, r.jsx)(a.ZiE, {
      selectionMode: "single",
      label: h.intl.string(h.t.Ng5cTK),
      hideLabel: true,
      value: null != m ? m : n,
      options: A,
      onSelectionChange: f
    })
  })
}