/** Chunk was on 41700 **/
/** chunk id: 719100, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk314897 = require("./314897.js"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk88751 = require("./88751.js"),
  Chunk427679 = require("./427679.js");

function o(e) {
  if (!e.isGuildStageVoice() || !s.Z.isLive(e.id)) returnfalse;
  let t = r.default.getId();
  return !!a.ZP.isModerator(t, e.id) && !!a.ZP.isSpeaker(t, e.id) && (null == i.Z.getMutableParticipants(e.id).find(n => n.user.id !== t && a.ZP.isModerator(n.user.id, e.id)) || null == i.Z.getMutableParticipants(e.id, l.pV.SPEAKER).find(n => n.user.id !== t && a.ZP.isModerator(n.user.id, e.id)))
}