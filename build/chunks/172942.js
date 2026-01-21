/** Chunk was on 82124 **/
/** chunk id: 172942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk818710 = require("./818710.js"),
  Chunk442837 = require("./442837.js"),
  Chunk309761 = require("./309761.js"),
  Chunk168611 = require("./168611.js"),
  Chunk662237 = require("./662237.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let {
    hasRequestedStartTimes: t,
    startTime: n
  } = (0, l.cj)([o.Z], () => ({
    hasRequestedStartTimes: o.Z.hasRequestedStartTimes(e.guild_id),
    startTime: o.Z.getStartTime(e)
  })), u = (0, s.S)(e.guild_id, "useStartTime"), d = ((0, i.gn)() || (0, i.Dt)()) && !u, p = e.type === c.d4z.GUILD_VOICE;
  return r.useEffect(() => {
    t || !p || d || (0, a.i)(e.guild_id)
  }, [p, e.guild_id, t, d]), n
}