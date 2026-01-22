/** Chunk was on 84018 **/
/** chunk id: 504139, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk544420 = require("./544420.js"),
  Chunk684013 = require("./684013.js"),
  Chunk742984 = require("./742984.js"),
  Chunk471024 = require("./471024.jsx"),
  Chunk684748 = require("./684748.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t, n, d, u) {
  if (null == t.activity) return null;
  let h = t.activity.type,
    p = u.session_id;
  if (null == p) return null;
  let {
    icon: f,
    title: b,
    body: g
  } = (0, s.TB)(e, t, n), {
    trackView: y,
    trackClick: A
  } = (0, o.Y)(a.KS.ActivityInvite, {
    notif_type: a.KS.ActivityInvite,
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
    title: b,
    body: g,
    hint: e => (0, l.sI)(e, (0, o.J)(), c.t.aB5xLy),
    onNotificationShow: () => {
      y()
    },
    confirmText: c.intl.string(c.t.VJlc0S),
    onConfirmClick: (s, l) => {
      i.A.join({
        userId: n.id,
        sessionId: p,
        applicationId: d.id,
        channelId: e.id,
        messageId: t.id
      }), r.A.updateNotificationStatus(l), A("join")
    },
    onDismissClick: () => {
      A("dismiss")
    }
  }
}