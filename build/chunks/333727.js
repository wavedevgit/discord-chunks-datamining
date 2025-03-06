/** Chunk was on 50751 **/
n.d(t, {
  Z: () => p
});
var i = n(278323),
  r = n(13245),
  l = n(45114),
  o = n(237997),
  a = n(145597),
  s = n(620954),
  u = n(987650),
  c = n(981631),
  d = n(388032);

function p(e, t, n, p) {
  let h = t.username,
    f = d.NW.format(d.t.VDODnp, {
      username: "",
      game: n.name
    }),
    m = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: g,
      trackClick: O
    } = (0, s.R)(u.n0.ActivityInvite, {
      notif_type: u.n0.ActivityInvite,
      notif_user_id: t.id,
      activity_type: c.mFx.JOIN_REQUEST,
      activity_name: p.name
    });
  return {
    icon: m,
    title: h,
    body: f,
    confirmText: d.NW.string(d.t["fgP/wc"]),
    cancelText: d.NW.string(d.t.tpXzJy),
    onNotificationShow: () => {
      g()
    },
    onConfirmClick: (t, n) => {
      i.Z.sendActivityInvite({
        channelId: e.id,
        type: c.mFx.JOIN,
        activity: p,
        location: o.default.isLocked((0, a.getPID)()) ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY
      }), O("join"), r.Z.updateNotificationStatus(n)
    },
    onCancelClick: (t, n) => {
      (0, l.In)(e.id, !0, !0), r.Z.updateNotificationStatus(n), O("decline")
    },
    onDismissClick: () => {
      O("dismiss")
    }
  }
}