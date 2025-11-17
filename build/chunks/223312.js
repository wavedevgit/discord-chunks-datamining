/** Chunk was on 9924 **/
/** chunk id: 223312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => s
}), require("./388685.js"), require("./583741.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk826581 = require("./826581.js"),
  Chunk246364 = require("./246364.js");

function s(e) {
  let {
    guildId: t,
    applicationStatus: n,
    sortOrder: s
  } = e, o = (0, r.e7)([i.Z], () => i.Z.getRequests(t, n), [n, t]);
  return {
    guildJoinRequests: l.useMemo(() => s === a.Nw.TIMESTAMP_DESC ? [...o].reverse() : o, [s, o])
  }
}