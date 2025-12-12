/** Chunk was on 1272 **/
/** chunk id: 589694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk924301 = require("./924301.js"),
  Chunk703656 = require("./703656.js"),
  Chunk359110 = require("./359110.js"),
  Chunk892001 = require("./892001.js"),
  Chunk540086 = require("./540086.jsx"),
  Chunk860160 = require("./860160.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk715632 = require("./715632.js");

function g(e) {
  let {
    item: t
  } = e, n = i.useCallback(e => {
    if (null == e.target.closest('img, video, audio, [class*="imageWrapper"], [class*="embedWrapper"], [class*="attachment"], [class*="mediaPlayer"]')) switch (t.data.kind) {
      case "message":
        (0, o.jd)(t.data.message.channel_id, t.data.message.id);
        break;
      case "guildEvent": {
        let e = a.ZP.getGuildScheduledEvent(t.data.eventId);
        null != e && (0, s.uL)(p.Z5c.GUILD_EVENT_DETAILS(e.guild_id, e.id));
        break
      }
      case "forumThread":
        (0, o.jd)(t.data.threadChannel.id, t.data.message.id);
        break;
      case "generatedCandidate":
        (0, o.jd)(t.data.item.channel_id, t.data.item.message_ids[0]);
        break;
      case "contentInventory":
        (0, c.openUserProfileModal)({
          userId: t.data.content.author_id
        })
    }
  }, [t]);
  return (0, r.jsxs)(l.P3F, {
    className: f.container,
    onClick: n,
    children: [(0, r.jsx)(d.Z, {
      item: t
    }), (0, r.jsx)("div", {
      className: f.messageContentContainer,
      children: (0, r.jsx)(u.Z, {
        item: t
      })
    })]
  })
}