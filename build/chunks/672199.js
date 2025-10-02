/** Chunk was on 50751 **/
/** chunk id: 672199, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk13245 = require("./13245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk562224 = require("./562224.js"),
  Chunk145597 = require("./145597.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk658805 = require("./658805.js");

function h(e, t, n, h) {
  let f = t.username,
    m = d.intl.format(p.default.jTbTAA, {
      username: "",
      game: n.name
    }),
    g = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: O,
      trackClick: y
    } = (0, a.R)(s.n0.RequestToStream, {
      notif_type: s.n0.RequestToStream,
      notif_user_id: t.id,
      activity_type: u.mFx.STREAM_REQUEST,
      activity_name: h.name
    });
  return {
    icon: g,
    title: f,
    body: m,
    confirmText: d.intl.string(p.default.UGbmBg),
    cancelText: d.intl.string(d.t.tpXzJy),
    onNotificationShow: () => {
      O()
    },
    onConfirmClick: (e, t) => {
      (0, l.Z)((0, o.getPID)(), {
        preset: c.tI.PRESET_VIDEO
      }), y("request-to-stream"), i.Z.updateNotificationStatus(t)
    },
    onCancelClick: (t, n) => {
      (0, r.In)(e.id, {
        section: u.jXE.OVERLAY,
        object: u.qAy.ACK_DECLINE_REQUEST_TO_STREAM,
        objectType: u.Qqv.ACK_SEMI_AUTOMATIC
      }, true, true), i.Z.updateNotificationStatus(n), y("decline")
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}