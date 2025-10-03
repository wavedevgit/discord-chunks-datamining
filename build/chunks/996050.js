/** Chunk was on 50751 **/
/** chunk id: 996050, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk224706 = require("./224706.js"),
  Chunk13245 = require("./13245.js"),
  Chunk864060 = require("./864060.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n, u, c) {
  if (null == t.activity || null == u.id) return null;
  let d = t.activity.type,
    h = c.session_id;
  if (null == h) return null;
  let {
    icon: p,
    title: f,
    body: m
  } = (0, l.Xi)(e, t, n), {
    trackView: g,
    trackClick: y
  } = (0, o.R)(a.n0.ActivityInvite, {
    notif_type: a.n0.ActivityInvite,
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
    icon: p,
    title: f,
    body: m,
    onNotificationShow: () => {
      g()
    },
    confirmText: s.intl.string(s.t.VJlc0d),
    onConfirmClick: (l, o) => {
      var a;
      i.Z.join({
        userId: n.id,
        sessionId: h,
        applicationId: null != (a = u.altId) ? a : u.id,
        channelId: e.id,
        messageId: t.id
      }), r.Z.updateNotificationStatus(o), y("join")
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}