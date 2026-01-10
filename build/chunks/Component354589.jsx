/** Chunk was on 60677 **/
/** chunk id: 354589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => G
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
  Chunk47091 = require("./47091.js"),
  Chunk397616 = require("./397616.jsx"),
  Chunk558924 = require("./558924.jsx"),
  Chunk991307 = require("./991307.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk700994 = require("./700994.jsx"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let G = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var t;
  let {
    user: n,
    channel: s,
    context: a,
    showChatItems: u = true,
    showMediaItems: F = false,
    showChannelCallItems: G = false,
    showModalItems: Y = true,
    onSelect: z,
    onHeightUpdate: J,
    onInteraction: W
  } = e, q = (0, V.Z)({
    userId: n.id,
    guildId: null
  }), X = (0, _.Z)(n, null, a), H = (0, r.e7)([O.Z, v.Z], () => {
    let e = O.Z.getVoiceChannelId();
    return v.Z.getChannel(e)
  }), {
    enabled: K
  } = j.Z.useExperiment({
    guildId: null == H ? true : H.guild_id,
    location: "GroupDMUserContextMenu"
  }), $ = K ? null == H ? true : H.id : s.id, ee = (0, L.Z)(n, $), et = (0, U.Z)(n.id, a), en = (0, S.Z)({
    user: n,
    context: a
  }), ei = (0, C.Z)({
    user: n,
    channelId: s.id,
    context: a
  }), er = (0, y.Z)({
    user: n
  }), el = (0, R.Z)(n.id), eo = (0, T.Z)(n.id, s.id), es = (0, A.Z)(n.id), ea = (0, p.B)({
    userId: n.id,
    channelId: s.id,
    guildId: s.getGuildId()
  }), ed = (0, w.Z)(n.id, s.id), ec = (0, N.Z)({
    user: n
  }), eu = (0, c.Z)(null, n), eg = (0, x.Z)({
    user: n
  }), ef = (0, I.Z)({
    user: n
  }), eZ = (0, k.Z)({
    user: n
  }), em = (0, E.Z)({
    user: n,
    location: "GroupDMUserContextMenu"
  }), ep = (0, D.Z)({
    user: n,
    location: "GroupDMUserContextMenu"
  }), eb = (0, b.Z)({
    id: n.id,
    label: Q.intl.string(Q.t["/AXYnE"])
  }), eh = (0, B.Z)(n.id), ej = (0, Z.Z)(n.id), ev = (0, f.Z)(s.id), eO = (0, h.Z)(n), ex = (0, m.Z)(n.id), ey = (0, g.Z)(s.id, n.id), eI = (0, P.Z)({
    commandType: d.yU.USER,
    commandTargetId: n.id,
    channel: s,
    guildId: true,
    onHeightUpdate: J
  }), eC = (0, M.Z)(n, s), eP = n.isNonUserBot(), eE = s.isManaged(), eS = null == (t = s.recipients) ? true : t.includes(n.id);
  return (0, i.jsxs)(l.v2r, {
    navId: "user-context",
    onClose: o.Zy,
    "aria-label": Q.intl.string(Q.t.liqwPJ),
    onSelect: z,
    onInteraction: W,
    children: [!eP && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.kSQ, {
        children: eO
      }), (0, i.jsxs)(l.kSQ, {
        children: [Y && q, u && X, et, en, !eE && ee, Y && ei, Y && er, eh]
      }), F && (0, i.jsx)(l.kSQ, {
        children: el
      }), eS && (0, i.jsxs)(l.kSQ, {
        children: [!eE && eo, eC]
      }), (0, i.jsx)(l.kSQ, {
        children: Y && eu
      }), (0, i.jsxs)(l.kSQ, {
        children: [F && es, F && ea, F && ed, eI, Y && ec, eg, ef, eZ, Y && ep, Y && em, F && ex]
      }), G && (0, i.jsxs)(l.kSQ, {
        children: [ey, ev, ej]
      })]
    }), (0, i.jsx)(l.kSQ, {
      children: eb
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_USER_MENU])