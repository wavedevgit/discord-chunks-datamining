/** Chunk was on 86915 **/
/** chunk id: 188857, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk790333 = require("./790333.js"),
  r = require.n(Chunk790333),
  Chunk442837 = require("./442837.js"),
  Chunk749210 = require("./749210.js"),
  Chunk911969 = require("./911969.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js");

function h(e, t) {
  let n = (0, a.Wu)([c.ZP], () => c.ZP.getMemberIds(e), [e]),
    [l, h] = i.useMemo(() => r()(null == t ? [] : Object.values(t).filter(e => e.type === o.BN.MEMBER).map(e => e.id), e => n.includes(e)), [t, n]);
  return i.useEffect(() => {
    h.length > 0 && null != e && s.Z.requestMembersById(e, h, false)
  }, [h, e]), (0, a.Wu)([d.default], () => l.map(d.default.getUser).filter(u.lm), [l])
}