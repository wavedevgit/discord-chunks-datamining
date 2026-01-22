/** Chunk was on 84018 **/
/** chunk id: 729843, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
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

function g(e) {
  let t = (0, o.m1)(e, u.default, d.A),
    n = b.intl.string(b.t.ssrVzG),
    g = (0, l.Y)(e),
    y = (0, c.A)(e),
    {
      trackView: A,
      trackClick: m
    } = (0, h.Y)(f.KS.IncomingCall, {
      notif_type: f.KS.IncomingCall,
      notif_user_id: y,
      guild_id: e.guild_id,
      channel_id: e.id,
      channel_type: e.type
    });
  return {
    icon: g,
    title: t,
    body: n,
    hint: e => (0, a.sI)(e, (0, h.J)(), b.t.Odi54y),
    confirmText: b.intl.string(b.t["0D/6Rz"]),
    cancelText: b.intl.string(b.t.BVN4pL),
    onNotificationShow: () => {
      A()
    },
    onConfirmClick: () => {
      if (p.kvI.CALLABLE.has(e.type)) r.A.callPrivateChannel(e.id);
      else {
        if (e.type !== p.rbe.GUILD_VOICE) return;
        s.default.selectVoiceChannel(e.id)
      }
      m("join"), r.A.track(p.HAw.VOICE_CHANNEL_SELECTED, {
        location: "Overlay Notificaiton",
        guild_id: e.guild_id,
        channel_id: e.id,
        video_enabled: false
      })
    },
    onCancelClick: () => {
      i.A.stopRinging(e.id), m("decline")
    },
    onDismissClick: () => {
      m("dismiss")
    }
  }
}