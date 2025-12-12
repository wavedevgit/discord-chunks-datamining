/** Chunk was on web.js **/
/** chunk id: 172109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk471518 = require("./471518.js"),
  Chunk370210 = require("./370210.js"),
  Chunk973616 = require("./973616.js");

function l(e) {
  let {
    id: t,
    isDiscoverable: n
  } = e, [l, c, u] = (0, i.Wu)([a.Z], () => [a.Z.getApplication(t), a.Z.isInvalidApplication(t), a.Z.getApplicationFetchState(t)], [t]);
  return r.useEffect(() => {
    false === n || c || u === a.M.FETCHED || u === a.M.FETCHING || (0, o.gZ)(t)
  }, [t, u, n, c]), r.useMemo(() => null != l ? e.mergeFromApplicationUpdate(s.ZP.createFromServer(l)) : e, [e, l])
}