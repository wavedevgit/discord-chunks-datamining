/** Chunk was on 50642 **/
/** chunk id: 554838, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => d,
  Z: () => p
});
var Chunk111810 = require("./111810.js"),
  Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk463396 = require("./463396.js"),
  Chunk901461 = require("./901461.js"),
  Chunk981631 = require("./981631.js");
let u = 7 * Chunk70956.Z.Millis.MINUTE;

function d(e, t, n) {
  return null == t || t.type === c.ys_.MESSAGE && t.content.id === t.content.channel_id || t.type !== c.ys_.MESSAGE && t.type !== c.ys_.THREAD_STARTER_MESSAGE || p(e, t.content, n)
}

function p(e, t, n) {
  if (n.hasFlag(c.iLy.HAS_THREAD) || n.isCommandType()) returntrue;
  if (n.type > c.uaV.DEFAULT) return !(0, s.Z)(t) || n.type === c.uaV.REPLY;
  if ((0, s.Z)(t) || t.author.id !== n.author.id || t.hasFlag(c.iLy.EPHEMERAL) !== n.hasFlag(c.iLy.EPHEMERAL) || null != n.webhookId && t.author.username !== n.author.username || (null == e ? true : e.isForumPost()) && t.id === a.default.castChannelIdAsMessageId(e.id) || !(0, r.KC)(t.timestamp, n.timestamp) || !(0, r._w)(t.timestamp, n.timestamp, u) || n.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) || t.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone) || (0, o.f)(n)) returntrue;
  let l = i.HZ.getCurrentConfig({
    location: "isNewMessageGroup"
  }, {
    autoTrackExposure: false
  }).canSeeConfetti;
  return !!n.hasPotions() && !!l || n.applicationId !== t.applicationId
}