/** Chunk was on 70675 **/
/** chunk id: 654663, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => D
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
let D = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: n,
    guildId: t,
    channel: o,
    context: u,
    onSelect: d,
    onHeightUpdate: D
  } = e, G = o.id, L = (0, A.Z)({
    userId: n.id,
    guildId: t,
    channelId: G
  }), V = (0, E.Z)(n, t, u), q = (0, C.Z)(n.id, u), W = (0, k.Z)(n.id), H = (0, _.Z)({
    user: n,
    context: u
  }), B = (0, i.e7)([m.Z, p.Z], () => {
    let e = m.Z.getVoiceChannelId();
    return p.Z.getChannel(e)
  }), {
    enabled: K
  } = f.Z.useExperiment({
    guildId: null == B ? true : B.guild_id,
    location: "ThreadUserContextMenu"
  }), F = K ? null == B ? true : B.id : null, Q = (0, T.Z)(n, F), Y = (0, P.Z)({
    user: n,
    guildId: t,
    channelId: G,
    context: u
  }), X = (0, h.Z)({
    user: n
  }), J = (0, Z.Z)({
    guildId: t,
    userId: n.id,
    analyticsLocation: {
      page: M.ZY5.GUILD_CHANNEL,
      section: M.jXE.CHAT_USERNAME,
      object: M.qAy.CONTEXT_MENU_ITEM
    },
    context: u
  }), z = (0, N.Z)({
    user: n,
    guildId: t
  }), $ = (0, c.Z)(null, n), ee = (0, O.Z)({
    user: n
  }), en = (0, j.Z)({
    user: n
  }), et = (0, S.Z)({
    user: n
  }), el = (0, x.Z)({
    user: n,
    guildId: t,
    channelId: G,
    location: "ThreadUserContextMenu"
  }), ei = (0, y.Z)({
    user: n,
    guildId: t,
    channelId: G,
    location: "ThreadUserContextMenu"
  }), er = (0, U.Z)(n, t, G), ea = (0, w.Z)(n.id, t), eo = (0, I.Z)(n, t), eu = (0, g.Z)({
    id: n.id,
    label: R.intl.string(R.t["/AXYnJ"])
  }), es = (0, b.Z)(n), ec = (0, v.Z)({
    commandType: s.yU.USER,
    commandTargetId: n.id,
    channel: o,
    guildId: t,
    onHeightUpdate: D
  }), ed = n.isNonUserBot();
  return (0, l.jsxs)(r.v2r, {
    navId: "user-context",
    onClose: a.Zy,
    "aria-label": R.intl.string(R.t.liqwPD),
    onSelect: d,
    children: [!ed && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(r.kSQ, {
        children: es
      }), (0, l.jsxs)(r.kSQ, {
        children: [L, V, q, H, Q, Y, X, W]
      }), (0, l.jsx)(r.kSQ, {
        children: $
      }), (0, l.jsxs)(r.kSQ, {
        children: [J, ec, z, ee, en, et, ei, el]
      }), (0, l.jsx)(r.kSQ, {
        children: er
      }), (0, l.jsxs)(r.kSQ, {
        children: [ea, eo]
      })]
    }), (0, l.jsx)(r.kSQ, {
      children: eu
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.THREAD_USER_MENU])