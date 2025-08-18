/** Chunk was on 91173 **/
/** chunk id: 983436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk287734 = require("./287734.js"),
  Chunk475468 = require("./475468.js"),
  Chunk358555 = require("./358555.jsx"),
  Chunk955415 = require("./955415.jsx"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk105341 = require("./105341.js");

function g(e) {
  let {
    guild: t,
    channel: n,
    message: g
  } = e, _ = u.Z.getGuildId(), h = c.Z.getChannelId(_), b = i.useCallback(() => {
    var e;
    d.default.track(p.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
      author_id: null == (e = g.author) ? true : e.id,
      link_guild_id: t.id,
      link_channel_id: n.id,
      link_channel_type: n.type,
      guild_id: _,
      channel_id: h
    }), (0, o.K)(t.id, n.id), l.default.selectVoiceChannel(n.id)
  }, [g, t, n, _, h]), E = (0, r.jsx)(s.Z.Channel, {
    channel: n
  });
  return (0, r.jsx)(s.Z, {
    children: (0, r.jsxs)(s.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: f.headerLine,
        children: [(0, r.jsx)(s.Z.Icon, {
          guild: t
        }), (0, r.jsx)(s.Z.Info, {
          title: E,
          onClick: b,
          children: (0, r.jsxs)("span", {
            className: f.infoTitle,
            children: [m.intl.format(m.t["2wimj4"], {
              guildName: t.name
            }), (0, r.jsx)("span", {
              className: f.infoBadge,
              children: (0, r.jsx)(a.Z, {
                guild: t,
                isBannerVisible: false
              })
            })]
          })
        })]
      }), (0, r.jsx)(s.Z.Button, {
        onClick: b,
        color: s.Z.Button.Colors.GREEN,
        children: n.isGuildStageVoice() ? m.intl.string(m.t["7vb2cX"]) : m.intl.string(m.t["96ANUF"])
      })]
    })
  })
}