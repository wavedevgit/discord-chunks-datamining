/** Chunk was on web.js **/
/** chunk id: 40908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk304445 = require("./304445.js"),
  Chunk997383 = require("./997383.js");
let a = [],
  s = "";

function l(e) {
  let {
    visible: t,
    autocompleterResultTypes: n,
    autocompleterOptions: l,
    autocompleterBeforeCreateSearchContext: c
  } = e, [u, d] = r.useState(s), [f, p] = r.useState(a), _ = r.useCallback((e, t) => {
    "" === (t = t.trim()).trim() ? p(a) : p(e)
  }, []);
  r.useEffect(() => i.Z.addRouteChangeListener(() => {
    d(s)
  }), []);
  let [m] = r.useState(() => new o.Z(_, n, true, l));
  return r.useEffect(() => {
    t ? (null == c || c(m), m.createSearchContext()) : (m.clean(), d(s))
  }, [t, m, c]), {
    queryResults: f,
    query: u,
    updateQuery: r.useCallback(e => {
      d(e), m.search(e)
    }, [m])
  }
}