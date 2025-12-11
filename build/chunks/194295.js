/** Chunk was on 63141 **/
/** chunk id: 194295, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk278323 = require("./278323.js"),
  Chunk13245 = require("./13245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk593481 = require("./593481.jsx"),
  Chunk237997 = require("./237997.js"),
  Chunk312839 = require("./312839.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n, f) {
  let h = t.username,
    p = u.intl.format(u.t.VDODnv, {
      username: "",
      game: n.name
    }),
    g = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: b,
      trackClick: m
    } = (0, l.R)(d.n0.ActivityInvite, {
      notif_type: d.n0.ActivityInvite,
      notif_user_id: t.id,
      activity_type: c.mFx.JOIN_REQUEST,
      activity_name: n.name
    });
  return {
    icon: g,
    title: h,
    body: p,
    hint: e => (0, s.QR)(e, (0, l.P)(), u.t.Odi54y),
    confirmText: u.intl.string(u.t["fgP/wX"]),
    cancelText: u.intl.string(u.t["tpXzJ+"]),
    onNotificationShow: () => {
      b()
    },
    onConfirmClick: (t, n) => {
      i.Z.sendActivityInvite({
        channelId: e.id,
        type: c.mFx.JOIN,
        activity: f,
        location: o.default.isInstanceLocked() ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY
      }), m("join"), r.Z.updateNotificationStatus(n)
    },
    onCancelClick: (t, n) => {
      (0, a.ack)(e.id, {
        section: c.jXE.OVERLAY,
        object: c.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
        objectType: c.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true), r.Z.updateNotificationStatus(n), m("decline")
    },
    onDismissClick: () => {
      m("dismiss")
    }
  }
}