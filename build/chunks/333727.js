/** Chunk was on 50751 **/
/** chunk id: 333727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk278323 = require("./278323.js"),
  Chunk13245 = require("./13245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk237997 = require("./237997.js"),
  Chunk145597 = require("./145597.js"),
  Chunk624864 = require("./624864.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n, h) {
  if (s.Z.isNotificationDisabled(c.n0.ActivityInvite)) return null;
  let f = t.username,
    m = p.intl.format(p.t.VDODnp, {
      username: "",
      game: n.name
    }),
    g = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: y,
      trackClick: O
    } = (0, u.R)(c.n0.ActivityInvite, {
      notif_type: c.n0.ActivityInvite,
      notif_user_id: t.id,
      activity_type: d.mFx.JOIN_REQUEST,
      activity_name: h.name
    });
  return {
    icon: g,
    title: f,
    body: m,
    confirmText: p.intl.string(p.t["fgP/wc"]),
    cancelText: p.intl.string(p.t.tpXzJy),
    onNotificationShow: () => {
      y()
    },
    onConfirmClick: (t, n) => {
      i.Z.sendActivityInvite({
        channelId: e.id,
        type: d.mFx.JOIN,
        activity: h,
        location: o.default.isLocked((0, a.getPID)()) ? d.Sbl.LOCKED_OVERLAY : d.Sbl.UNLOCKED_OVERLAY
      }), O("join"), r.Z.updateNotificationStatus(n)
    },
    onCancelClick: (t, n) => {
      (0, l.In)(e.id, {
        section: d.jXE.OVERLAY,
        object: d.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
        objectType: d.Qqv.ACK_SEMI_AUTOMATIC
      }, true, true), r.Z.updateNotificationStatus(n), O("decline")
    },
    onDismissClick: () => {
      O("dismiss")
    }
  }
}