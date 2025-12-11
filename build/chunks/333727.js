/** Chunk was on 50751 **/
/** chunk id: 333727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function f(e, t, n, f) {
  if (a.Z.isNotificationDisabled(c.n0.ActivityInvite)) return null;
  let h = t.username,
    p = d.intl.format(d.t.VDODnv, {
      username: "",
      game: n.name
    }),
    m = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: g,
      trackClick: b
    } = (0, s.Rg)(c.n0.ActivityInvite, {
      notif_type: c.n0.ActivityInvite,
      notif_user_id: t.id,
      activity_type: u.mFx.JOIN_REQUEST,
      activity_name: f.name
    });
  return {
    icon: m,
    title: h,
    body: p,
    confirmText: d.intl.string(d.t["fgP/wX"]),
    cancelText: d.intl.string(d.t["tpXzJ+"]),
    onNotificationShow: () => {
      g()
    },
    onConfirmClick: (t, n) => {
      i.Z.sendActivityInvite({
        channelId: e.id,
        type: u.mFx.JOIN,
        activity: f,
        location: (0, o._)() ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY
      }), b("join"), r.Z.updateNotificationStatus(n)
    },
    onCancelClick: (t, n) => {
      (0, l.ack)(e.id, {
        section: u.jXE.OVERLAY,
        object: u.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
        objectType: u.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true), r.Z.updateNotificationStatus(n), b("decline")
    },
    onDismissClick: () => {
      b("dismiss")
    }
  }
}