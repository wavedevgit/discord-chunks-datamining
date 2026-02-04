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
  if (m.A.isNotificationDisabled(_.KS.TextChat)) return (0, u.Ak)(c.cH, c.pD), null;
  let {
    icon: C,
    title: T,
    body: w
  } = (0, o.TB)(e, t, n), {
    trackView: N,
    trackClick: P
  } = (0, E.Y9)(_.KS.TextChat, {
    notif_type: _.KS.TextChat,
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
    icon: C,
    title: T,
    body: t.content.length > 0 ? (0, a.Ay)(t, {
      noStyleAndInteraction: true,
      formatInline: true,
      hideSimpleEmbedContent: false
    }).content : w,
    hint: (e, t) => e || !t ? null : (0, b.sI)((0, E.Jn)(), x.t.ykjOAJ, x.intl.string(x.t.jZkzVJ)),
    maxBodyLines: 2,
    renderFooter: (n, r, l) => D ? null : n && !l ? (0, i.jsx)(v.A, {
      id: r,
      replyToMessageId: t.id,
      channel: e,
      onSend: () => P("send")
    }) : null,
    onNotificationShow: () => {
      I && (0, u.Ak)(c.cH, c.pD), N()
    },
    onNotificationClick: (n, i) => {
      let a = A.A.getTargetPID();
      if ((0, l.ack)(e.id, {
          section: S.JJy.OVERLAY,
          object: S.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
          objectType: S.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
        }, true, true, t.id), D) {
        var o;
        (0, O.D$)({
          target: {
            kind: O.bB.CHANNEL,
            channelId: e.id,
            guildId: null != (o = e.guild_id) ? o : null,
            messageId: t.id
          },
          source: f.B9.NOTIFICATION_CLICK,
          widgetType: S.uss.NOTIFICATIONS
        }), y.A.isInputLocked(a) ? (P("unlock"), r.A.setInputLocked(false, a)) : P("jump"), requestAnimationFrame(() => {
          d._.dispatchToLastSubscribed(S.jej.TEXTAREA_FOCUS, {
            channelId: e.id
          })
        }), r.A.updateNotificationStatus(i, S.yFH.DISMISSED);
        return
      }
      y.A.isInputLocked(a) ? (P("unlock"), r.A.setInputLocked(false, a)) : (P("jump"), (0, s.pX)(S.BVt.CHANNEL(e.guild_id, e.id, t.id)), h.isPlatformEmbedded && p.Ay.focus())
    },
    onDismissClick: () => {
      P("dismiss")
    }
  }
}