/** Chunk was on web.js **/
/** chunk id: 40908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk304445 = require("./304445.js"),
  Chunk997383 = require("./997383.js");
let o = [],
  s = "";

function l(e) {
  let {
    visible: t,
    autocompleterResultTypes: n,
    autocompleterOptions: l,
    autocompleterBeforeCreateSearchContext: c
  } = e, [u, d] = r.useState(s), [f, _] = r.useState(o), p = r.useCallback((e, t) => {
    "" === (t = t.trim()).trim() ? _(o) : _(e)
  }, []);
  r.useEffect(() => i.Z.addRouteChangeListener(() => {
    d(s)
  }), []);
  let [h] = r.useState(() => new a.Z(p, n, true, l));
  return r.useEffect(() => {
    t ? (null == c || c(h), h.createSearchContext()) : (h.clean(), d(s))
  }, [t, h, c]), {
    queryResults: f,
    query: u,
    updateQuery: r.useCallback(e => {
      d(e), h.search(e)
    }, [h])
  }
}