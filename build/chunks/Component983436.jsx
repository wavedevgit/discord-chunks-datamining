/** Chunk was on web.js **/
/** chunk id: 983436, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
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

function m(e) {
  let {
    guild: t,
    channel: n,
    message: m
  } = e, g = d.Z.getGuildId(), E = u.Z.getChannelId(g), b = i.useCallback(() => {
    var e;
    f.default.track(_.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
      author_id: null == (e = m.author) ? true : e.id,
      link_guild_id: t.id,
      link_channel_id: n.id,
      link_channel_type: n.type,
      guild_id: g,
      channel_id: E
    }), (0, s.K)(t.id, n.id), o.default.selectVoiceChannel(n.id)
  }, [m, t, n, g, E]), y = (0, r.jsx)(c.Z.Channel, {
    channel: n
  });
  return (0, r.jsx)(c.Z, {
    children: (0, r.jsxs)(c.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: h.headerLine,
        children: [(0, r.jsx)(c.Z.Icon, {
          guild: t
        }), (0, r.jsx)(c.Z.Info, {
          title: y,
          onClick: b,
          children: (0, r.jsxs)("span", {
            className: h.infoTitle,
            children: [p.intl.format(p.t["2wimj5"], {
              guildName: t.name
            }), (0, r.jsx)("span", {
              className: h.infoBadge,
              children: (0, r.jsx)(l.Z, {
                guild: t,
                isBannerVisible: false
              })
            })]
          })
        })]
      }), (0, r.jsx)(a.zxk, {
        fullWidth: true,
        onClick: b,
        variant: "active",
        text: n.isGuildStageVoice() ? p.intl.string(p.t["7vb2cc"]) : p.intl.string(p.t["96ANUN"])
      })]
    })
  })
}