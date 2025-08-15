/** Chunk was on 66866 **/
/** chunk id: 172109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => s
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk471518 = require("./471518.js"),
  Chunk370210 = require("./370210.js"),
  Chunk973616 = require("./973616.js");

function s(e) {
  let {
    id: t,
    isDiscoverable: n
  } = e, [s, c, u] = (0, i.Wu)([a.Z], () => [a.Z.getApplication(t), a.Z.isInvalidApplication(t), a.Z.getApplicationFetchState(t)], [t]);
  return r.useEffect(() => {
    false === n || c || u === a.M.FETCHED || u === a.M.FETCHING || (0, l.gZ)(t)
  }, [t, u, n, c]), r.useMemo(() => null != s ? e.mergeFromApplicationUpdate(o.ZP.createFromServer(s)) : e, [e, s])
}