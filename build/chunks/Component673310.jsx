/** Chunk was on 21738 **/
/** chunk id: 673310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk698441 = require("./698441.js"),
  Chunk976860 = require("./976860.js"),
  Chunk378570 = require("./378570.js"),
  Chunk657331 = require("./657331.js"),
  Chunk665583 = require("./665583.jsx"),
  Chunk244625 = require("./244625.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk277716 = require("./277716.js");

function h(e) {
  let {
    item: t
  } = e, n = i.useCallback(e => {
    if (null == e.target.closest('img, video, audio, [class*="imageWrapper"], [class*="embedWrapper"], [class*="attachment"], [class*="mediaPlayer"]')) switch (t.data.kind) {
      case "message":
        (0, o.ci)(t.data.message.channel_id, t.data.message.id);
        break;
      case "guildEvent": {
        let e = a.Ay.getGuildScheduledEvent(t.data.eventId);
        null != e && (0, s.pX)(p.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
        break
      }
      case "forumThread":
        (0, o.ci)(t.data.threadChannel.id, t.data.message.id);
        break;
      case "generatedCandidate":
        (0, o.ci)(t.data.item.channel_id, t.data.item.message_ids[0]);
        break;
      case "contentInventory":
        (0, c.openUserProfileModal)({
          userId: t.data.content.author_id
        })
    }
  }, [t]);
  return (0, r.jsxs)(l.DUT, {
    className: f.k,
    onClick: n,
    children: [(0, r.jsx)(d.A, {
      item: t
    }), (0, r.jsx)("div", {
      className: f.o,
      children: (0, r.jsx)(u.A, {
        item: t
      })
    })]
  })
}