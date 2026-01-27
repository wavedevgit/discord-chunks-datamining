/** Chunk was on 77870 **/
/** chunk id: 857069, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u,
  l: () => c
});
var Chunk405269 = require("./405269.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk143413 = require("./143413.js"),
  Chunk652215 = require("./652215.js");
let o = 7 * Chunk927813.A.Millis.MINUTE;

function c(e, t, n) {
  return null == t || t.type === a.TZK.MESSAGE && t.content.id === t.content.channel_id || t.type !== a.TZK.MESSAGE && t.type !== a.TZK.THREAD_STARTER_MESSAGE || u(e, t.content, n)
}

function u(e, t, n) {
  return !!(n.hasFlag(a.pr7.HAS_THREAD) || n.isCommandType()) || (n.type > a.lAJ.DEFAULT ? !(0, s.A)(t) || n.type === a.lAJ.REPLY : !!((0, s.A)(t) || t.author.id !== n.author.id || t.hasFlag(a.pr7.EPHEMERAL) !== n.hasFlag(a.pr7.EPHEMERAL) || null != n.webhookId && t.author.username !== n.author.username || (null == e ? true : e.isForumPost()) && t.id === i.default.castChannelIdAsMessageId(e.id) || !(0, r.ro)(t.timestamp, n.timestamp) || !(0, r.v0)(t.timestamp, n.timestamp, o) || n.hasFlag(a.pr7.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(a.pr7.SUPPRESS_NOTIFICATIONS) || t.hasFlag(a.pr7.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(a.pr7.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) || n.applicationId !== t.applicationId)
}