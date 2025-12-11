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
  Chunk442909 = require("./442909.js");

function g(e, t, n, g) {
  if (s.Z.isNotificationDisabled(d.n0.RequestToStream)) return null;
  let b = t.username,
    y = p.intl.format(m.default.jTbTAF, {
      username: "",
      game: n.name
    }),
    O = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: v,
      trackClick: E
    } = (0, u.Rg)(d.n0.RequestToStream, {
      notif_type: d.n0.RequestToStream,
      notif_user_id: t.id,
      activity_type: f.mFx.STREAM_REQUEST,
      activity_name: g.name
    });
  return {
    icon: O,
    title: b,
    body: y,
    confirmText: p.intl.string(m.default.UGbmBp),
    cancelText: p.intl.string(p.t["tpXzJ+"]),
    onNotificationShow: () => {
      v()
    },
    onConfirmClick: (e, t) => {
      let n = o.Z.getState().preset;
      if (n === h.ApplicationStreamPresets.PRESET_DOCUMENTS) {
        let {
          allowAutoQuality: e
        } = (0, a.IK)({
          location: "requestToStreamNotification"
        });
        n = e ? h.ApplicationStreamPresets.PRESET_AUTO : h.ApplicationStreamPresets.PRESET_VIDEO
      }(0, l.Z)(c.Z.getTargetPID(), {
        preset: n
      }), E("request-to-stream"), i.Z.updateNotificationStatus(t)
    },
    onCancelClick: (t, n) => {
      (0, r.ack)(e.id, {
        section: f.jXE.OVERLAY,
        object: f.qAy.ACK_DECLINE_REQUEST_TO_STREAM,
        objectType: f.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true), i.Z.updateNotificationStatus(n), E("decline")
    },
    onDismissClick: () => {
      E("dismiss")
    }
  }
}