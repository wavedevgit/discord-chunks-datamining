/** Chunk was on 84018 **/
/** chunk id: 729843, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk387755 = require("./387755.js"),
  Chunk684013 = require("./684013.js"),
  Chunk956793 = require("./956793.js"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk471024 = require("./471024.jsx"),
  Chunk621436 = require("./621436.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk684748 = require("./684748.js"),
  Chunk652215 = require("./652215.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");

function y(e) {
  let t = (0, o.m1)(e, u.default, d.A),
    n = g.intl.string(g.t.ssrVzG),
    y = (0, l.Y)(e),
    m = (0, c.A)(e),
    {
      trackView: _,
      trackClick: b
    } = (0, p.Y)(f.KS.IncomingCall, {
      notif_type: f.KS.IncomingCall,
      notif_user_id: m,
      guild_id: e.guild_id,
      channel_id: e.id,
      channel_type: e.type
    });
  return {
    icon: y,
    title: t,
    body: n,
    hint: e => (0, a.sI)(e, (0, p.J)(), g.t.Odi54y),
    confirmText: g.intl.string(g.t["0D/6Rz"]),
    cancelText: g.intl.string(g.t.BVN4pL),
    onNotificationShow: () => {
      _()
    },
    onConfirmClick: () => {
      if (h.kvI.CALLABLE.has(e.type)) r.A.callPrivateChannel(e.id);
      else {
        if (e.type !== h.rbe.GUILD_VOICE) return;
        s.default.selectVoiceChannel(e.id)
      }
      b("join"), r.A.track(h.HAw.VOICE_CHANNEL_SELECTED, {
        location: "Overlay Notificaiton",
        guild_id: e.guild_id,
        channel_id: e.id,
        video_enabled: false
      })
    },
    onCancelClick: () => {
      i.A.stopRinging(e.id), b("decline")
    },
    onDismissClick: () => {
      b("dismiss")
    }
  }
}