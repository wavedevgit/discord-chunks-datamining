/** Chunk was on 76977 **/
"use strict";
n.d(t, {
  Z: () => d
});
var i = n(224706),
  r = n(13245),
  s = n(593481),
  o = n(150097),
  a = n(312839),
  l = n(987650),
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
  } = (0, o.Xi)(e, t, n), {
    trackView: y,
    trackClick: _
  } = (0, a.R)(l.n0.ActivityInvite, {
    notif_type: l.n0.ActivityInvite,
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
    hint: e => (0, s.QR)(e, (0, a.P)(), c.t.aB5xLy),
    onNotificationShow: () => {
      y()
    },
    confirmText: c.NW.string(c.t.VJlc0d),
    onConfirmClick: (s, o) => {
      i.Z.join({
        userId: n.id,
        sessionId: p,
        applicationId: d.id,
        channelId: e.id,
        messageId: t.id,
        activity: u
      }), r.Z.updateNotificationStatus(o), _("join")
    },
    onDismissClick: () => {
      _("dismiss")
    }
  }
}