/** Chunk was on 71447 **/
/** chunk id: 240933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk544420 = require("./544420.js"),
  Chunk684013 = require("./684013.js"),
  Chunk742984 = require("./742984.js"),
  Chunk592598 = require("./592598.js"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t, n, u, d) {
  if (a.A.isNotificationDisabled(s.KS.ActivityInvite) || null == t.activity || null == u.id) return null;
  let p = t.activity.type,
    h = d.session_id;
  if (null == h) return null;
  let {
    icon: f,
    title: m,
    body: g
  } = (0, l.TB)(e, t, n), {
    trackView: y,
    trackClick: A
  } = (0, o.Y9)(s.KS.ActivityInvite, {
    notif_type: s.KS.ActivityInvite,
    notif_user_id: n.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type,
    activity_type: p,
    activity_name: d.name
  });
  return {
    icon: f,
    title: m,
    body: g,
    onNotificationShow: () => {
      y()
    },
    confirmText: c.intl.string(c.t.VJlc0S),
    onConfirmClick: (l, a) => {
      var o;
      i.A.join({
        userId: n.id,
        sessionId: h,
        applicationId: null != (o = u.altId) ? o : u.id,
        channelId: e.id,
        messageId: t.id
      }), r.A.updateNotificationStatus(a), A("join")
    },
    onDismissClick: () => {
      A("dismiss")
    }
  }
}