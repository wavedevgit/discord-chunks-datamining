/** Chunk was on 9753 **/
/** chunk id: 138175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk354138 = require("./354138.js"),
  Chunk212534 = require("./212534.js"),
  Chunk611010 = require("./611010.js");

function o(e) {
  let {
    id: t,
    isDiscoverable: n
  } = e, [o, c, u] = (0, i.yK)([a.A], () => [a.A.getApplication(t), a.A.isInvalidApplication(t), a.A.getApplicationFetchState(t)], [t]);
  return r.useEffect(() => {
    false === n || c || u === a.e.FETCHED || u === a.e.FETCHING || (0, l.eP)(t)
  }, [t, u, n, c]), r.useMemo(() => null != o ? e.mergeFromApplicationUpdate(s.Ay.createFromServer(o)) : e, [e, o])
}