/** Chunk was on 7717 **/
/** chunk id: 757387, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  default: () => B
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    guildId: t,
    channel: s,
    showMediaItems: o = false,
    showChatItems: c = true,
    showChannelCallItems: B = false,
    showModalItems: F = true,
    showStageChannelItems: K = false,
    context: X,
    onSelect: Y,
    onHeightUpdate: W,
    viewingChannelId: J,
    onInteraction: $
  } = e, z = s.id, ee = {
    page: V.ZY5.GUILD_CHANNEL,
    section: V.jXE.CHAT_USERNAME,
    object: V.qAy.CONTEXT_MENU_ITEM
  }, el = (0, q.Z)({
    userId: l.id,
    guildId: t,
    channelId: z,
    showGuildProfile: true
  }), et = (0, T.Z)(l, t, X), en = (0, U.Z)(l.id, X), ei = (0, D.Z)(l.id), er = (0, x.Z)({
    user: l,
    context: X
  }), ea = (0, M.Z)({
    user: l,
    guildId: t,
    channelId: z,
    context: X
  }), es = (0, I.Z)({
    user: l
  }), eo = (0, Q.Z)(l.id), ed = (0, L.Z)(l.id), eu = (0, p.B)({
    userId: l.id,
    channelId: z,
    guildId: s.getGuildId()
  }), ec = (0, P.Z)({
    guildId: t,
    userId: l.id,
    analyticsLocation: ee,
    context: X
  }), eZ = (0, k.Z)({
    user: l,
    guildId: t
  }), eg = (0, u.Z)(null, l), eh = (0, m.Z)({
    user: l
  }), ef = (0, v.Z)({
    user: l,
    guildId: t,
    channelId: z,
    location: "GuildChannelUserContextMenu"
  }), ep = (0, _.Z)({
    user: l,
    guildId: t,
    channelId: z,
    location: "GuildChannelUserContextMenu"
  }), eb = (0, S.Z)(l, t, z), eP = (0, w.Z)(l.id, t), ej = (0, R.Z)(l, t), eO = (0, b.Z)({
    id: l.id,
    label: H.intl.string(H.t["/AXYnE"])
  }), eE = (0, A.Z)(l.id, z), eN = (0, h.Z)(l.id), eC = (0, g.Z)(z), em = (0, O.Z)(l), eI = (0, E.Z)(l, t, z), eM = (0, Z.Z)(z, l.id), eS = (0, i.e7)([N.Z], () => null != J ? N.Z.getChannel(J) : null), ey = (0, y.Z)({
    commandType: d.yU.USER,
    commandTargetId: l.id,
    channel: null != eS ? eS : s,
    guildId: t,
    onHeightUpdate: W,
    context: X
  }), ev = (0, f.Z)(l.id), ex = (0, i.e7)([C.Z], () => C.Z.getVoiceChannelId()), eA = (0, G.Z)(l, ex), e_ = (0, j.Z)(l.id, s), ek = l.isNonUserBot();
  return (0, n.jsxs)(r.v2r, {
    navId: "user-context",
    onClose: a.Zy,
    "aria-label": H.intl.string(H.t.liqwPJ),
    onSelect: Y,
    onInteraction: $,
    children: [!ek && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(r.kSQ, {
        children: [em, o && !K && e_, K && eI]
      }), (0, n.jsxs)(r.kSQ, {
        children: [F && el, c && et, en, er, eA, F && ea, F && es, ei]
      }), o && (0, n.jsx)(r.kSQ, {
        children: eo
      }), (0, n.jsx)(r.kSQ, {
        children: F && eg
      }), (0, n.jsxs)(r.kSQ, {
        children: [o && ed, o && eu, o && eE, F && ec, ey, F && eZ, eh, F && ep, F && ef, B && ev]
      }), (0, n.jsx)(r.kSQ, {
        children: eb
      }), (0, n.jsxs)(r.kSQ, {
        children: [eP, ej]
      }), B && (0, n.jsxs)(r.kSQ, {
        children: [eM, eC, eN]
      })]
    }), (0, n.jsx)(r.kSQ, {
      children: eO
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GUILD_CHANNEL_USER_MENU])