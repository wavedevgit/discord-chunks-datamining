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
  } = e, [l, c, u] = (0, i.Wu)([o.Z], () => [o.Z.getApplication(t), o.Z.isInvalidApplication(t), o.Z.getApplicationFetchState(t)], [t]);
  return r.useEffect(() => {
    false === n || c || u === o.M.FETCHED || u === o.M.FETCHING || (0, a.gZ)(t)
  }, [t, u, n, c]), r.useMemo(() => null != l ? e.mergeFromApplicationUpdate(s.ZP.createFromServer(l)) : e, [e, l])
}