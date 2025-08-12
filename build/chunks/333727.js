/** Chunk was on 9646 **/
/** chunk id: 333727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk278323 = require("./278323.js"),
  Chunk13245 = require("./13245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk237997 = require("./237997.js"),
  Chunk145597 = require("./145597.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n, p) {
  let f = t.username,
    h = d.intl.format(d.t.VDODnp, {
      username: "",
      game: n.name
    }),
    m = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: g,
      trackClick: y
    } = (0, s.R)(c.n0.ActivityInvite, {
      notif_type: c.n0.ActivityInvite,
      notif_user_id: t.id,
      activity_type: u.mFx.JOIN_REQUEST,
      activity_name: p.name
    });
  return {
    icon: m,
    title: f,
    body: h,
    confirmText: d.intl.string(d.t["fgP/wc"]),
    cancelText: d.intl.string(d.t.tpXzJy),
    onNotificationShow: () => {
      g()
    },
    onConfirmClick: (t, n) => {
      i.Z.sendActivityInvite({
        channelId: e.id,
        type: u.mFx.JOIN,
        activity: p,
        location: l.default.isLocked((0, a.getPID)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY
      }), y("join"), r.Z.updateNotificationStatus(n)
    },
    onCancelClick: (t, n) => {
      (0, o.In)(e.id, {
        section: u.jXE.OVERLAY,
        object: u.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
        objectType: u.Qqv.ACK_SEMI_AUTOMATIC
      }, true, true), r.Z.updateNotificationStatus(n), y("decline")
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}