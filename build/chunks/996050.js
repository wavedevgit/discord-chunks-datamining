/** Chunk was on 50751 **/
/** chunk id: 996050, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk224706 = require("./224706.js"),
  Chunk13245 = require("./13245.js"),
  Chunk864060 = require("./864060.js"),
  Chunk624864 = require("./624864.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t, n, c, d) {
  if (a.Z.isNotificationDisabled(s.n0.ActivityInvite) || null == t.activity || null == c.id) return null;
  let h = t.activity.type,
    p = d.session_id;
  if (null == p) return null;
  let {
    icon: f,
    title: m,
    body: g
  } = (0, l.Xi)(e, t, n), {
    trackView: y,
    trackClick: O
  } = (0, o.Rg)(s.n0.ActivityInvite, {
    notif_type: s.n0.ActivityInvite,
    notif_user_id: n.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type,
    activity_type: h,
    activity_name: d.name
  });
  return {
    icon: f,
    title: m,
    body: g,
    onNotificationShow: () => {
      y()
    },
    confirmText: u.intl.string(u.t.VJlc0S),
    onConfirmClick: (l, a) => {
      var o;
      i.Z.join({
        userId: n.id,
        sessionId: p,
        applicationId: null != (o = c.altId) ? o : c.id,
        channelId: e.id,
        messageId: t.id
      }), r.Z.updateNotificationStatus(a), O("join")
    },
    onDismissClick: () => {
      O("dismiss")
    }
  }
}