/** Chunk was on 71447 **/
/** chunk id: 533923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e, t, n, g) {
  if (s.A.isNotificationDisabled(d.KS.RequestToStream)) return null;
  let y = t.username,
    A = f.intl.format(m.default.jTbTAF, {
      username: "",
      game: n.name
    }),
    O = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: E,
      trackClick: v
    } = (0, u.Y9)(d.KS.RequestToStream, {
      notif_type: d.KS.RequestToStream,
      notif_user_id: t.id,
      activity_type: p.xL.STREAM_REQUEST,
      activity_name: g.name
    });
  return {
    icon: O,
    title: y,
    body: A,
    confirmText: f.intl.string(m.default.UGbmBp),
    cancelText: f.intl.string(f.t["tpXzJ+"]),
    onNotificationShow: () => {
      E()
    },
    onConfirmClick: (e, t) => {
      let n = o.A.getState().preset;
      if (n === h.jQ.PRESET_DOCUMENTS) {
        let {
          allowAutoQuality: e
        } = (0, l.eO)({
          location: "requestToStreamNotification"
        });
        n = e ? h.jQ.PRESET_AUTO : h.jQ.PRESET_VIDEO
      }(0, a.A)(c.A.getTargetPID(), {
        preset: n
      }), v("request-to-stream"), i.A.updateNotificationStatus(t)
    },
    onCancelClick: (t, n) => {
      (0, r.ack)(e.id, {
        section: p.JJy.OVERLAY,
        object: p.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
        objectType: p.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true), i.A.updateNotificationStatus(n), v("decline")
    },
    onDismissClick: () => {
      v("dismiss")
    }
  }
}