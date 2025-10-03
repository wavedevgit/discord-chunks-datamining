/** Chunk was on 50751 **/
/** chunk id: 585708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function S(e, t, n, S) {
  var b;
  let {
    icon: x,
    title: j,
    body: I
  } = (0, a.Xi)(e, t, n), {
    trackView: C,
    trackClick: Z
  } = (0, y.R)(O.n0.TextChat, {
    notif_type: O.n0.TextChat,
    notif_user_id: null == (b = t.author) ? true : b.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    icon: x,
    title: j,
    body: t.content.length > 0 ? (0, o.ZP)(t, {
      noStyleAndInteraction: true,
      formatInline: true,
      hideSimpleEmbedContent: false
    }).content : I,
    hint: (e, t) => e && !t ? null : (0, g.Q)((0, y.P)(), v.t.ykjOAA, v.intl.string(v.t.jZkzVF)),
    maxBodyLines: 2,
    renderFooter: (n, r, l) => n && !l ? (0, i.jsx)(m.Z, {
      id: r,
      replyToMessageId: t.id,
      channel: e,
      onSend: () => Z("send")
    }) : null,
    onNotificationShow: () => {
      S && (0, u.GN)(c.Ay, c.yk), C()
    },
    onNotificationClick: () => {
      let n = (0, p.getPID)();
      (0, l.In)(e.id, {
        section: E.jXE.OVERLAY,
        object: E.qAy.ACK_TEXT_CHAT_NOTIFICATION,
        objectType: E.Qqv.ACK_SEMI_AUTOMATIC
      }, true, true, t.id), f.ZP.isInputLocked(n) ? (Z("unlock"), r.Z.setInputLocked(false, n)) : (Z("jump"), (0, s.uL)(E.Z5c.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && h.ZP.focus())
    },
    onDismissClick: () => {
      Z("dismiss")
    }
  }
}