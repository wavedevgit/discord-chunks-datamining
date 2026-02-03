/** Chunk was on 71447 **/
/** chunk id: 965082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
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
  Chunk203982 = require("./203982.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk41984 = require("./41984.js"),
  Chunk589051 = require("./589051.js"),
  Chunk592598 = require("./592598.js"),
  Chunk395011 = require("./395011.js"),
  Chunk222506 = require("./222506.js"),
  Chunk145567 = require("./145567.js"),
  Chunk378702 = require("./378702.jsx"),
  Chunk119191 = require("./119191.jsx"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function I(e, t, n, I) {
  var j;
  if (m.A.isNotificationDisabled(x.KS.TextChat)) return (0, u.Ak)(c.cH, c.pD), null;
  let {
    icon: T,
    title: C,
    body: N
  } = (0, s.TB)(e, t, n), {
    trackView: w,
    trackClick: P
  } = (0, O.Y9)(x.KS.TextChat, {
    notif_type: x.KS.TextChat,
    notif_user_id: null == (j = t.author) ? true : j.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  }), {
    hasChat: D
  } = (0, g.NI)("textChatNotification");
  return {
    icon: T,
    title: C,
    body: t.content.length > 0 ? (0, a.Ay)(t, {
      noStyleAndInteraction: true,
      formatInline: true,
      hideSimpleEmbedContent: false
    }).content : N,
    hint: (e, t) => e || !t ? null : (0, E.sI)((0, O.Jn)(), S.t.ykjOAJ, S.intl.string(S.t.jZkzVJ)),
    maxBodyLines: 2,
    renderFooter: (n, r, l) => D ? null : n && !l ? (0, i.jsx)(b.A, {
      id: r,
      replyToMessageId: t.id,
      channel: e,
      onSend: () => P("send")
    }) : null,
    onNotificationShow: () => {
      I && (0, u.Ak)(c.cH, c.pD), w()
    },
    onNotificationClick: (n, i) => {
      let a = y.A.getTargetPID();
      if ((0, l.ack)(e.id, {
          section: _.JJy.OVERLAY,
          object: _.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
          objectType: _.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
        }, true, true, t.id), D) {
        var s;
        (0, v.D$)({
          target: {
            kind: v.bB.CHANNEL,
            channelId: e.id,
            guildId: null != (s = e.guild_id) ? s : null,
            messageId: t.id
          },
          source: f.B9.NOTIFICATION_CLICK,
          widgetType: _.uss.NOTIFICATIONS
        }), A.A.isInputLocked(a) ? (P("unlock"), r.A.setInputLocked(false, a)) : P("jump"), requestAnimationFrame(() => {
          d._.dispatchToLastSubscribed(_.jej.TEXTAREA_FOCUS, {
            channelId: e.id
          })
        }), r.A.updateNotificationStatus(i, _.yFH.DISMISSED);
        return
      }
      A.A.isInputLocked(a) ? (P("unlock"), r.A.setInputLocked(false, a)) : (P("jump"), (0, o.pX)(_.BVt.CHANNEL(e.guild_id, e.id, t.id)), h.isPlatformEmbedded && p.Ay.focus())
    },
    onDismissClick: () => {
      P("dismiss")
    }
  }
}