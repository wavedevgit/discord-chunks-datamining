/** Chunk was on 71447 **/
/** chunk id: 128307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e, t, n, p) {
  if (a.A.isNotificationDisabled(c.KS.ActivityInvite)) return null;
  let h = t.username,
    f = d.intl.format(d.t.VDODnv, {
      username: "",
      game: n.name
    }),
    m = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: g,
      trackClick: y
    } = (0, s.Y9)(c.KS.ActivityInvite, {
      notif_type: c.KS.ActivityInvite,
      notif_user_id: t.id,
      activity_type: u.xL.JOIN_REQUEST,
      activity_name: p.name
    });
  return {
    icon: m,
    title: h,
    body: f,
    confirmText: d.intl.string(d.t["fgP/wX"]),
    cancelText: d.intl.string(d.t["tpXzJ+"]),
    onNotificationShow: () => {
      g()
    },
    onConfirmClick: (t, n) => {
      i.A.sendActivityInvite({
        channelId: e.id,
        type: u.xL.JOIN,
        activity: p,
        location: (0, o.y)() ? u.ThZ.LOCKED_OVERLAY : u.ThZ.UNLOCKED_OVERLAY
      }), y("join"), r.A.updateNotificationStatus(n)
    },
    onCancelClick: (t, n) => {
      (0, l.ack)(e.id, {
        section: u.JJy.OVERLAY,
        object: u.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
        objectType: u.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true), r.A.updateNotificationStatus(n), y("decline")
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}