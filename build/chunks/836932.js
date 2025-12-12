/** Chunk was on 63141 **/
/** chunk id: 836932, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk224706 = require("./224706.js"),
  Chunk13245 = require("./13245.js"),
  Chunk864060 = require("./864060.js"),
  Chunk593481 = require("./593481.jsx"),
  Chunk312839 = require("./312839.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n, d, u) {
  if (null == t.activity) return null;
  let f = t.activity.type,
    h = u.session_id;
  if (null == h) return null;
  let {
    icon: p,
    title: g,
    body: b
  } = (0, a.Xi)(e, t, n), {
    trackView: m,
    trackClick: y
  } = (0, o.R)(l.n0.ActivityInvite, {
    notif_type: l.n0.ActivityInvite,
    notif_user_id: n.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type,
    activity_type: f,
    activity_name: u.name
  });
  return {
    icon: p,
    title: g,
    body: b,
    hint: e => (0, s.QR)(e, (0, o.P)(), c.t.aB5xLy),
    onNotificationShow: () => {
      m()
    },
    confirmText: c.intl.string(c.t.VJlc0S),
    onConfirmClick: (a, s) => {
      i.Z.join({
        userId: n.id,
        sessionId: h,
        applicationId: d.id,
        channelId: e.id,
        messageId: t.id
      }), r.Z.updateNotificationStatus(s), y("join")
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}