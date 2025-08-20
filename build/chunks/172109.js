/** Chunk was on 26434 **/
/** chunk id: 172109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk471518 = require("./471518.js"),
  Chunk370210 = require("./370210.js"),
  Chunk973616 = require("./973616.js");

function s(e) {
  let {
    id: t,
    isDiscoverable: n
  } = e, [s, c, u] = (0, i.Wu)([o.Z], () => [o.Z.getApplication(t), o.Z.isInvalidApplication(t), o.Z.getApplicationFetchState(t)], [t]);
  return r.useEffect(() => {
    false === n || c || u === o.M.FETCHED || u === o.M.FETCHING || (0, l.gZ)(t)
  }, [t, u, n, c]), r.useMemo(() => null != s ? e.mergeFromApplicationUpdate(a.ZP.createFromServer(s)) : e, [e, s])
}