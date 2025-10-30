/** Chunk was on 1272 **/
/** chunk id: 707874, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk144725 = require("./144725.js"),
  Chunk351679 = require("./351679.jsx"),
  Chunk942187 = require("./942187.js");

function p(e) {
  let {
    item: t
  } = e, {
    channelId: n,
    messageIds: p,
    title: f
  } = i.useMemo(() => {
    switch (t.data.kind) {
      case "message":
        return {
          channelId: t.data.message.channel_id, messageIds: [t.data.message.id], title: true
        };
      case "channelSummary":
        return {
          channelId: t.data.topic.channelId, messageIds: [t.data.topic.startId], title: t.data.topic.topic
        };
      case "generatedCandidate":
        return {
          channelId: t.data.item.channel_id, messageIds: t.data.item.message_ids.slice(0, 1), title: t.data.item.primary_text
        };
      case "forumThread":
        return {
          channelId: t.data.threadChannel.id, messageIds: [t.data.message.id], title: true
        };
      default:
        return {
          channelId: true, messageIds: [], title: true
        }
    }
  }, [t]), m = (0, l.e7)([a.Z], () => null != n ? a.Z.getChannel(n) : null, [n]), h = (0, l.e7)([s.Z], () => (null == m ? true : m.guild_id) != null ? s.Z.getGuild(m.guild_id) : null, [m]), g = (0, l.Wu)([c.Z, o.Z], () => null == n ? [] : p.map(e => {
    var t;
    return null != (t = c.Z.getMessage(e)) ? t : o.Z.getMessage(n, e)
  }).filter(e => null != e), [n, p]);
  return null == m || null == h || 0 === g.length ? null : (0, r.jsxs)("div", {
    className: d.container,
    children: [null != f ? (0, r.jsx)("div", {
      className: d.titleContainer,
      children: (0, r.jsx)("div", {
        className: d.title,
        children: f
      })
    }) : null, (0, r.jsx)("div", {
      className: d.messagesContainer,
      children: g.map(e => (0, r.jsx)(u.Z, {
        channel: m,
        message: e,
        renderThreadAccessory: false,
        disableReactionCreates: false,
        disableReactionUpdates: false
      }, e.id))
    })]
  })
}