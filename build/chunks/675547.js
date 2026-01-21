/** Chunk was on 82124 **/
/** chunk id: 675547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk413523 = require("./413523.js"),
  Chunk358221 = require("./358221.js"),
  Chunk699955 = require("./699955.js"),
  Chunk812797 = require("./812797.js"),
  Chunk582113 = require("./582113.js"),
  Chunk354459 = require("./354459.js");

function f(e) {
  let {
    location: t,
    channelId: n
  } = e, i = (0, c.cZ)({
    location: t
  }), [f] = (0, a.e7)([s.Z], () => null != n ? [s.Z.getParticipants(n), s.Z.getParticipantsVersion(n)] : [
    [], 0
  ], [n], o.Lc), h = r.useMemo(() => l().uniq(f.filter(e => (0, p.Io)(e) || (0, p._5)(e)).map(e => e.user.id)), [f]), g = (0, u.VO)({
    gameIds: d.RI,
    userIds: h
  }), m = (0, u.fR)({
    gameIds: d.RI
  });
  return i && (m || g)
}