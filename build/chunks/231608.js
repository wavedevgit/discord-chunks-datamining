/** Chunk was on 21738 **/
/** chunk id: 231608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => l
});
var Chunk855511 = require("./855511.js"),
  Chunk682261 = require("./682261.js");

function l(e) {
  return {
    af_voice_chat: e.voiceChannels.length > 0,
    af_people_count: e.partiedMembers.length,
    af_rich_presence: e.currentActivities.some(e => {
      let {
        activity: t
      } = e;
      return (0, i.A)(t)
    }),
    game_platform: e.currentActivities.length > 0 ? (0, r.A)(e.currentActivities[0].activity) : null
  }
}