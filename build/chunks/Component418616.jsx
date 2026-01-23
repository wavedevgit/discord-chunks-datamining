/** Chunk was on 21738 **/
/** chunk id: 418616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk191711 = require("./191711.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk417426 = require("./417426.js"),
  Chunk747550 = require("./747550.js"),
  Chunk282026 = require("./282026.js"),
  Chunk965660 = require("./965660.js"),
  Chunk324580 = require("./324580.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let {
    loadId: t
  } = e, n = (0, l.bG)([s.default], () => (0, d.Kv)([s.default])), g = u.A.useField("languageCode"), f = null != g ? g : n, m = i.useCallback(e => {
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
    label: e.name
  })), []), _ = i.useMemo(() => {
    var e;
    let t = (0, p.tO)().find(e => e.code === f);
    return null != (e = null == t ? true : t.name) ? e : h.intl.string(h.t.LQLMGP)
  }, [f]);
  return (0, r.jsx)(a.Ay, {
    items: A,
    title: _,
    onSelect: m,
    selected: f,
    "aria-label": h.intl.string(h.t.Ng5cTK)
  })
}