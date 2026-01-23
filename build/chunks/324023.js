/** Chunk was on 99583 **/
/** chunk id: 324023, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  K: () => a
}), require("./896048.js"), require("./264879.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk844944 = require("./844944.js"),
  Chunk513461 = require("./513461.js");

function a(e) {
  let {
    guildId: t,
    applicationStatus: l,
    sortOrder: a
  } = e, o = (0, r.bG)([i.A], () => i.A.getRequests(t, l), [l, t]);
  return {
    guildJoinRequests: n.useMemo(() => a === s._e.TIMESTAMP_DESC ? [...o].reverse() : o, [a, o])
  }
}