/** Chunk was on 50751 **/
/** chunk id: 333727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk278323 = require("./278323.js"),
  Chunk13245 = require("./13245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk624864 = require("./624864.js"),
  Chunk985149 = require("./985149.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n, p) {
  if (o.Z.isNotificationDisabled(u.n0.ActivityInvite)) return null;
  let h = t.username,
    f = d.intl.format(d.t.VDODnv, {
      username: "",
      game: n.name
    }),
    m = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: g,
      trackClick: y
    } = (0, s.R)(u.n0.ActivityInvite, {
      notif_type: u.n0.ActivityInvite,
      notif_user_id: t.id,
      activity_type: c.mFx.JOIN_REQUEST,
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
      i.Z.sendActivityInvite({
        channelId: e.id,
        type: c.mFx.JOIN,
        activity: p,
        location: (0, a._)() ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY
      }), y("join"), r.Z.updateNotificationStatus(n)
    },
    onCancelClick: (t, n) => {
      (0, l.ack)(e.id, {
        section: c.jXE.OVERLAY,
        object: c.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
        objectType: c.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true), r.Z.updateNotificationStatus(n), y("decline")
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}