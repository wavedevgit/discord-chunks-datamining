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
  let h = t.activity.type,
    p = u.session_id;
  if (null == p) return null;
  let {
    icon: f,
    title: g,
    body: m
  } = (0, s.Xi)(e, t, n), {
    trackView: _,
    trackClick: y
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
      _()
    },
    confirmText: c.intl.string(c.t.VJlc0S),
    onConfirmClick: (s, o) => {
      i.Z.join({
        userId: n.id,
        sessionId: p,
        applicationId: d.id,
        channelId: e.id,
        messageId: t.id
      }), r.Z.updateNotificationStatus(o), y("join")
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}