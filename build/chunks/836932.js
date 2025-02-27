/** Chunk was on 76977 **/
n.d(t, {
  Z: () => d
});
var i = n(224706),
  r = n(13245),
  o = n(593481),
  s = n(150097),
  l = n(312839),
  a = n(987650),
  c = n(388032);

function d(e, t, n, d, u) {
  if (null == t.activity) return null;
  let h = t.activity.type,
    p = u.session_id;
  if (null == p) return null;
  let {
    icon: f,
    title: g,
    body: m
  } = (0, s.Xi)(e, t, n), {
    trackView: y,
    trackClick: _
  } = (0, l.R)(a.n0.ActivityInvite, {
    notif_type: a.n0.ActivityInvite,
    notif_user_id: n.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type,
    activity_type: h,
    activity_name: u.name
  });
  return {
    icon: f,
    title: g,
    body: m,
    hint: e => (0, o.QR)(e, (0, l.P)(), c.t.aB5xLy),
    onNotificationShow: () => {
      y()
    },
    confirmText: c.NW.string(c.t.VJlc0d),
    onConfirmClick: (o, s) => {
      i.Z.join({
        userId: n.id,
        sessionId: p,
        applicationId: d.id,
        channelId: e.id,
        messageId: t.id,
        activity: u
      }), r.Z.updateNotificationStatus(s), _("join")
    },
    onDismissClick: () => {
      _("dismiss")
    }
  }
}