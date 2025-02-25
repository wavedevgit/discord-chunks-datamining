/** Chunk was on 50751 **/
n.d(t, {
  Z: () => u
});
var i = n(224706),
  r = n(13245),
  o = n(150097),
  l = n(620954),
  s = n(987650),
  a = n(388032);

function u(e, t, n, u, c) {
  if (null == t.activity || null == u.id) return null;
  let d = t.activity.type,
    p = c.session_id;
  if (null == p) return null;
  let {
    icon: h,
    title: f,
    body: m
  } = (0, o.Xi)(e, t, n), {
    trackView: g,
    trackClick: O
  } = (0, l.R)(s.n0.ActivityInvite, {
    notif_type: s.n0.ActivityInvite,
    notif_user_id: n.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type,
    activity_type: d,
    activity_name: c.name
  });
  return {
    icon: h,
    title: f,
    body: m,
    onNotificationShow: () => {
      g()
    },
    confirmText: a.NW.string(a.t.VJlc0d),
    onConfirmClick: (o, l) => {
      var s;
      i.Z.join({
        userId: n.id,
        sessionId: p,
        applicationId: null !== (s = u.altId) && void 0 !== s ? s : u.id,
        channelId: e.id,
        messageId: t.id,
        activity: c
      }), r.Z.updateNotificationStatus(l), O("join")
    },
    onDismissClick: () => {
      O("dismiss")
    }
  }
}