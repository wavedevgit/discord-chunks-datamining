/** Chunk was on 67564 **/
/** chunk id: 106044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk961350 = require("./961350.js"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js"),
  Chunk312006 = require("./312006.js"),
  Chunk446600 = require("./446600.js");

function o(e) {
  if (!e.isGuildStageVoice() || !a.A.isLive(e.id)) returnfalse;
  let t = r.default.getId();
  return !!s.Ay.isModerator(t, e.id) && !!s.Ay.isSpeaker(t, e.id) && (null == l.A.getMutableParticipants(e.id).find(n => n.user.id !== t && s.Ay.isModerator(n.user.id, e.id)) || null == l.A.getMutableParticipants(e.id, i.ip.SPEAKER).find(n => n.user.id !== t && s.Ay.isModerator(n.user.id, e.id)))
}