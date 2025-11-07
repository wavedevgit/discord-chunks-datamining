/** Chunk was on 7717 **/
/** chunk id: 757387, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  default: () => B
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk947440 = require("./947440.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk434500 = require("./434500.jsx"),
  Chunk441061 = require("./441061.jsx"),
  Chunk167675 = require("./167675.jsx"),
  Chunk737013 = require("./737013.jsx"),
  Chunk607783 = require("./607783.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk976192 = require("./976192.jsx"),
  Chunk882188 = require("./882188.jsx"),
  Chunk819403 = require("./819403.jsx"),
  Chunk286694 = require("./286694.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk777658 = require("./777658.jsx"),
  Chunk858488 = require("./858488.jsx"),
  Chunk185457 = require("./185457.jsx"),
  Chunk933409 = require("./933409.jsx"),
  Chunk570870 = require("./570870.jsx"),
  Chunk389052 = require("./389052.jsx"),
  Chunk24311 = require("./24311.jsx"),
  Chunk332576 = require("./332576.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk710631 = require("./710631.jsx"),
  Chunk297047 = require("./297047.jsx"),
  Chunk88966 = require("./88966.jsx"),
  Chunk712301 = require("./712301.jsx"),
  Chunk558924 = require("./558924.jsx"),
  Chunk991307 = require("./991307.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk931617 = require("./931617.jsx"),
  Chunk700994 = require("./700994.jsx"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let B = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: l,
    guildId: n,
    channel: s,
    showMediaItems: a = false,
    showChatItems: u = true,
    showChannelCallItems: B = false,
    showModalItems: F = true,
    showStageChannelItems: X = false,
    context: Y,
    onSelect: K,
    onHeightUpdate: W,
    viewingChannelId: J,
    onInteraction: $
  } = e, z = s.id, ee = {
    page: H.ZY5.GUILD_CHANNEL,
    section: H.jXE.CHAT_USERNAME,
    object: H.qAy.CONTEXT_MENU_ITEM
  }, el = (0, w.Z)({
    userId: l.id,
    guildId: n,
    channelId: z,
    showGuildProfile: true
  }), en = (0, U.Z)(l, n, Y), et = (0, R.Z)(l.id, Y), er = (0, D.Z)(l.id), ei = (0, I.Z)({
    user: l,
    context: Y
  }), ed = (0, x.Z)({
    user: l,
    guildId: n,
    channelId: z,
    context: Y
  }), es = (0, S.Z)({
    user: l
  }), ea = (0, Q.Z)(l.id), eo = (0, q.Z)(l.id), ec = (0, b.B)({
    userId: l.id,
    channelId: z,
    guildId: s.getGuildId()
  }), eu = (0, E.Z)({
    guildId: n,
    userId: l.id,
    analyticsLocation: ee,
    context: Y
  }), eZ = (0, A.Z)({
    user: l,
    guildId: n
  }), eg = (0, c.Z)(null, l), eh = (0, m.Z)({
    user: l
  }), ef = (0, v.Z)({
    user: l,
    guildId: n,
    channelId: z,
    location: "GuildChannelUserContextMenu"
  }), eb = (0, k.Z)({
    user: l,
    guildId: n,
    channelId: z,
    location: "GuildChannelUserContextMenu"
  }), ej = (0, y.Z)(l, n, z), eE = (0, L.Z)(l.id, n), eO = (0, T.Z)(l, n), ep = (0, j.Z)({
    id: l.id,
    label: V.intl.string(V.t["/AXYnE"])
  }), eP = (0, _.Z)(l.id, z), eN = (0, h.Z)(l.id), eC = (0, g.Z)(z), em = (0, p.Z)(l), eS = (0, P.Z)(l, n, z), ex = (0, Z.Z)(z, l.id), ey = (0, r.e7)([N.Z], () => null != J ? N.Z.getChannel(J) : null), eM = (0, M.Z)({
    commandType: o.yU.USER,
    commandTargetId: l.id,
    channel: null != ey ? ey : s,
    guildId: n,
    onHeightUpdate: W,
    context: Y
  }), ev = (0, f.Z)(l.id), eI = (0, r.e7)([C.Z], () => C.Z.getVoiceChannelId()), e_ = (0, G.Z)(l, eI), ek = (0, O.Z)(l.id, s), eA = l.isNonUserBot();
  return (0, t.jsxs)(i.v2r, {
    navId: "user-context",
    onClose: d.Zy,
    "aria-label": V.intl.string(V.t.liqwPJ),
    onSelect: K,
    onInteraction: $,
    children: [!eA && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsxs)(i.kSQ, {
        children: [em, a && !X && ek, X && eS]
      }), (0, t.jsxs)(i.kSQ, {
        children: [F && el, u && en, et, ei, e_, F && ed, F && es, er]
      }), a && (0, t.jsx)(i.kSQ, {
        children: ea
      }), (0, t.jsx)(i.kSQ, {
        children: F && eg
      }), (0, t.jsxs)(i.kSQ, {
        children: [a && eo, a && ec, a && eP, F && eu, eM, F && eZ, eh, F && eb, F && ef, B && ev]
      }), (0, t.jsx)(i.kSQ, {
        children: ej
      }), (0, t.jsxs)(i.kSQ, {
        children: [eE, eO]
      }), B && (0, t.jsxs)(i.kSQ, {
        children: [ex, eC, eN]
      })]
    }), (0, t.jsx)(i.kSQ, {
      children: ep
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GUILD_CHANNEL_USER_MENU])