/** Chunk was on 50751 **/
/** chunk id: 672199, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk13245 = require("./13245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk562224 = require("./562224.js"),
  Chunk145597 = require("./145597.js"),
  Chunk624864 = require("./624864.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk978595 = require("./978595.js");

function f(e, t, n, f) {
  if (a.Z.isNotificationDisabled(u.n0.RequestToStream)) return null;
  let m = t.username,
    g = h.intl.format(p.default.jTbTAA, {
      username: "",
      game: n.name
    }),
    y = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: O,
      trackClick: v
    } = (0, s.R)(u.n0.RequestToStream, {
      notif_type: u.n0.RequestToStream,
      notif_user_id: t.id,
      activity_type: c.mFx.STREAM_REQUEST,
      activity_name: f.name
    });
  return {
    icon: y,
    title: m,
    body: g,
    confirmText: h.intl.string(p.default.UGbmBg),
    cancelText: h.intl.string(h.t.tpXzJy),
    onNotificationShow: () => {
      O()
    },
    onConfirmClick: (e, t) => {
      (0, l.Z)((0, o.getPID)(), {
        preset: d.tI.PRESET_VIDEO
      }), v("request-to-stream"), i.Z.updateNotificationStatus(t)
    },
    onCancelClick: (t, n) => {
      (0, r.In)(e.id, {
        section: c.jXE.OVERLAY,
        object: c.qAy.ACK_DECLINE_REQUEST_TO_STREAM,
        objectType: c.Qqv.ACK_SEMI_AUTOMATIC
      }, true, true), i.Z.updateNotificationStatus(n), v("decline")
    },
    onDismissClick: () => {
      v("dismiss")
    }
  }
}