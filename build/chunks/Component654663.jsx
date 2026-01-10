/** Chunk was on 70675 **/
/** chunk id: 654663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => q
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
  Chunk47091 = require("./47091.js"),
  Chunk558924 = require("./558924.jsx"),
  Chunk520063 = require("./520063.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk931617 = require("./931617.jsx"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let q = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    guildId: n,
    channel: a,
    context: s,
    onSelect: q,
    onHeightUpdate: L
  } = e, G = a.id, H = (0, _.Z)({
    userId: t.id,
    guildId: n,
    channelId: G
  }), Q = (0, x.Z)(t, n, s), V = (0, M.Z)(t.id, s), B = (0, k.Z)(t.id), F = (0, v.Z)({
    user: t,
    context: s
  }), K = (0, r.e7)([p.Z, h.Z], () => {
    let e = p.Z.getVoiceChannelId();
    return h.Z.getChannel(e)
  }), {
    enabled: W
  } = O.Z.useExperiment({
    guildId: null == K ? true : K.guild_id,
    location: "ThreadUserContextMenu"
  }), X = W ? null == K ? true : K.id : null, Y = (0, A.Z)(t, X), J = (0, y.Z)({
    user: t,
    guildId: n,
    channelId: G,
    context: s
  }), $ = (0, m.Z)({
    user: t
  }), {
    analyticsLocations: z
  } = (0, Z.ZP)(c.Z.THREAD_USER_MENU), ee = (0, f.Z)({
    guildId: n,
    userId: t.id,
    analyticsLocation: {
      page: R.ZY5.GUILD_CHANNEL,
      section: R.jXE.CHAT_USERNAME,
      object: R.qAy.CONTEXT_MENU_ITEM
    },
    analyticsLocations: z,
    context: s
  }), et = (0, C.Z)({
    user: t,
    guildId: n
  }), en = (0, d.Z)(null, t), el = (0, P.Z)({
    user: t
  }), er = (0, j.Z)({
    user: t
  }), ei = (0, I.Z)({
    user: t
  }), eo = (0, N.Z)({
    user: t,
    guildId: n,
    channelId: G,
    location: "ThreadUserContextMenu"
  }), ea = (0, S.Z)({
    user: t,
    guildId: n,
    channelId: G,
    location: "ThreadUserContextMenu"
  }), es = (0, U.Z)(t, n, G), eu = (0, w.Z)(t.id, n), ed = (0, T.Z)(t, n), ec = (0, g.Z)({
    id: t.id,
    label: D.intl.string(D.t["/AXYnE"])
  }), eZ = (0, b.Z)(t), eg = (0, E.Z)({
    commandType: u.yU.USER,
    commandTargetId: t.id,
    channel: a,
    guildId: n,
    onHeightUpdate: L
  }), ef = t.isNonUserBot();
  return (0, l.jsxs)(i.v2r, {
    navId: "user-context",
    onClose: o.Zy,
    "aria-label": D.intl.string(D.t.liqwPJ),
    onSelect: q,
    children: [!ef && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.kSQ, {
        children: eZ
      }), (0, l.jsxs)(i.kSQ, {
        children: [H, Q, V, F, Y, J, $, B]
      }), (0, l.jsx)(i.kSQ, {
        children: en
      }), (0, l.jsxs)(i.kSQ, {
        children: [ee, eg, et, el, er, ei, ea, eo]
      }), (0, l.jsx)(i.kSQ, {
        children: es
      }), (0, l.jsxs)(i.kSQ, {
        children: [eu, ed]
      })]
    }), (0, l.jsx)(i.kSQ, {
      children: ec
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.THREAD_USER_MENU])