/** Chunk was on 78086 **/
/** chunk id: 354589, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => B
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
let B = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var n;
  let {
    user: t,
    channel: a,
    context: c,
    showChatItems: d = true,
    showMediaItems: G = false,
    showChannelCallItems: B = false,
    showModalItems: K = true,
    onSelect: H,
    onHeightUpdate: Q,
    onInteraction: q
  } = e, Y = (0, R.Z)({
    userId: t.id,
    guildId: null
  }), F = (0, w.Z)(t, null, c), z = (0, i.e7)([_.Z, y.Z], () => {
    let e = _.Z.getVoiceChannelId();
    return y.Z.getChannel(e)
  }), {
    enabled: X
  } = v.Z.useExperiment({
    guildId: null == z ? true : z.guild_id,
    location: "GroupDMUserContextMenu"
  }), J = X ? null == z ? true : z.id : a.id, $ = (0, U.Z)(t, J), ee = (0, N.Z)(t.id, c), en = (0, x.Z)({
    user: t,
    context: c
  }), et = (0, j.Z)({
    user: t,
    channelId: a.id,
    context: c
  }), er = (0, E.Z)({
    user: t
  }), ei = (0, L.Z)(t.id), el = (0, D.Z)(t.id, a.id), eo = (0, k.Z)(t.id), ea = (0, g.B)({
    userId: t.id,
    channelId: a.id,
    guildId: a.getGuildId()
  }), ec = (0, I.Z)(t.id, a.id), es = (0, C.Z)({
    user: t
  }), eu = (0, u.Z)(null, t), ed = (0, O.Z)({
    user: t
  }), ef = (0, Z.Z)({
    user: t
  }), eh = (0, M.Z)({
    user: t
  }), ep = (0, S.Z)({
    user: t,
    location: "GroupDMUserContextMenu"
  }), eg = (0, P.Z)({
    user: t,
    location: "GroupDMUserContextMenu"
  }), eb = (0, b.Z)({
    id: t.id,
    label: W.intl.string(W.t["/AXYnJ"])
  }), em = (0, V.Z)(t.id), ev = (0, h.Z)(t.id), ey = (0, f.Z)(a.id), e_ = (0, m.Z)(t), eO = (0, p.Z)(t.id), eE = (0, T.Z)({
    commandType: s.yU.USER,
    commandTargetId: t.id,
    channel: a,
    guildId: true,
    onHeightUpdate: Q
  }), eZ = (0, A.Z)(t, a), ej = t.isNonUserBot(), eT = a.isManaged(), eS = null == (n = a.recipients) ? true : n.includes(t.id);
  return (0, r.jsxs)(l.v2r, {
    navId: "user-context",
    onClose: o.Zy,
    "aria-label": W.intl.string(W.t.liqwPD),
    onSelect: H,
    onInteraction: q,
    children: [!ej && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.kSQ, {
        children: e_
      }), (0, r.jsxs)(l.kSQ, {
        children: [K && Y, d && F, ee, en, !eT && $, K && et, K && er, em]
      }), G && (0, r.jsx)(l.kSQ, {
        children: ei
      }), eS && (0, r.jsxs)(l.kSQ, {
        children: [!eT && el, eZ]
      }), (0, r.jsx)(l.kSQ, {
        children: K && eu
      }), (0, r.jsxs)(l.kSQ, {
        children: [G && eo, G && ea, G && ec, eE, K && es, ed, ef, eh, K && eg, K && ep, G && eO]
      }), B && (0, r.jsxs)(l.kSQ, {
        children: [ey, ev]
      })]
    }), (0, r.jsx)(l.kSQ, {
      children: eb
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_USER_MENU])