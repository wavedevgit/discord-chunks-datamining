/** Chunk was on 71447 **/
/** chunk id: 965082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk684013 = require("./684013.js"),
  Chunk334738 = require("./334738.js"),
  Chunk465364 = require("./465364.js"),
  Chunk742984 = require("./742984.js"),
  Chunk976860 = require("./976860.js"),
  Chunk400492 = require("./400492.js"),
  Chunk845618 = require("./845618.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk592598 = require("./592598.js"),
  Chunk395011 = require("./395011.js"),
  Chunk222506 = require("./222506.js"),
  Chunk378702 = require("./378702.jsx"),
  Chunk119191 = require("./119191.jsx"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t, n, b) {
  var S;
  if (h.A.isNotificationDisabled(O.KS.TextChat)) return (0, c.Ak)(u.cH, u.pD), null;
  let {
    icon: x,
    title: j,
    body: I
  } = (0, o.TB)(e, t, n), {
    trackView: N,
    trackClick: w
  } = (0, A.Y9)(O.KS.TextChat, {
    notif_type: O.KS.TextChat,
    notif_user_id: null == (S = t.author) ? true : S.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    icon: x,
    title: j,
    body: t.content.length > 0 ? (0, a.Ay)(t, {
      noStyleAndInteraction: true,
      formatInline: true,
      hideSimpleEmbedContent: false
    }).content : I,
    hint: (e, t) => e && !t ? null : (0, y.sI)((0, A.Jn)(), v.t.ykjOAJ, v.intl.string(v.t.jZkzVJ)),
    maxBodyLines: 2,
    renderFooter: (n, r, l) => n && !l ? (0, i.jsx)(g.A, {
      id: r,
      replyToMessageId: t.id,
      channel: e,
      onSend: () => w("send")
    }) : null,
    onNotificationShow: () => {
      b && (0, c.Ak)(u.cH, u.pD), N()
    },
    onNotificationClick: () => {
      let n = f.A.getTargetPID();
      (0, l.ack)(e.id, {
        section: E.JJy.OVERLAY,
        object: E.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
        objectType: E.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true, t.id), m.A.isInputLocked(n) ? (w("unlock"), r.A.setInputLocked(false, n)) : (w("jump"), (0, s.pX)(E.BVt.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && p.Ay.focus())
    },
    onDismissClick: () => {
      w("dismiss")
    }
  }
}