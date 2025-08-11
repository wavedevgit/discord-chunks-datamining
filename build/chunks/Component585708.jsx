/** Chunk was on 89298 **/
/** chunk id: 585708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk13245 = require("./13245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk937889 = require("./937889.js"),
  Chunk864060 = require("./864060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk460181 = require("./460181.js"),
  Chunk974180 = require("./974180.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk610394 = require("./610394.js"),
  Chunk516542 = require("./516542.jsx"),
  Chunk618373 = require("./618373.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E(e, t, n, E) {
  var _;
  let {
    icon: x,
    title: S,
    body: I
  } = (0, a.Xi)(e, t, n), {
    trackView: j,
    trackClick: C
  } = (0, y.R)(O.n0.TextChat, {
    notif_type: O.n0.TextChat,
    notif_user_id: null == (_ = t.author) ? true : _.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    icon: x,
    title: S,
    body: t.content.length > 0 ? (0, l.ZP)(t, {
      noStyleAndInteraction: true,
      formatInline: true,
      hideSimpleEmbedContent: false
    }).content : I,
    hint: (e, t) => e && !t ? null : (0, g.Q)((0, y.P)(), v.t.ykjOAA, v.intl.string(v.t.jZkzVF)),
    maxBodyLines: 2,
    renderFooter: (n, r, o) => n && !o ? (0, i.jsx)(m.Z, {
      id: r,
      replyToMessageId: t.id,
      channel: e,
      onSend: () => C("send")
    }) : null,
    onNotificationShow: () => {
      E && (0, c.GN)(u.Ay, u.yk), j()
    },
    onNotificationClick: () => {
      let n = (0, f.getPID)();
      (0, o.In)(e.id, {
        section: b.jXE.OVERLAY,
        object: b.qAy.ACK_TEXT_CHAT_NOTIFICATION,
        objectType: b.Qqv.ACK_SEMI_AUTOMATIC
      }, true, true, t.id), h.ZP.isInputLocked(n) ? (C("unlock"), r.Z.setInputLocked(false, n)) : (C("jump"), (0, s.uL)(b.Z5c.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && p.ZP.focus())
    },
    onDismissClick: () => {
      C("dismiss")
    }
  }
}