/** Chunk was on web.js **/
/** chunk id: 483660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
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

function m(e) {
  let {
    guild: t,
    channel: n,
    message: m
  } = e, g = d.A.getGuildId(), E = u.A.getChannelId(g), b = i.useCallback(() => {
    var e;
    f.default.track(p.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
      author_id: null == (e = m.author) ? true : e.id,
      link_guild_id: t.id,
      link_channel_id: n.id,
      link_channel_type: n.type,
      guild_id: g,
      channel_id: E
    }), (0, o.i)(t.id, n.id), s.default.selectVoiceChannel(n.id)
  }, [m, t, n, g, E]), y = (0, r.jsx)(c.A.Channel, {
    channel: n
  });
  return (0, r.jsx)(c.A, {
    children: (0, r.jsxs)(c.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: h.iH,
        children: [(0, r.jsx)(c.A.Icon, {
          guild: t
        }), (0, r.jsx)(c.A.Info, {
          title: y,
          onClick: b,
          children: (0, r.jsxs)("span", {
            className: h.FA,
            children: [_.intl.format(_.t["2wimj5"], {
              guildName: t.name
            }), (0, r.jsx)("span", {
              className: h.E3,
              children: (0, r.jsx)(l.A, {
                guild: t,
                isBannerVisible: false
              })
            })]
          })
        })]
      }), (0, r.jsx)("div", {
        className: h.UD,
        children: (0, r.jsx)(a.$nd, {
          fullWidth: true,
          onClick: b,
          variant: "active",
          text: n.isGuildStageVoice() ? _.intl.string(_.t["7vb2cc"]) : _.intl.string(_.t["96ANUN"])
        })
      })]
    })
  })
}