/** Chunk was on 70675 **/
/** chunk id: 654663, original params: e,n,t (module,exports,require) **/
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
  Chunk906732 = require("./906732.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk976192 = require("./976192.jsx"),
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
  Chunk158508 = require("./158508.jsx"),
  Chunk710631 = require("./710631.jsx"),
  Chunk297047 = require("./297047.jsx"),
  Chunk88966 = require("./88966.jsx"),
  Chunk712301 = require("./712301.jsx"),
  Chunk47091 = require("./47091.jsx"),
  Chunk558924 = require("./558924.jsx"),
  Chunk520063 = require("./520063.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk931617 = require("./931617.jsx"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let G = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: n,
    guildId: t,
    channel: o,
    context: u,
    onSelect: G,
    onHeightUpdate: L
  } = e, V = o.id, q = (0, w.Z)({
    userId: n.id,
    guildId: t,
    channelId: V
  }), H = (0, C.Z)(n, t, u), W = (0, I.Z)(n.id, u), B = (0, M.Z)(n.id), K = (0, y.Z)({
    user: n,
    context: u
  }), F = (0, i.e7)([O.Z, m.Z], () => {
    let e = O.Z.getVoiceChannelId();
    return m.Z.getChannel(e)
  }), {
    enabled: Q
  } = p.Z.useExperiment({
    guildId: null == F ? true : F.guild_id,
    location: "ThreadUserContextMenu"
  }), Y = Q ? null == F ? true : F.id : null, X = (0, U.Z)(n, Y), J = (0, v.Z)({
    user: n,
    guildId: t,
    channelId: V,
    context: u
  }), z = (0, j.Z)({
    user: n
  }), {
    analyticsLocations: $
  } = (0, g.ZP)(d.Z.THREAD_USER_MENU), ee = (0, b.Z)({
    guildId: t,
    userId: n.id,
    analyticsLocation: {
      page: R.ZY5.GUILD_CHANNEL,
      section: R.jXE.CHAT_USERNAME,
      object: R.qAy.CONTEXT_MENU_ITEM
    },
    analyticsLocations: $,
    context: u
  }), en = (0, E.Z)({
    user: n,
    guildId: t
  }), et = (0, c.Z)(null, n), el = (0, h.Z)({
    user: n
  }), ei = (0, P.Z)({
    user: n
  }), er = (0, T.Z)({
    user: n
  }), ea = (0, _.Z)({
    user: n,
    guildId: t,
    channelId: V,
    location: "ThreadUserContextMenu"
  }), eo = (0, N.Z)({
    user: n,
    guildId: t,
    channelId: V,
    location: "ThreadUserContextMenu"
  }), eu = (0, A.Z)(n, t, V), es = (0, k.Z)(n.id, t), ec = (0, S.Z)(n, t), ed = (0, Z.Z)({
    id: n.id,
    label: D.intl.string(D.t["/AXYnJ"])
  }), eg = (0, f.Z)(n), eZ = (0, x.Z)({
    commandType: s.yU.USER,
    commandTargetId: n.id,
    channel: o,
    guildId: t,
    onHeightUpdate: L
  }), eb = n.isNonUserBot();
  return (0, l.jsxs)(r.v2r, {
    navId: "user-context",
    onClose: a.Zy,
    "aria-label": D.intl.string(D.t.liqwPD),
    onSelect: G,
    children: [!eb && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(r.kSQ, {
        children: eg
      }), (0, l.jsxs)(r.kSQ, {
        children: [q, H, W, K, X, J, z, B]
      }), (0, l.jsx)(r.kSQ, {
        children: et
      }), (0, l.jsxs)(r.kSQ, {
        children: [ee, eZ, en, el, ei, er, eo, ea]
      }), (0, l.jsx)(r.kSQ, {
        children: eu
      }), (0, l.jsxs)(r.kSQ, {
        children: [es, ec]
      })]
    }), (0, l.jsx)(r.kSQ, {
      children: ed
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.THREAD_USER_MENU])