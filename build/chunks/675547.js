/** Chunk was on 81985 **/
/** chunk id: 675547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk413523 = require("./413523.js"),
  Chunk358221 = require("./358221.js"),
  Chunk594190 = require("./594190.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699955 = require("./699955.js"),
  Chunk582113 = require("./582113.js"),
  Chunk354459 = require("./354459.js");

function d(e) {
  let {
    location: t,
    channelId: n
  } = e, d = (0, s.cZ)({
    location: t
  }), [p] = (0, r.e7)([l.Z], () => null != n ? [l.Z.getParticipants(n), l.Z.getParticipantsVersion(n)] : [
    [], 0
  ], [n], i.Lc), f = (0, r.e7)([o.Z], () => {
    for (let e of p)
      if ((0, u.Io)(e) || (0, u._5)(e)) {
        for (let t of o.Z.getActivities(e.user.id))
          if (null != t.application_id && c.RI.has(t.application_id)) returntrue
      } returnfalse
  }, [p]), h = (0, r.e7)([a.ZP], () => a.ZP.getRunningGames().some(e => null != e.id && c.RI.has(e.id) && a.ZP.isDetectionEnabled(e)));
  return d && (h || f)
}