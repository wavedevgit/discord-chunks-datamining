/** Chunk was on 84018 **/
/** chunk id: 996797, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk308368 = require("./308368.js"),
  Chunk684013 = require("./684013.js"),
  Chunk334738 = require("./334738.js"),
  Chunk471024 = require("./471024.jsx"),
  Chunk256415 = require("./256415.js"),
  Chunk684748 = require("./684748.js"),
  Chunk652215 = require("./652215.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");

function h(e, t, n, h) {
  let p = t.username,
    f = u.intl.format(u.t.VDODnv, {
      username: "",
      game: n.name
    }),
    b = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: g,
      trackClick: y
    } = (0, a.Y)(d.KS.ActivityInvite, {
      notif_type: d.KS.ActivityInvite,
      notif_user_id: t.id,
      activity_type: c.xL.JOIN_REQUEST,
      activity_name: n.name
    });
  return {
    icon: b,
    title: p,
    body: f,
    hint: e => (0, l.sI)(e, (0, a.J)(), u.t.Odi54y),
    confirmText: u.intl.string(u.t["fgP/wX"]),
    cancelText: u.intl.string(u.t["tpXzJ+"]),
    onNotificationShow: () => {
      g()
    },
    onConfirmClick: (t, n) => {
      i.A.sendActivityInvite({
        channelId: e.id,
        type: c.xL.JOIN,
        activity: h,
        location: o.default.isInstanceLocked() ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY
      }), y("join"), r.A.updateNotificationStatus(n)
    },
    onCancelClick: (t, n) => {
      (0, s.ack)(e.id, {
        section: c.JJy.OVERLAY,
        object: c.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
        objectType: c.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true), r.A.updateNotificationStatus(n), y("decline")
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}