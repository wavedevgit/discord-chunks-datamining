/** Chunk was on 71447 **/
/** chunk id: 240933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk544420 = require("./544420.js"),
  Chunk684013 = require("./684013.js"),
  Chunk742984 = require("./742984.js"),
  Chunk592598 = require("./592598.js"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t, n, c, d) {
  if (a.A.isNotificationDisabled(o.KS.ActivityInvite) || null == t.activity) return null;
  let h = t.activity.type,
    p = c.session_id;
  if (null == p) return null;
  let {
    icon: f,
    title: g,
    body: m
  } = (0, l.TB)(e, t, n), {
    trackView: y,
    trackClick: A
  } = (0, s.Y9)(o.KS.ActivityInvite, {
    notif_type: o.KS.ActivityInvite,
    notif_user_id: n.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type,
    activity_type: h,
    activity_name: c.name
  });
  return {
    icon: f,
    title: g,
    body: m,
    onNotificationShow: () => {
      y()
    },
    confirmText: u.intl.string(u.t.VJlc0S),
    onConfirmClick: (l, a) => {
      i.A.join({
        userId: n.id,
        sessionId: p,
        applicationId: d,
        channelId: e.id,
        messageId: t.id
      }), r.A.updateNotificationStatus(a), A("join")
    },
    onDismissClick: () => {
      A("dismiss")
    }
  }
}