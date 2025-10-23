/** Chunk was on 86715 **/
/** chunk id: 461535, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(n) {
  let e = function(n) {
    let e = (0, o.n2)(n.guild_id, n.id),
      t = (0, i.e7)([f.ZP, d.Z, a.Z, s.Z], () => {
        if (n.isForumPost()) return f.ZP.isForumPostUnread(n.id);
        if (n.type !== b.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(n.id);
        {
          let e = d.Z.getCategories(n.getGuildId());
          if (null == e[n.id]) returnfalse;
          if (e[n.id].some(n => {
              let {
                channel: e
              } = n;
              return (0, u.Em)(e.type) && f.ZP.hasUnreadOrMentions(e.id)
            })) returntrue;
          let t = new Set(e[n.id].map(n => n.channel.id)),
            r = a.Z.getThreadsForGuild(n.guild_id);
          for (let n in r)
            if (t.has(n)) {
              for (let e in r[n])
                if (s.Z.hasJoined(e) && !s.Z.isMuted(e) && f.ZP.hasUnreadOrMentions(e)) returntrue
            } returnfalse
        }
      }, [n]);
    return n.isForumLikeChannel() ? e > 0 : t
  }(n);
  return (0, r.jsx)(l.sNh, {
    id: "mark-channel-read",
    label: h.intl.string(h.t.e6RscS),
    action: function() {
      (0, c.U6)(n, {
        section: b.jXE.CHANNEL_CONTEXT_MENU,
        object: b.qAy.MARK_CHANNEL_AS_READ_BUTTON,
        objectType: b.AnalyticsObjectTypes.ACK_MANUAL
      })
    },
    disabled: !e
  })
}