/** Chunk was on web.js **/
/** chunk id: 138175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk354138 = require("./354138.js"),
  Chunk212534 = require("./212534.js"),
  Chunk611010 = require("./611010.js");

function l(e) {
  let {
    id: t,
    isDiscoverable: n
  } = e, [l, c, u] = (0, i.yK)([s.A], () => [s.A.getApplication(t), s.A.isInvalidApplication(t), s.A.getApplicationFetchState(t)], [t]);
  return r.useEffect(() => {
    false === n || c || u === s.e.FETCHED || u === s.e.FETCHING || (0, a.eP)(t)
  }, [t, u, n, c]), r.useMemo(() => null != l ? e.mergeFromApplicationUpdate(o.Ay.createFromServer(l)) : e, [e, l])
}