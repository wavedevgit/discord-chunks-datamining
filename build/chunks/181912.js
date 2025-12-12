/** Chunk was on 63141 **/
/** chunk id: 181912, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk26151 = require("./26151.js"),
  Chunk13245 = require("./13245.js"),
  Chunk287734 = require("./287734.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk593481 = require("./593481.jsx"),
  Chunk614554 = require("./614554.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk312839 = require("./312839.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let t = (0, o.F6)(e, u.default, d.Z),
    n = g.intl.string(g.t.ssrVzG),
    b = (0, s.x)(e),
    m = (0, c.Z)(e),
    {
      trackView: y,
      trackClick: v
    } = (0, f.R)(p.n0.IncomingCall, {
      notif_type: p.n0.IncomingCall,
      notif_user_id: m,
      guild_id: e.guild_id,
      channel_id: e.id,
      channel_type: e.type
    });
  return {
    icon: b,
    title: t,
    body: n,
    hint: e => (0, l.QR)(e, (0, f.P)(), g.t.Odi54y),
    confirmText: g.intl.string(g.t["0D/6Rz"]),
    cancelText: g.intl.string(g.t.BVN4pL),
    onNotificationShow: () => {
      y()
    },
    onConfirmClick: () => {
      if (h.TPd.CALLABLE.has(e.type)) r.Z.callPrivateChannel(e.id);
      else {
        if (e.type !== h.d4z.GUILD_VOICE) return;
        a.default.selectVoiceChannel(e.id)
      }
      v("join"), r.Z.track(h.rMx.VOICE_CHANNEL_SELECTED, {
        location: "Overlay Notificaiton",
        guild_id: e.guild_id,
        channel_id: e.id,
        video_enabled: false
      })
    },
    onCancelClick: () => {
      i.Z.stopRinging(e.id), v("decline")
    },
    onDismissClick: () => {
      v("dismiss")
    }
  }
}