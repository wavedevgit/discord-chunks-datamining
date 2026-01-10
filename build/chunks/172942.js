/** Chunk was on 81985 **/
/** chunk id: 172942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk309761 = require("./309761.js"),
  Chunk168611 = require("./168611.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let {
    hasRequestedStartTimes: t,
    startTime: n
  } = (0, i.cj)([a.Z], () => ({
    hasRequestedStartTimes: a.Z.hasRequestedStartTimes(e.guild_id),
    startTime: a.Z.getStartTime(e)
  })), s = e.type === o.d4z.GUILD_VOICE;
  return r.useEffect(() => {
    !t && s && (0, l.i)(e.guild_id)
  }, [s, e.guild_id, t]), n
}