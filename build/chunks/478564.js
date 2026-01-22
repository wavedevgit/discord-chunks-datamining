/** Chunk was on 97492 **/
/** chunk id: 478564, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk568598 = require("./568598.js"),
  Chunk313961 = require("./313961.js"),
  Chunk916023 = require("./916023.js"),
  Chunk501838 = require("./501838.js"),
  Chunk188275 = require("./188275.js"),
  Chunk806931 = require("./806931.js");

function p(e) {
  let {
    location: t,
    channelId: n
  } = e, l = (0, c.kt)({
    location: t
  }), [p] = (0, a.bG)([o.A], () => null != n ? [o.A.getParticipants(n), o.A.getParticipantsVersion(n)] : [
    [], 0
  ], [n], s.hS), h = r.useMemo(() => i().uniq(p.filter(e => (0, f.Xw)(e) || (0, f.Ay)(e)).map(e => e.user.id)), [p]), b = (0, u.gT)({
    gameIds: d.sQ,
    userIds: h
  }), g = (0, u.hJ)({
    gameIds: d.sQ
  });
  return l && (g || b)
}