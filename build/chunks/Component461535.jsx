/** Chunk was on 56826 **/
/** chunk id: 461535, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45114 = require("./45114.js"),
  Chunk456269 = require("./456269.js"),
  Chunk344185 = require("./344185.js"),
  Chunk569471 = require("./569471.js"),
  Chunk131704 = require("./131704.js"),
  Chunk324067 = require("./324067.js"),
  Chunk306680 = require("./306680.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function j(e) {
  let n = function(e) {
    let n = (0, s.n2)(e.guild_id, e.id),
      t = (0, r.e7)([f.ZP, u.Z, o.Z, d.Z], () => {
        if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
        if (e.type !== h.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(e.id);
        {
          let n = u.Z.getCategories(e.getGuildId());
          if (null == n[e.id]) returnfalse;
          if (n[e.id].some(e => {
              let {
                channel: n
              } = e;
              return (0, c.Em)(n.type) && f.ZP.hasUnreadOrMentions(n.id)
            })) returntrue;
          let t = new Set(n[e.id].map(e => e.channel.id)),
            i = o.Z.getThreadsForGuild(e.guild_id);
          for (let e in i)
            if (t.has(e)) {
              for (let n in i[e])
                if (d.Z.hasJoined(n) && !d.Z.isMuted(n) && f.ZP.hasUnreadOrMentions(n)) returntrue
            } returnfalse
        }
      }, [e]);
    return e.isForumLikeChannel() ? n > 0 : t
  }(e);
  return (0, i.jsx)(l.sNh, {
    id: "mark-channel-read",
    label: g.intl.string(g.t.e6RscS),
    action: function() {
      (0, a.U6)(e, {
        section: h.jXE.CHANNEL_CONTEXT_MENU,
        object: h.qAy.MARK_CHANNEL_AS_READ_BUTTON,
        objectType: h.AnalyticsObjectTypes.ACK_MANUAL
      })
    },
    disabled: !n
  })
}