/** Chunk was on web.js **/
/** chunk id: 191764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk287734 = require("./287734.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk626135 = require("./626135.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    user: t,
    activity: n,
    onAction: m,
    onClose: g
  } = e, {
    newestAnalyticsLocation: E
  } = (0, o.ZP)(), b = (0, i.e7)([u.Z, l.Z], () => {
    var e;
    return l.Z.getChannel(null == (e = u.Z.getVoiceStateForUser(t.id)) ? true : e.channelId)
  }), y = (0, i.e7)([c.Z], () => c.Z.getChannelId() === (null == b ? true : b.id));
  return (null == n ? true : n.type) !== p.IIU.HANG_STATUS || null == b ? null : (0, r.jsx)(_.tG, {
    text: y ? h.intl.string(h.t.BXxdl5) : h.intl.string(h.t["9C444u"]),
    fullWidth: true,
    onClick: e => {
      e.stopPropagation(), null == m || m({
        action: "PRESS_HANG_STATUS_BUTTON"
      }), a.default.selectVoiceChannel(b.id), (0, s.Kh)(b.id), f.default.track(p.rMx.HANG_STATUS_CTA_CLICKED, {
        channel_id: b.id,
        guild_id: b.guild_id,
        source: E,
        media_session_id: c.Z.getMediaSessionId(),
        call_num_participants: d.ZP.countVoiceStatesForChannel(b.id),
        other_user_id: t.id,
        cta_type: y ? "open" : "join"
      }), null == g || g()
    }
  })
}