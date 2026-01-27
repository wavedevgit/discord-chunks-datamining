/** Chunk was on 92917 **/
/** chunk id: 483660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk956793 = require("./956793.js"),
  Chunk265422 = require("./265422.js"),
  Chunk986268 = require("./986268.jsx"),
  Chunk529200 = require("./529200.jsx"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk563111 = require("./563111.js");

function h(e) {
  let {
    guild: t,
    channel: n,
    message: h
  } = e, _ = d.A.getGuildId(), b = u.A.getChannelId(_), A = i.useCallback(() => {
    var e;
    p.default.track(m.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
      author_id: null == (e = h.author) ? true : e.id,
      link_guild_id: t.id,
      link_channel_id: n.id,
      link_channel_type: n.type,
      guild_id: _,
      channel_id: b
    }), (0, s.i)(t.id, n.id), a.default.selectVoiceChannel(n.id)
  }, [h, t, n, _, b]), y = (0, r.jsx)(c.A.Channel, {
    channel: n
  });
  return (0, r.jsx)(c.A, {
    children: (0, r.jsxs)(c.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: g.iH,
        children: [(0, r.jsx)(c.A.Icon, {
          guild: t
        }), (0, r.jsx)(c.A.Info, {
          title: y,
          onClick: A,
          children: (0, r.jsxs)("span", {
            className: g.FA,
            children: [f.intl.format(f.t["2wimj5"], {
              guildName: t.name
            }), (0, r.jsx)("span", {
              className: g.E3,
              children: (0, r.jsx)(o.A, {
                guild: t,
                isBannerVisible: false
              })
            })]
          })
        })]
      }), (0, r.jsx)("div", {
        className: g.UD,
        children: (0, r.jsx)(l.$nd, {
          fullWidth: true,
          onClick: A,
          variant: "active",
          text: n.isGuildStageVoice() ? f.intl.string(f.t["7vb2cc"]) : f.intl.string(f.t["96ANUN"])
        })
      })]
    })
  })
}