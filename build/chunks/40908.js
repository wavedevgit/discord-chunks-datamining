/** Chunk was on 66181 **/
/** chunk id: 40908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk647438 = require("./647438.js"),
  Chunk304445 = require("./304445.js"),
  Chunk997383 = require("./997383.js");
let a = [];

function l(e) {
  let {
    visible: t,
    autocompleterResultTypes: n,
    autocompleterOptions: l,
    autocompleterBeforeCreateSearchContext: o
  } = e, [c, d] = i.useState(""), [u, m] = i.useState(a), p = i.useCallback((e, t) => {
    "" === (t = t.trim()).trim() ? m(a) : m(e)
  }, []);
  i.useEffect(() => r.Z.addRouteChangeListener(() => {
    d("")
  }), []);
  let [g] = i.useState(() => new s.Z(p, n, true, l));
  return i.useEffect(() => {
    t ? (null == o || o(g), g.createSearchContext()) : (g.clean(), d(""))
  }, [t, g, o]), {
    queryResults: u,
    query: c,
    updateQuery: i.useCallback(e => {
      d(e), g.search(e)
    }, [g])
  }
}