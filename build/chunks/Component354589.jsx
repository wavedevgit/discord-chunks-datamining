/** Chunk was on 70522 **/
/** chunk id: 354589, original params: e,n,r (module,exports,require) **/
require.d(exports, {
  default: () => L
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
  Chunk819403 = require("./819403.jsx"),
  Chunk163612 = require("./163612.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk777658 = require("./777658.jsx"),
  Chunk858488 = require("./858488.jsx"),
  Chunk44652 = require("./44652.js"),
  Chunk185457 = require("./185457.jsx"),
  Chunk570870 = require("./570870.jsx"),
  Chunk389052 = require("./389052.jsx"),
  Chunk24311 = require("./24311.jsx"),
  Chunk915193 = require("./915193.jsx"),
  Chunk332576 = require("./332576.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk710631 = require("./710631.jsx"),
  Chunk297047 = require("./297047.jsx"),
  Chunk88966 = require("./88966.jsx"),
  Chunk47091 = require("./47091.jsx"),
  Chunk397616 = require("./397616.jsx"),
  Chunk558924 = require("./558924.jsx"),
  Chunk991307 = require("./991307.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk700994 = require("./700994.jsx"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let L = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var n;
  let {
    user: r,
    channel: l,
    context: a,
    showChatItems: u = true,
    showMediaItems: F = false,
    showChannelCallItems: L = false,
    showModalItems: q = true,
    onSelect: B,
    onHeightUpdate: X,
    onInteraction: Y
  } = e, H = (0, W.Z)({
    userId: r.id,
    guildId: null
  }), J = (0, T.Z)(r, null, a), K = (0, i.e7)([_.Z, j.Z], () => {
    let e = _.Z.getVoiceChannelId();
    return j.Z.getChannel(e)
  }), {
    enabled: V
  } = x.Z.useExperiment({
    guildId: null == K ? true : K.guild_id,
    location: "GroupDMUserContextMenu"
  }), $ = V ? null == K ? true : K.id : l.id, ee = (0, Q.Z)(r, $), en = (0, M.Z)(r.id, a), er = (0, P.Z)({
    user: r,
    context: a
  }), et = (0, C.Z)({
    user: r,
    channelId: l.id,
    context: a
  }), ei = (0, O.Z)({
    user: r
  }), es = (0, A.Z)(r.id), eo = (0, D.Z)(r.id, l.id), el = (0, R.Z)(r.id), ea = (0, g.B)({
    userId: r.id,
    channelId: l.id,
    guildId: l.getGuildId()
  }), ed = (0, E.Z)(r.id, l.id), ec = (0, S.Z)({
    user: r
  }), eu = (0, c.Z)(null, r), em = (0, v.Z)({
    user: r
  }), ep = (0, I.Z)({
    user: r
  }), eh = (0, U.Z)({
    user: r
  }), eb = (0, y.Z)({
    user: r,
    location: "GroupDMUserContextMenu"
  }), eg = (0, N.Z)({
    user: r,
    location: "GroupDMUserContextMenu"
  }), ef = (0, f.Z)({
    id: r.id,
    label: G.intl.string(G.t["/AXYnE"])
  }), eZ = (0, z.Z)(r.id), ex = (0, h.Z)(r.id), ej = (0, p.Z)(l.id), e_ = (0, Z.Z)(r), ev = (0, b.Z)(r.id), eO = (0, m.Z)(l.id, r.id), eI = (0, w.Z)({
    commandType: d.yU.USER,
    commandTargetId: r.id,
    channel: l,
    guildId: true,
    onHeightUpdate: X
  }), eC = (0, k.Z)(r, l), ew = r.isNonUserBot(), ey = l.isManaged(), eP = null == (n = l.recipients) ? true : n.includes(r.id);
  return (0, t.jsxs)(s.v2r, {
    navId: "user-context",
    onClose: o.Zy,
    "aria-label": G.intl.string(G.t.liqwPJ),
    onSelect: B,
    onInteraction: Y,
    children: [!ew && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(s.kSQ, {
        children: e_
      }), (0, t.jsxs)(s.kSQ, {
        children: [q && H, u && J, en, er, !ey && ee, q && et, q && ei, eZ]
      }), F && (0, t.jsx)(s.kSQ, {
        children: es
      }), eP && (0, t.jsxs)(s.kSQ, {
        children: [!ey && eo, eC]
      }), (0, t.jsx)(s.kSQ, {
        children: q && eu
      }), (0, t.jsxs)(s.kSQ, {
        children: [F && el, F && ea, F && ed, eI, q && ec, em, ep, eh, q && eg, q && eb, F && ev]
      }), L && (0, t.jsxs)(s.kSQ, {
        children: [eO, ej, ex]
      })]
    }), (0, t.jsx)(s.kSQ, {
      children: ef
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_USER_MENU])