/** Chunk was on 71447 **/
/** chunk id: 122749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk387755 = require("./387755.js"),
  Chunk684013 = require("./684013.js"),
  Chunk956793 = require("./956793.js"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk621436 = require("./621436.js"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let t = (0, o.m1)(e, u.default, s.A),
    n = f.intl.string(f.t.ssrVzG),
    g = (0, a.Y)(e),
    m = (0, c.A)(e),
    {
      trackView: A,
      trackClick: y
    } = (0, d.Y9)(h.KS.IncomingCall, {
      notif_type: h.KS.IncomingCall,
      notif_user_id: m,
      guild_id: e.guild_id,
      channel_id: e.id,
      channel_type: e.type
    });
  return {
    icon: g,
    title: t,
    body: n,
    confirmText: f.intl.string(f.t["0D/6Rz"]),
    cancelText: f.intl.string(f.t.BVN4pL),
    onNotificationShow: () => {
      A()
    },
    onConfirmClick: (t, n) => {
      if (y("join"), p.kvI.CALLABLE.has(e.type)) i.A.call(e.id, false, false);
      else {
        if (e.type !== p.rbe.GUILD_VOICE) return;
        l.default.selectVoiceChannel(e.id)
      }
      r.A.updateNotificationStatus(n), r.A.track(p.HAw.VOICE_CHANNEL_SELECTED, {
        location: "Overlay Notificaiton",
        guild_id: e.guild_id,
        channel_id: e.id,
        video_enabled: false
      })
    },
    onCancelClick: () => {
      y("decline"), i.A.stopRinging(e.id)
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}