/** Chunk was on 71447 **/
/** chunk id: 533923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk684013 = require("./684013.js"),
  Chunk334738 = require("./334738.js"),
  Chunk258585 = require("./258585.js"),
  Chunk72432 = require("./72432.js"),
  Chunk929921 = require("./929921.js"),
  Chunk592598 = require("./592598.js"),
  Chunk395011 = require("./395011.js"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk753070 = require("./753070.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk426127 = require("./426127.js");

function m(e, t, n, m) {
  if (o.A.isNotificationDisabled(d.KS.RequestToStream)) return null;
  let y = t.username,
    A = f.intl.format(g.default.jTbTAF, {
      username: "",
      game: n.name
    }),
    v = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: b,
      trackClick: E
    } = (0, c.Y9)(d.KS.RequestToStream, {
      notif_type: d.KS.RequestToStream,
      notif_user_id: t.id,
      activity_type: h.xL.STREAM_REQUEST,
      activity_name: m.name
    });
  return {
    icon: v,
    title: y,
    body: A,
    confirmText: f.intl.string(g.default.UGbmBp),
    cancelText: f.intl.string(f.t["tpXzJ+"]),
    onNotificationShow: () => {
      b()
    },
    onConfirmClick: (e, t) => {
      let n = s.A.getState().preset;
      if (n === p.jQ.PRESET_DOCUMENTS) {
        let {
          allowAutoQuality: e
        } = (0, l.eO)({
          location: "requestToStreamNotification"
        });
        n = e ? p.jQ.PRESET_AUTO : p.jQ.PRESET_VIDEO
      }(0, a.A)(u.A.getTargetPID(), {
        preset: n
      }), E("request-to-stream"), i.A.updateNotificationStatus(t)
    },
    onCancelClick: (t, n) => {
      (0, r.ack)(e.id, {
        section: h.JJy.OVERLAY,
        object: h.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
        objectType: h.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true), i.A.updateNotificationStatus(n), E("decline")
    },
    onDismissClick: () => {
      E("dismiss")
    }
  }
}