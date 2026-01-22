/** Chunk was on web.js **/
/** chunk id: 337692, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js"), require("./733351.js"), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk77509 = require("./77509.js"),
  Chunk128747 = require("./128747.js");
let s = [],
  o = "";

function l(e) {
  let {
    visible: t,
    autocompleterResultTypes: n,
    autocompleterOptions: l,
    autocompleterBeforeCreateSearchContext: c
  } = e, [u, d] = r.useState(o), [f, p] = r.useState(s), _ = r.useCallback((e, t) => {
    "" === (t = t.trim()).trim() ? p(s) : p(e)
  }, []);
  r.useEffect(() => i.A.addRouteChangeListener(() => {
    d(o)
  }), []);
  let [h] = r.useState(() => new a.A(_, n, true, l));
  return r.useEffect(() => {
    t ? (null == c || c(h), h.createSearchContext()) : (h.clean(), d(o))
  }, [t, h, c]), {
    queryResults: f,
    query: u,
    updateQuery: r.useCallback(e => {
      d(e), h.search(e)
    }, [h])
  }
}