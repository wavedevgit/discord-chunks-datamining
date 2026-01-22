/** Chunk was on 97492 **/
/** chunk id: 475889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk574381 = require("./574381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk858466 = require("./858466.js"),
  Chunk725613 = require("./725613.js"),
  Chunk661470 = require("./661470.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let {
    hasRequestedStartTimes: t,
    startTime: n
  } = (0, i.cf)([s.A], () => ({
    hasRequestedStartTimes: s.A.hasRequestedStartTimes(e.guild_id),
    startTime: s.A.getStartTime(e)
  })), u = (0, o.a)(e.guild_id, "useStartTime"), d = ((0, l.un)() || (0, l.m0)()) && !u, f = e.type === c.rbe.GUILD_VOICE;
  return r.useEffect(() => {
    t || !f || d || (0, a.U)(e.guild_id)
  }, [f, e.guild_id, t, d]), n
}