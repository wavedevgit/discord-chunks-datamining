/** Chunk was on 5606 **/
/** chunk id: 337692, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js"), require("./733351.js"), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk77509 = require("./77509.js"),
  Chunk128747 = require("./128747.js");
let s = [];

function a(e) {
  let {
    visible: t,
    autocompleterResultTypes: n,
    autocompleterOptions: a,
    autocompleterBeforeCreateSearchContext: o
  } = e, [c, d] = r.useState(""), [u, p] = r.useState(s), _ = r.useCallback((e, t) => {
    "" === (t = t.trim()).trim() ? p(s) : p(e)
  }, []);
  r.useEffect(() => i.A.addRouteChangeListener(() => {
    d("")
  }), []);
  let [m] = r.useState(() => new l.A(_, n, true, a));
  return r.useEffect(() => {
    t ? (null == o || o(m), m.createSearchContext()) : (m.clean(), d(""))
  }, [t, m, o]), {
    queryResults: u,
    query: c,
    updateQuery: r.useCallback(e => {
      d(e), m.search(e)
    }, [m])
  }
}