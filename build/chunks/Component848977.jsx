/** Chunk was on 93169 **/
/** chunk id: 848977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk334738 = require("./334738.js"),
  Chunk435470 = require("./435470.js"),
  Chunk970278 = require("./970278.js"),
  Chunk152007 = require("./152007.js"),
  Chunk95701 = require("./95701.js"),
  Chunk769765 = require("./769765.js"),
  Chunk222823 = require("./222823.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let t, n, b = (t = (0, s.ed)(e.guild_id, e.id), n = (0, r.bG)([A.Ay, c.A, o.A, d.A], () => {
    if (e.isForumPost()) return A.Ay.isForumPostUnread(e.id);
    if (e.type !== f.rbe.GUILD_CATEGORY) return A.Ay.hasUnreadOrMentions(e.id);
    {
      let t = c.A.getCategories(e.getGuildId());
      if (null == t[e.id]) returnfalse;
      if (t[e.id].some(e => {
          let {
            channel: t
          } = e;
          return (0, u.Z_)(t.type) && A.Ay.hasUnreadOrMentions(t.id)
        })) returntrue;
      let n = new Set(t[e.id].map(e => e.channel.id)),
        i = o.A.getThreadsForGuild(e.guild_id);
      for (let e in i)
        if (n.has(e)) {
          for (let t in i[e])
            if (d.A.hasJoined(t) && !d.A.isMuted(t) && A.Ay.hasUnreadOrMentions(t)) returntrue
        } returnfalse
    }
  }, [e]), e.isForumLikeChannel() ? t > 0 : n);
  return (0, i.jsx)(l.Drp, {
    id: "mark-channel-read",
    label: g.intl.string(g.t.e6RscS),
    action: function() {
      (0, a.hS)(e, {
        section: f.JJy.CHANNEL_CONTEXT_MENU,
        object: f.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
        objectType: f.AnalyticsObjectTypes.ACK_MANUAL
      })
    },
    disabled: !b
  })
}