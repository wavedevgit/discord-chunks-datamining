/** Chunk was on 50751 **/
/** chunk id: 777036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk26151 = require("./26151.js"),
  Chunk13245 = require("./13245.js"),
  Chunk287734 = require("./287734.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk614554 = require("./614554.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let t = (0, o.F6)(e, c.default, s.Z),
    n = p.intl.string(p.t.ssrVzG),
    m = (0, a.x)(e),
    g = (0, u.Z)(e),
    {
      trackView: b,
      trackClick: y
    } = (0, d.Rg)(f.n0.IncomingCall, {
      notif_type: f.n0.IncomingCall,
      notif_user_id: g,
      guild_id: e.guild_id,
      channel_id: e.id,
      channel_type: e.type
    });
  return {
    icon: m,
    title: t,
    body: n,
    confirmText: p.intl.string(p.t["0D/6Rz"]),
    cancelText: p.intl.string(p.t.BVN4pL),
    onNotificationShow: () => {
      b()
    },
    onConfirmClick: (t, n) => {
      if (y("join"), h.TPd.CALLABLE.has(e.type)) i.Z.call(e.id, false, false);
      else {
        if (e.type !== h.d4z.GUILD_VOICE) return;
        l.default.selectVoiceChannel(e.id)
      }
      r.Z.updateNotificationStatus(n), r.Z.track(h.rMx.VOICE_CHANNEL_SELECTED, {
        location: "Overlay Notificaiton",
        guild_id: e.guild_id,
        channel_id: e.id,
        video_enabled: false
      })
    },
    onCancelClick: () => {
      y("decline"), i.Z.stopRinging(e.id)
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}