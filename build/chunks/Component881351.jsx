/** Chunk was on 69220 **/
/** chunk id: 881351, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => N
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk947440 = require("./947440.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk482798 = require("./482798.js"),
  Chunk819403 = require("./819403.jsx"),
  Chunk777658 = require("./777658.jsx"),
  Chunk858488 = require("./858488.jsx"),
  Chunk44652 = require("./44652.js"),
  Chunk185457 = require("./185457.jsx"),
  Chunk389052 = require("./389052.jsx"),
  Chunk24311 = require("./24311.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk710631 = require("./710631.jsx"),
  Chunk426040 = require("./426040.jsx"),
  Chunk88966 = require("./88966.jsx"),
  Chunk47091 = require("./47091.js"),
  Chunk991307 = require("./991307.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk700994 = require("./700994.jsx"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let N = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    guildId: n,
    channelId: o,
    showMediaItems: a = false,
    mediaEngineContext: d,
    onSelect: N,
    onInteraction: U,
    appContext: _ = I.IlC.APP,
    friendGroupId: k
  } = e, {
    enableTopNavButton: D
  } = (0, c.Cq)({
    location: "user-context-menu"
  }), w = (0, S.Z)({
    userId: t.id,
    guildId: n,
    channelId: o
  }), L = (0, y.Z)(t.id, _), T = (0, m.Z)({
    user: t
  }), M = (0, p.Z)({
    user: t,
    guildId: n,
    channelId: o,
    context: _
  }), V = (0, Z.Z)({
    user: t
  }), G = (0, j.Z)({
    user: t,
    groupId: k
  }), F = (0, C.Z)(t.id), R = (0, E.Z)(t.id), B = (0, x.Z)(t.id, d), W = (0, h.Z)({
    user: t
  }), H = (0, u.Z)(null, t), Q = (0, g.Z)({
    user: t
  }), q = (0, b.Z)({
    user: t
  }), K = (0, P.Z)({
    user: t
  }), Y = (0, v.Z)({
    user: t
  }), J = (0, O.Z)({
    user: t
  }), X = (0, s.Z)({
    id: t.id,
    label: A.intl.string(A.t["/AXYnE"])
  }), z = (0, f.Z)(t), $ = t.isNonUserBot();
  return (0, i.jsxs)(l.v2r, {
    navId: "user-context",
    onClose: r.Zy,
    "aria-label": A.intl.string(A.t.liqwPJ),
    onSelect: N,
    onInteraction: U,
    children: [!$ && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.kSQ, {
        children: z
      }), (0, i.jsxs)(l.kSQ, {
        children: [w, L, T, M, V, D ? G : null, F]
      }), a && (0, i.jsx)(l.kSQ, {
        children: R
      }), (0, i.jsx)(l.kSQ, {
        children: H
      }), (0, i.jsxs)(l.kSQ, {
        children: [a && B, W, Q, q, K, J, Y]
      })]
    }), (0, i.jsx)(l.kSQ, {
      children: X
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.USER_GENERIC_MENU])