/** Chunk was on 1272 **/
/** chunk id: 205129, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => l
});
var Chunk603113 = require("./603113.js"),
  Chunk122810 = require("./122810.js");

function l(e) {
  return {
    af_voice_chat: e.voiceChannels.length > 0,
    af_people_count: e.partiedMembers.length,
    af_rich_presence: e.currentActivities.some(e => {
      let {
        activity: t
      } = e;
      return (0, i.Z)(t)
    }),
    game_platform: e.currentActivities.length > 0 ? (0, r.Z)(e.currentActivities[0].activity) : null
  }
}