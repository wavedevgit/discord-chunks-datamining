/** Chunk was on 67000 **/
/** chunk id: 172942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk309761 = require("./309761.js"),
  Chunk168611 = require("./168611.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  let {
    hasRequestedStartTimes: t,
    startTime: n
  } = (0, r.cj)([l.Z], () => ({
    hasRequestedStartTimes: l.Z.hasRequestedStartTimes(e.guild_id),
    startTime: l.Z.getStartTime(e)
  })), o = e.type === a.d4z.GUILD_VOICE;
  return !t && o && (0, i.i)(e.guild_id), n
}