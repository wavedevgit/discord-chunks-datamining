/** Chunk was on 7717 **/
/** chunk id: 757387, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  default: () => V
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
let V = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: l,
    guildId: n,
    channel: s,
    showMediaItems: o = false,
    showChatItems: u = true,
    showChannelCallItems: V = false,
    showModalItems: B = true,
    showStageChannelItems: F = false,
    context: X,
    onSelect: Y,
    onHeightUpdate: K,
    viewingChannelId: W,
    onInteraction: J
  } = e, $ = s.id, z = {
    page: Q.ZY5.GUILD_CHANNEL,
    section: Q.jXE.CHAT_USERNAME,
    object: Q.qAy.CONTEXT_MENU_ITEM
  }, ee = (0, G.Z)({
    userId: l.id,
    guildId: n,
    channelId: $,
    showGuildProfile: true
  }), el = (0, A.Z)(l, n, X), en = (0, U.Z)(l.id, X), et = (0, D.Z)(l.id), er = (0, v.Z)({
    user: l,
    context: X
  }), ei = (0, S.Z)({
    user: l,
    guildId: n,
    channelId: $,
    context: X
  }), ed = (0, m.Z)({
    user: l
  }), es = (0, L.Z)(l.id), eo = (0, q.Z)(l.id), ea = (0, f.B)({
    userId: l.id,
    channelId: $,
    guildId: s.getGuildId()
  }), ec = (0, j.Z)({
    guildId: n,
    userId: l.id,
    analyticsLocation: z,
    context: X
  }), eu = (0, k.Z)({
    user: l,
    guildId: n
  }), eZ = (0, c.Z)(null, l), eg = (0, C.Z)({
    user: l
  }), eh = (0, y.Z)({
    user: l,
    guildId: n,
    channelId: $,
    location: "GuildChannelUserContextMenu"
  }), ef = (0, _.Z)({
    user: l,
    guildId: n,
    channelId: $,
    location: "GuildChannelUserContextMenu"
  }), eb = (0, x.Z)(l, n, $), ej = (0, w.Z)(l.id, n), eO = (0, R.Z)(l, n), ep = (0, b.Z)({
    id: l.id,
    label: H.intl.string(H.t["/AXYnJ"])
  }), eE = (0, I.Z)(l.id, $), eP = (0, g.Z)(l.id), eN = (0, Z.Z)($), eC = (0, p.Z)(l), em = (0, E.Z)(l, n, $), eS = (0, r.e7)([P.Z], () => null != W ? P.Z.getChannel(W) : null), ex = (0, M.Z)({
    commandType: a.yU.USER,
    commandTargetId: l.id,
    channel: null != eS ? eS : s,
    guildId: n,
    onHeightUpdate: K,
    context: X
  }), eM = (0, h.Z)(l.id), ey = (0, r.e7)([N.Z], () => N.Z.getVoiceChannelId()), ev = (0, T.Z)(l, ey), eI = (0, O.Z)(l.id, s), e_ = l.isNonUserBot();
  return (0, t.jsxs)(i.v2r, {
    navId: "user-context",
    onClose: d.Zy,
    "aria-label": H.intl.string(H.t.liqwPD),
    onSelect: Y,
    onInteraction: J,
    children: [!e_ && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsxs)(i.kSQ, {
        children: [eC, o && !F && eI, F && em]
      }), (0, t.jsxs)(i.kSQ, {
        children: [B && ee, u && el, en, er, ev, B && ei, B && ed, et]
      }), o && (0, t.jsx)(i.kSQ, {
        children: es
      }), (0, t.jsx)(i.kSQ, {
        children: B && eZ
      }), (0, t.jsxs)(i.kSQ, {
        children: [o && eo, o && ea, o && eE, B && ec, ex, B && eu, eg, B && ef, B && eh, V && eM]
      }), (0, t.jsx)(i.kSQ, {
        children: eb
      }), (0, t.jsxs)(i.kSQ, {
        children: [ej, eO]
      }), V && (0, t.jsxs)(i.kSQ, {
        children: [eN, eP]
      })]
    }), (0, t.jsx)(i.kSQ, {
      children: ep
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GUILD_CHANNEL_USER_MENU])