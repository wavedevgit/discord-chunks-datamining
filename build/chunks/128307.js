/** Chunk was on 71447 **/
/** chunk id: 128307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk308368 = require("./308368.js"),
  Chunk684013 = require("./684013.js"),
  Chunk334738 = require("./334738.js"),
  Chunk592598 = require("./592598.js"),
  Chunk481484 = require("./481484.js"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e, t, n, h) {
  if (a.A.isNotificationDisabled(u.KS.ActivityInvite)) return null;
  let p = t.username,
    f = d.intl.format(d.t.VDODnv, {
      username: "",
      game: n.name
    }),
    g = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: m,
      trackClick: y
    } = (0, o.Y9)(u.KS.ActivityInvite, {
      notif_type: u.KS.ActivityInvite,
      notif_user_id: t.id,
      activity_type: c.xL.JOIN_REQUEST,
      activity_name: h.name
    });
  return {
    icon: g,
    title: p,
    body: f,
    confirmText: d.intl.string(d.t["fgP/wX"]),
    cancelText: d.intl.string(d.t["tpXzJ+"]),
    onNotificationShow: () => {
      m()
    },
    onConfirmClick: (t, n) => {
      i.A.sendActivityInvite({
        channelId: e.id,
        type: c.xL.JOIN,
        activity: h,
        location: (0, s.y)() ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY
      }), y("join"), r.A.updateNotificationStatus(n)
    },
    onCancelClick: (t, n) => {
      (0, l.ack)(e.id, {
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