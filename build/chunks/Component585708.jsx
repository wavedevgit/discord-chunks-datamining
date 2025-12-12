/** Chunk was on 50751 **/
/** chunk id: 585708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk13245 = require("./13245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk937889 = require("./937889.js"),
  Chunk864060 = require("./864060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk460181 = require("./460181.js"),
  Chunk974180 = require("./974180.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk624864 = require("./624864.js"),
  Chunk610394 = require("./610394.js"),
  Chunk322155 = require("./322155.js"),
  Chunk516542 = require("./516542.jsx"),
  Chunk618373 = require("./618373.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n, _) {
  var S;
  if (p.Z.isNotificationDisabled(v.n0.TextChat)) return (0, c.GN)(u.Ay, u.yk), null;
  let {
    icon: x,
    title: I,
    body: C
  } = (0, a.Xi)(e, t, n), {
    trackView: j,
    trackClick: Z
  } = (0, O.Rg)(v.n0.TextChat, {
    notif_type: v.n0.TextChat,
    notif_user_id: null == (S = t.author) ? true : S.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    icon: x,
    title: I,
    body: t.content.length > 0 ? (0, o.ZP)(t, {
      noStyleAndInteraction: true,
      formatInline: true,
      hideSimpleEmbedContent: false
    }).content : C,
    hint: (e, t) => e && !t ? null : (0, y.QR)((0, O.Pb)(), b.t.ykjOAJ, b.intl.string(b.t.jZkzVJ)),
    maxBodyLines: 2,
    renderFooter: (n, r, l) => n && !l ? (0, i.jsx)(g.Z, {
      id: r,
      replyToMessageId: t.id,
      channel: e,
      onSend: () => Z("send")
    }) : null,
    onNotificationShow: () => {
      _ && (0, c.GN)(u.Ay, u.yk), j()
    },
    onNotificationClick: () => {
      let n = f.Z.getTargetPID();
      (0, l.ack)(e.id, {
        section: E.jXE.OVERLAY,
        object: E.qAy.ACK_TEXT_CHAT_NOTIFICATION,
        objectType: E.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true, t.id), m.Z.isInputLocked(n) ? (Z("unlock"), r.Z.setInputLocked(false, n)) : (Z("jump"), (0, s.uL)(E.Z5c.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && h.ZP.focus())
    },
    onDismissClick: () => {
      Z("dismiss")
    }
  }
}