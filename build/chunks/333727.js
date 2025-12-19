/** Chunk was on 50751 **/
/** chunk id: 333727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(e, t, n, h) {
  if (o.Z.isNotificationDisabled(u.n0.ActivityInvite)) return null;
  let p = t.username,
    f = d.intl.format(d.t.VDODnv, {
      username: "",
      game: n.name
    }),
    m = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: g,
      trackClick: O
    } = (0, s.Rg)(u.n0.ActivityInvite, {
      notif_type: u.n0.ActivityInvite,
      notif_user_id: t.id,
      activity_type: c.mFx.JOIN_REQUEST,
      activity_name: h.name
    });
  return {
    icon: m,
    title: p,
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
        activity: h,
        location: (0, a._)() ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY
      }), O("join"), r.Z.updateNotificationStatus(n)
    },
    onCancelClick: (t, n) => {
      (0, l.ack)(e.id, {
        section: c.jXE.OVERLAY,
        object: c.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
        objectType: c.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true), r.Z.updateNotificationStatus(n), O("decline")
    },
    onDismissClick: () => {
      O("dismiss")
    }
  }
}