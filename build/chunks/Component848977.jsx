/** Chunk was on 86901 **/
/** chunk id: 848977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let t, n, p = (t = (0, o.ed)(e.guild_id, e.id), n = (0, i.bG)([f.Ay, d.A, s.A, c.A], () => {
    if (e.isForumPost()) return f.Ay.isForumPostUnread(e.id);
    if (e.type !== A.rbe.GUILD_CATEGORY) return f.Ay.hasUnreadOrMentions(e.id);
    {
      let t = d.A.getCategories(e.getGuildId());
      if (null == t[e.id]) returnfalse;
      if (t[e.id].some(e => {
          let {
            channel: t
          } = e;
          return (0, u.Z_)(t.type) && f.Ay.hasUnreadOrMentions(t.id)
        })) returntrue;
      let n = new Set(t[e.id].map(e => e.channel.id)),
        r = s.A.getThreadsForGuild(e.guild_id);
      for (let e in r)
        if (n.has(e)) {
          for (let t in r[e])
            if (c.A.hasJoined(t) && !c.A.isMuted(t) && f.Ay.hasUnreadOrMentions(t)) returntrue
        } returnfalse
    }
  }, [e]), e.isForumLikeChannel() ? t > 0 : n);
  return (0, r.jsx)(l.Drp, {
    id: "mark-channel-read",
    label: b.intl.string(b.t.e6RscS),
    action: function() {
      (0, a.hS)(e, {
        section: A.JJy.CHANNEL_CONTEXT_MENU,
        object: A.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
        objectType: A.AnalyticsObjectTypes.ACK_MANUAL
      })
    },
    disabled: !p
  })
}