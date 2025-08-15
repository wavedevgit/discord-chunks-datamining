/** Chunk was on web.js **/
/** chunk id: 191764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk287734 = require("./287734.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    user: t,
    activity: n,
    onAction: p,
    onClose: h
  } = e, {
    newestAnalyticsLocation: m
  } = (0, o.ZP)(), g = (0, i.e7)([c.Z, s.Z], () => {
    var e;
    return s.Z.getChannel(null == (e = c.Z.getVoiceStateForUser(t.id)) ? true : e.channelId)
  }), E = (0, i.e7)([l.Z], () => l.Z.getChannelId() === (null == g ? true : g.id));
  return (null == n ? true : n.type) !== f.IIU.HANG_STATUS || null == g ? null : (0, r.jsx)(d.tG, {
    text: _.intl.string(_.t["9C444u"]),
    disabled: E,
    fullWidth: true,
    onClick: e => {
      e.stopPropagation(), null == p || p({
        action: "PRESS_HANG_STATUS_BUTTON"
      }), a.default.selectVoiceChannel(g.id), u.default.track(f.rMx.HANG_STATUS_CTA_CLICKED, {
        channel_id: g.id,
        guild_id: g.guild_id,
        source: m
      }), null == h || h()
    }
  })
}