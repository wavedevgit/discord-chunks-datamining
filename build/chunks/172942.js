/** Chunk was on 83546 **/
/** chunk id: 172942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk309761 = require("./309761.js"),
  Chunk973285 = require("./973285.js"),
  Chunk168611 = require("./168611.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let {
    hasRequestedStartTimes: t,
    startTime: n
  } = (0, r.cj)([o.Z], () => ({
    hasRequestedStartTimes: o.Z.hasRequestedStartTimes(e.guild_id),
    startTime: o.Z.getStartTime(e)
  })), {
    enabled: s
  } = l.W.useExperiment({
    guildId: e.guild_id,
    location: "useStartTime"
  });
  if (!s) return;
  let c = e.type === a.d4z.GUILD_VOICE;
  return !t && c && (0, i.i)(e.guild_id), n
}