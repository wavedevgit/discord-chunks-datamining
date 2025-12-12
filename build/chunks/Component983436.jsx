/** Chunk was on web.js **/
/** chunk id: 983436, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function h(e) {
  let {
    guild: t,
    channel: n,
    message: h
  } = e, g = d.Z.getGuildId(), E = u.Z.getChannelId(g), b = i.useCallback(() => {
    var e;
    f.default.track(p.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
      author_id: null == (e = h.author) ? true : e.id,
      link_guild_id: t.id,
      link_channel_id: n.id,
      link_channel_type: n.type,
      guild_id: g,
      channel_id: E
    }), (0, s.K)(t.id, n.id), a.default.selectVoiceChannel(n.id)
  }, [h, t, n, g, E]), y = (0, r.jsx)(c.Z.Channel, {
    channel: n
  });
  return (0, r.jsx)(c.Z, {
    children: (0, r.jsxs)(c.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: m.headerLine,
        children: [(0, r.jsx)(c.Z.Icon, {
          guild: t
        }), (0, r.jsx)(c.Z.Info, {
          title: y,
          onClick: b,
          children: (0, r.jsxs)("span", {
            className: m.infoTitle,
            children: [_.intl.format(_.t["2wimj5"], {
              guildName: t.name
            }), (0, r.jsx)("span", {
              className: m.infoBadge,
              children: (0, r.jsx)(l.Z, {
                guild: t,
                isBannerVisible: false
              })
            })]
          })
        })]
      }), (0, r.jsx)("div", {
        className: m.buttonContainer,
        children: (0, r.jsx)(o.zxk, {
          fullWidth: true,
          onClick: b,
          variant: "active",
          text: n.isGuildStageVoice() ? _.intl.string(_.t["7vb2cc"]) : _.intl.string(_.t["96ANUN"])
        })
      })]
    })
  })
}