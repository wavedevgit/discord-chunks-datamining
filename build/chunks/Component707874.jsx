/** Chunk was on 1272 **/
/** chunk id: 707874, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk144725 = require("./144725.js"),
  Chunk351679 = require("./351679.jsx"),
  Chunk617821 = require("./617821.js");

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
  }, [t]), g = (0, l.e7)([a.Z], () => null != n ? a.Z.getChannel(n) : null, [n]), h = (0, l.e7)([o.Z], () => (null == g ? true : g.guild_id) != null ? o.Z.getGuild(g.guild_id) : null, [g]), m = (0, l.Wu)([c.Z, s.Z], () => null == n ? [] : p.map(e => {
    var t;
    return null != (t = c.Z.getMessage(e)) ? t : s.Z.getMessage(n, e)
  }).filter(e => null != e), [n, p]);
  return null == g || null == h || 0 === m.length ? null : (0, r.jsxs)("div", {
    className: d.container,
    children: [null != f ? (0, r.jsx)("div", {
      className: d.titleContainer,
      children: (0, r.jsx)("div", {
        className: d.title,
        children: f
      })
    }) : null, (0, r.jsx)("div", {
      className: d.messagesContainer,
      children: m.map(e => (0, r.jsx)(u.Z, {
        channel: g,
        message: e,
        renderThreadAccessory: false,
        disableReactionCreates: false,
        disableReactionUpdates: false
      }, e.id))
    })]
  })
}