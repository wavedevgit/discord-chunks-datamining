/** Chunk was on 49062 **/
/** chunk id: 354589, original params: e,n,r (module,exports,require) **/
require.d(exports, {
  default: () => W
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
let W = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var n;
  let {
    user: r,
    channel: l,
    context: a,
    showChatItems: u = true,
    showMediaItems: G = false,
    showChannelCallItems: W = false,
    showModalItems: q = true,
    onSelect: B,
    onHeightUpdate: F,
    onInteraction: J
  } = e, X = (0, R.Z)({
    userId: r.id,
    guildId: null
  }), Y = (0, N.Z)(r, null, a), H = (0, i.e7)([x.Z, j.Z], () => {
    let e = x.Z.getVoiceChannelId();
    return j.Z.getChannel(e)
  }), {
    enabled: K
  } = Z.Z.useExperiment({
    guildId: null == H ? true : H.guild_id,
    location: "GroupDMUserContextMenu"
  }), V = K ? null == H ? true : H.id : l.id, $ = (0, D.Z)(r, V), ee = (0, S.Z)(r.id, a), en = (0, C.Z)({
    user: r,
    context: a
  }), er = (0, I.Z)({
    user: r,
    channelId: l.id,
    context: a
  }), et = (0, _.Z)({
    user: r
  }), ei = (0, A.Z)(r.id), es = (0, U.Z)(r.id, l.id), eo = (0, Q.Z)(r.id), el = (0, g.B)({
    userId: r.id,
    channelId: l.id,
    guildId: l.getGuildId()
  }), ea = (0, P.Z)(r.id, l.id), ed = (0, M.Z)({
    user: r
  }), ec = (0, c.Z)(null, r), eu = (0, v.Z)({
    user: r
  }), em = (0, O.Z)({
    user: r
  }), eh = (0, T.Z)({
    user: r
  }), eb = (0, y.Z)({
    user: r,
    location: "GroupDMUserContextMenu"
  }), eg = (0, E.Z)({
    user: r,
    location: "GroupDMUserContextMenu"
  }), ep = (0, p.Z)({
    id: r.id,
    label: L.intl.string(L.t["/AXYnJ"])
  }), ef = (0, z.Z)(r.id), eZ = (0, h.Z)(r.id), ej = (0, m.Z)(l.id), ex = (0, f.Z)(r), ev = (0, b.Z)(r.id), e_ = (0, w.Z)({
    commandType: d.yU.USER,
    commandTargetId: r.id,
    channel: l,
    guildId: true,
    onHeightUpdate: F
  }), eO = (0, k.Z)(r, l), eI = r.isNonUserBot(), ew = l.isManaged(), ey = null == (n = l.recipients) ? true : n.includes(r.id);
  return (0, t.jsxs)(s.v2r, {
    navId: "user-context",
    onClose: o.Zy,
    "aria-label": L.intl.string(L.t.liqwPD),
    onSelect: B,
    onInteraction: J,
    children: [!eI && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(s.kSQ, {
        children: ex
      }), (0, t.jsxs)(s.kSQ, {
        children: [q && X, u && Y, ee, en, !ew && $, q && er, q && et, ef]
      }), G && (0, t.jsx)(s.kSQ, {
        children: ei
      }), ey && (0, t.jsxs)(s.kSQ, {
        children: [!ew && es, eO]
      }), (0, t.jsx)(s.kSQ, {
        children: q && ec
      }), (0, t.jsxs)(s.kSQ, {
        children: [G && eo, G && el, G && ea, e_, q && ed, eu, em, eh, q && eg, q && eb, G && ev]
      }), W && (0, t.jsxs)(s.kSQ, {
        children: [ej, eZ]
      })]
    }), (0, t.jsx)(s.kSQ, {
      children: ep
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_USER_MENU])