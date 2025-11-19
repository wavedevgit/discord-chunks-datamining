/** Chunk was on 34740 **/
/** chunk id: 554838, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => u,
  Z: () => d
});
var Chunk111810 = require("./111810.js"),
  Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk901461 = require("./901461.js"),
  Chunk981631 = require("./981631.js");
let c = 7 * Chunk70956.Z.Millis.MINUTE;

function u(e, t, n) {
  return null == t || t.type === s.ys_.MESSAGE && t.content.id === t.content.channel_id || t.type !== s.ys_.MESSAGE && t.type !== s.ys_.THREAD_STARTER_MESSAGE || d(e, t.content, n)
}

function d(e, t, n) {
  if (n.hasFlag(s.iLy.HAS_THREAD) || n.isCommandType()) returntrue;
  if (n.type > s.uaV.DEFAULT) return !(0, o.Z)(t) || n.type === s.uaV.REPLY;
  if ((0, o.Z)(t) || t.author.id !== n.author.id || t.hasFlag(s.iLy.EPHEMERAL) !== n.hasFlag(s.iLy.EPHEMERAL) || null != n.webhookId && t.author.username !== n.author.username || (null == e ? true : e.isForumPost()) && t.id === a.default.castChannelIdAsMessageId(e.id) || !(0, r.KC)(t.timestamp, n.timestamp) || !(0, r._w)(t.timestamp, n.timestamp, c) || n.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS) || t.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) returntrue;
  let l = i.HZ.getCurrentConfig({
    location: "isNewMessageGroup"
  }, {
    autoTrackExposure: false
  }).canSeeConfetti;
  return !!n.hasPotions() && !!l || n.applicationId !== t.applicationId
}