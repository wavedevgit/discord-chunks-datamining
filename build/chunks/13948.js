/** Chunk was on 78888 **/
/** chunk id: 13948, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk508573 = require("./508573.js"),
  r = require.n(Chunk508573),
  Chunk311907 = require("./311907.js"),
  Chunk686956 = require("./686956.js"),
  Chunk155718 = require("./155718.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js");

function h(e, t) {
  let n = (0, s.yK)([c.Ay], () => c.Ay.getMemberIds(e), [e]),
    [i, h] = l.useMemo(() => r()(null == t ? [] : Object.values(t).filter(e => e.type === o.r2.MEMBER).map(e => e.id), e => n.includes(e)), [t, n]);
  return l.useEffect(() => {
    h.length > 0 && null != e && a.A.requestMembersById(e, h, false)
  }, [h, e]), (0, s.yK)([u.default], () => i.map(u.default.getUser).filter(d.Vq), [i])
}