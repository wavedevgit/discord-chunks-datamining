/** Chunk was on 50751 **/
n.d(t, {
  Z: () => m
});
var i = n(26151),
  r = n(13245),
  o = n(287734),
  l = n(43267),
  a = n(933557),
  s = n(699516),
  u = n(594174),
  c = n(614554),
  d = n(620954),
  p = n(987650),
  h = n(981631),
  f = n(388032);

function m(e) {
  let t = (0, a.F6)(e, u.default, s.Z),
    n = f.NW.string(f.t.ssrVzM),
    m = (0, l.x)(e),
    g = (0, c.Z)(e),
    {
      trackView: O,
      trackClick: y
    } = (0, d.R)(p.n0.IncomingCall, {
      notif_type: p.n0.IncomingCall,
      notif_user_id: g,
      guild_id: e.guild_id,
      channel_id: e.id,
      channel_type: e.type
    });
  return {
    icon: m,
    title: t,
    body: n,
    confirmText: f.NW.string(f.t["0D/6R0"]),
    cancelText: f.NW.string(f.t.BVN4pK),
    onNotificationShow: () => {
      O()
    },
    onConfirmClick: (t, n) => {
      if (y("join"), h.TPd.CALLABLE.has(e.type)) i.Z.call(e.id, !1, !1);
      else {
        if (e.type !== h.d4z.GUILD_VOICE) return;
        o.default.selectVoiceChannel(e.id)
      }
      r.Z.updateNotificationStatus(n), r.Z.track(h.rMx.VOICE_CHANNEL_SELECTED, {
        location: "Overlay Notificaiton",
        guild_id: e.guild_id,
        channel_id: e.id,
        video_enabled: !1
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