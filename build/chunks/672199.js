/** Chunk was on 50751 **/
/** chunk id: 672199, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk13245 = require("./13245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk580991 = require("./580991.js"),
  Chunk562224 = require("./562224.js"),
  Chunk361291 = require("./361291.js"),
  Chunk624864 = require("./624864.js"),
  Chunk610394 = require("./610394.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk978967 = require("./978967.js");

function g(e, t, n, g) {
  if (s.Z.isNotificationDisabled(d.n0.RequestToStream)) return null;
  let y = t.username,
    O = f.intl.format(m.default.jTbTAF, {
      username: "",
      game: n.name
    }),
    E = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: v,
      trackClick: S
    } = (0, c.R)(d.n0.RequestToStream, {
      notif_type: d.n0.RequestToStream,
      notif_user_id: t.id,
      activity_type: p.mFx.STREAM_REQUEST,
      activity_name: g.name
    });
  return {
    icon: E,
    title: y,
    body: O,
    confirmText: f.intl.string(m.default.UGbmBp),
    cancelText: f.intl.string(f.t["tpXzJ+"]),
    onNotificationShow: () => {
      v()
    },
    onConfirmClick: (e, t) => {
      let n = a.Z.getState().preset;
      if (n === h.ApplicationStreamPresets.PRESET_DOCUMENTS) {
        let {
          allowAutoQuality: e
        } = (0, l.IK)({
          location: "requestToStreamNotification"
        });
        n = e ? h.ApplicationStreamPresets.PRESET_AUTO : h.ApplicationStreamPresets.PRESET_VIDEO
      }(0, o.Z)(u.Z.getTargetPID(), {
        preset: n
      }), S("request-to-stream"), i.Z.updateNotificationStatus(t)
    },
    onCancelClick: (t, n) => {
      (0, r.ack)(e.id, {
        section: p.jXE.OVERLAY,
        object: p.qAy.ACK_DECLINE_REQUEST_TO_STREAM,
        objectType: p.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true), i.Z.updateNotificationStatus(n), S("decline")
    },
    onDismissClick: () => {
      S("dismiss")
    }
  }
}