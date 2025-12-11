/** Chunk was on 50751 **/
/** chunk id: 996050, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk224706 = require("./224706.js"),
  Chunk13245 = require("./13245.js"),
  Chunk864060 = require("./864060.js"),
  Chunk624864 = require("./624864.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n, u, d) {
  if (a.Z.isNotificationDisabled(s.n0.ActivityInvite) || null == t.activity || null == u.id) return null;
  let f = t.activity.type,
    h = d.session_id;
  if (null == h) return null;
  let {
    icon: p,
    title: m,
    body: g
  } = (0, l.Xi)(e, t, n), {
    trackView: b,
    trackClick: y
  } = (0, o.Rg)(s.n0.ActivityInvite, {
    notif_type: s.n0.ActivityInvite,
    notif_user_id: n.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type,
    activity_type: f,
    activity_name: d.name
  });
  return {
    icon: p,
    title: m,
    body: g,
    onNotificationShow: () => {
      b()
    },
    confirmText: c.intl.string(c.t.VJlc0S),
    onConfirmClick: (l, a) => {
      var o;
      i.Z.join({
        userId: n.id,
        sessionId: h,
        applicationId: null != (o = u.altId) ? o : u.id,
        channelId: e.id,
        messageId: t.id
      }), r.Z.updateNotificationStatus(a), y("join")
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}