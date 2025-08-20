/** Chunk was on 74379 **/
/** chunk id: 354589, original params: e,n,t (module,exports,require) **/
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
    channel: s,
    context: a,
    showChatItems: u = true,
    showMediaItems: F = false,
    showChannelCallItems: B = false,
    showModalItems: H = true,
    onSelect: G,
    onHeightUpdate: K,
    onInteraction: W
  } = e, Y = (0, L.Z)({
    userId: t.id,
    guildId: null
  }), z = (0, k.Z)(t, null, a), J = (0, i.e7)([v.Z, Z.Z], () => {
    let e = v.Z.getVoiceChannelId();
    return Z.Z.getChannel(e)
  }), {
    enabled: X
  } = j.Z.useExperiment({
    guildId: null == J ? true : J.guild_id,
    location: "GroupDMUserContextMenu"
  }), q = X ? null == J ? true : J.id : s.id, $ = (0, U.Z)(t, q), ee = (0, N.Z)(t.id, a), en = (0, P.Z)({
    user: t,
    context: a
  }), et = (0, _.Z)({
    user: t,
    channelId: s.id,
    context: a
  }), er = (0, y.Z)({
    user: t
  }), ei = (0, R.Z)(t.id), el = (0, D.Z)(t.id, s.id), eo = (0, A.Z)(t.id), es = (0, p.B)({
    userId: t.id,
    channelId: s.id,
    guildId: s.getGuildId()
  }), ea = (0, I.Z)(t.id, s.id), ec = (0, T.Z)({
    user: t
  }), ed = (0, d.Z)(null, t), eu = (0, O.Z)({
    user: t
  }), ef = (0, x.Z)({
    user: t
  }), em = (0, M.Z)({
    user: t
  }), eb = (0, E.Z)({
    user: t,
    location: "GroupDMUserContextMenu"
  }), ep = (0, C.Z)({
    user: t,
    location: "GroupDMUserContextMenu"
  }), eg = (0, g.Z)({
    id: t.id,
    label: Q.intl.string(Q.t["/AXYnJ"])
  }), eh = (0, V.Z)(t.id), ej = (0, m.Z)(t.id), eZ = (0, f.Z)(s.id), ev = (0, h.Z)(t), eO = (0, b.Z)(t.id), ey = (0, w.Z)({
    commandType: c.yU.USER,
    commandTargetId: t.id,
    channel: s,
    guildId: true,
    onHeightUpdate: K
  }), ex = (0, S.Z)(t, s), e_ = t.isNonUserBot(), ew = s.isManaged(), eE = null == (n = s.recipients) ? true : n.includes(t.id);
  return (0, r.jsxs)(l.v2r, {
    navId: "user-context",
    onClose: o.Zy,
    "aria-label": Q.intl.string(Q.t.liqwPD),
    onSelect: G,
    onInteraction: W,
    children: [!e_ && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.kSQ, {
        children: ev
      }), (0, r.jsxs)(l.kSQ, {
        children: [H && Y, u && z, ee, en, !ew && $, H && et, H && er, eh]
      }), F && (0, r.jsx)(l.kSQ, {
        children: ei
      }), eE && (0, r.jsxs)(l.kSQ, {
        children: [!ew && el, ex]
      }), (0, r.jsx)(l.kSQ, {
        children: H && ed
      }), (0, r.jsxs)(l.kSQ, {
        children: [F && eo, F && es, F && ea, ey, H && ec, eu, ef, em, H && ep, H && eb, F && eO]
      }), B && (0, r.jsxs)(l.kSQ, {
        children: [eZ, ej]
      })]
    }), (0, r.jsx)(l.kSQ, {
      children: eg
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_USER_MENU])