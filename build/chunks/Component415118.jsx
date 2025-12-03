/** Chunk was on 26976 **/
/** chunk id: 415118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
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
  Chunk976192 = require("./976192.jsx"),
  Chunk276022 = require("./276022.jsx"),
  Chunk777658 = require("./777658.jsx"),
  Chunk858488 = require("./858488.jsx"),
  Chunk44652 = require("./44652.js"),
  Chunk185457 = require("./185457.jsx"),
  Chunk933409 = require("./933409.jsx"),
  Chunk389052 = require("./389052.jsx"),
  Chunk24311 = require("./24311.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk710631 = require("./710631.jsx"),
  Chunk297047 = require("./297047.jsx"),
  Chunk88966 = require("./88966.jsx"),
  Chunk712301 = require("./712301.jsx"),
  Chunk47091 = require("./47091.js"),
  Chunk991307 = require("./991307.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk931617 = require("./931617.jsx"),
  Chunk700994 = require("./700994.jsx"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    guildId: n,
    showModalItems: o = true,
    showMediaItems: a = false,
    showChatItems: u = true,
    context: T,
    onSelect: D
  } = e, U = {
    page: _.ZY5.GUILD_CHANNEL,
    section: _.jXE.CHAT_USERNAME,
    object: _.qAy.CONTEXT_MENU_ITEM
  }, L = (0, I.Z)({
    userId: t.id,
    guildId: n
  }), w = (0, P.Z)(t, n, T), k = (0, p.Z)(t.id, T), R = (0, N.Z)(t.id), B = (0, E.Z)({
    user: t,
    context: T
  }), V = (0, m.Z)({
    user: t,
    guildId: n,
    context: T
  }), q = (0, f.Z)({
    user: t
  }), G = (0, x.Z)(t.id), F = (0, C.Z)(t.id), Y = (0, c.Z)({
    guildId: n,
    userId: t.id,
    analyticsLocation: U,
    context: T
  }), K = (0, g.Z)({
    user: t,
    guildId: n
  }), Q = (0, j.Z)({
    user: t,
    guildId: n
  }), H = (0, s.Z)(null, t), W = (0, Z.Z)({
    user: t
  }), X = (0, b.Z)({
    user: t
  }), J = (0, y.Z)({
    user: t
  }), z = (0, h.Z)({
    user: t,
    guildId: n,
    location: "GuildUserContextMenu"
  }), $ = (0, v.Z)({
    user: t,
    guildId: n,
    location: "GuildUserContextMenu"
  }), ee = (0, O.Z)(t, n), et = (0, M.Z)(t.id, n), en = (0, S.Z)(t, n), el = (0, d.Z)({
    id: t.id,
    label: A.intl.string(A.t["/AXYnE"])
  }), ei = t.isNonUserBot();
  return (0, l.jsxs)(i.v2r, {
    navId: "user-context",
    onClose: r.Zy,
    "aria-label": A.intl.string(A.t.liqwPJ),
    onSelect: D,
    children: [!ei && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(i.kSQ, {
        children: [o && L, u && w, k, B, o && V, o && q, R]
      }), a && (0, l.jsx)(i.kSQ, {
        children: G
      }), (0, l.jsx)(i.kSQ, {
        children: o && H
      }), (0, l.jsxs)(i.kSQ, {
        children: [a && F, o && Y, o && Q, W, X, J, K, o && $, o && z]
      }), (0, l.jsx)(i.kSQ, {
        children: ee
      }), (0, l.jsxs)(i.kSQ, {
        children: [et, en]
      })]
    }), (0, l.jsx)(i.kSQ, {
      children: el
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GUILD_USER_MENU])