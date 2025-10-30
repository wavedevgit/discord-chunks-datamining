/** Chunk was on 97826 **/
/** chunk id: 354589, original params: e,n,r (module,exports,require) **/
require.d(exports, {
  default: () => G
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
let G = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var n;
  let {
    user: r,
    channel: l,
    context: a,
    showChatItems: u = true,
    showMediaItems: z = false,
    showChannelCallItems: G = false,
    showModalItems: L = true,
    onSelect: q,
    onHeightUpdate: B,
    onInteraction: X
  } = e, Y = (0, R.Z)({
    userId: r.id,
    guildId: null
  }), H = (0, S.Z)(r, null, a), J = (0, i.e7)([j.Z, x.Z], () => {
    let e = j.Z.getVoiceChannelId();
    return x.Z.getChannel(e)
  }), {
    enabled: K
  } = Z.Z.useExperiment({
    guildId: null == J ? true : J.guild_id,
    location: "GroupDMUserContextMenu"
  }), V = K ? null == J ? true : J.id : l.id, $ = (0, D.Z)(r, V), ee = (0, T.Z)(r.id, a), en = (0, y.Z)({
    user: r,
    context: a
  }), er = (0, I.Z)({
    user: r,
    channelId: l.id,
    context: a
  }), et = (0, v.Z)({
    user: r
  }), ei = (0, W.Z)(r.id), es = (0, U.Z)(r.id, l.id), eo = (0, Q.Z)(r.id), el = (0, b.B)({
    userId: r.id,
    channelId: l.id,
    guildId: l.getGuildId()
  }), ea = (0, k.Z)(r.id, l.id), ed = (0, N.Z)({
    user: r
  }), ec = (0, c.Z)(null, r), eu = (0, _.Z)({
    user: r
  }), em = (0, O.Z)({
    user: r
  }), ep = (0, M.Z)({
    user: r
  }), eh = (0, w.Z)({
    user: r,
    location: "GroupDMUserContextMenu"
  }), eb = (0, E.Z)({
    user: r,
    location: "GroupDMUserContextMenu"
  }), eg = (0, g.Z)({
    id: r.id,
    label: F.intl.string(F.t["/AXYnE"])
  }), ef = (0, A.Z)(r.id), eZ = (0, p.Z)(r.id), ex = (0, m.Z)(l.id), ej = (0, f.Z)(r), e_ = (0, h.Z)(r.id), ev = (0, C.Z)({
    commandType: d.yU.USER,
    commandTargetId: r.id,
    channel: l,
    guildId: true,
    onHeightUpdate: B
  }), eO = (0, P.Z)(r, l), eI = r.isNonUserBot(), eC = l.isManaged(), ew = null == (n = l.recipients) ? true : n.includes(r.id);
  return (0, t.jsxs)(s.v2r, {
    navId: "user-context",
    onClose: o.Zy,
    "aria-label": F.intl.string(F.t.liqwPJ),
    onSelect: q,
    onInteraction: X,
    children: [!eI && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(s.kSQ, {
        children: ej
      }), (0, t.jsxs)(s.kSQ, {
        children: [L && Y, u && H, ee, en, !eC && $, L && er, L && et, ef]
      }), z && (0, t.jsx)(s.kSQ, {
        children: ei
      }), ew && (0, t.jsxs)(s.kSQ, {
        children: [!eC && es, eO]
      }), (0, t.jsx)(s.kSQ, {
        children: L && ec
      }), (0, t.jsxs)(s.kSQ, {
        children: [z && eo, z && el, z && ea, ev, L && ed, eu, em, ep, L && eb, L && eh, z && e_]
      }), G && (0, t.jsxs)(s.kSQ, {
        children: [ex, eZ]
      })]
    }), (0, t.jsx)(s.kSQ, {
      children: eg
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_USER_MENU])