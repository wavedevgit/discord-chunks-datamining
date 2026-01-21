/** Chunk was on 82124 **/
/** chunk id: 554838, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => c,
  Z: () => u
});
var Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk901461 = require("./901461.js"),
  Chunk981631 = require("./981631.js");
let s = 7 * Chunk70956.Z.Millis.MINUTE;

function c(e, t, n) {
  return null == t || t.type === o.ys_.MESSAGE && t.content.id === t.content.channel_id || t.type !== o.ys_.MESSAGE && t.type !== o.ys_.THREAD_STARTER_MESSAGE || u(e, t.content, n)
}

function u(e, t, n) {
  return !!(n.hasFlag(o.iLy.HAS_THREAD) || n.isCommandType()) || (n.type > o.uaV.DEFAULT ? !(0, a.Z)(t) || n.type === o.uaV.REPLY : !!((0, a.Z)(t) || t.author.id !== n.author.id || t.hasFlag(o.iLy.EPHEMERAL) !== n.hasFlag(o.iLy.EPHEMERAL) || null != n.webhookId && t.author.username !== n.author.username || (null == e ? true : e.isForumPost()) && t.id === l.default.castChannelIdAsMessageId(e.id) || !(0, r.KC)(t.timestamp, n.timestamp) || !(0, r._w)(t.timestamp, n.timestamp, s) || n.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS) || t.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) || n.applicationId !== t.applicationId)
}