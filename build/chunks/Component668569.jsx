/** Chunk was on 32418 **/
/** chunk id: 668569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk468389 = require("./468389.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk126904 = require("./126904.js"),
  Chunk222311 = require("./222311.jsx"),
  Chunk803664 = require("./803664.jsx"),
  Chunk29293 = require("./29293.jsx"),
  Chunk509302 = require("./509302.js"),
  Chunk497600 = require("./497600.jsx"),
  Chunk239211 = require("./239211.jsx"),
  Chunk707378 = require("./707378.jsx"),
  Chunk399476 = require("./399476.jsx"),
  Chunk889460 = require("./889460.jsx"),
  Chunk693227 = require("./693227.jsx"),
  Chunk301541 = require("./301541.jsx"),
  Chunk460597 = require("./460597.js"),
  Chunk198229 = require("./198229.jsx"),
  Chunk243949 = require("./243949.jsx"),
  Chunk972432 = require("./972432.jsx"),
  Chunk77544 = require("./77544.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let C = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    guildId: n,
    channelId: o,
    showMediaItems: a = false,
    mediaEngineContext: s,
    onSelect: C,
    onInteraction: L,
    appContext: I = _.BRT.APP,
    friendGroupId: T
  } = e, {
    enableTopNavButton: w
  } = (0, c.tR)({
    location: "user-context-menu"
  }), G = (0, P.A)({
    userId: t.id,
    guildId: n,
    channelId: o
  }), V = (0, y.A)(t.id, I), k = (0, v.A)({
    user: t
  }), M = (0, p.A)({
    user: t,
    guildId: n,
    channelId: o,
    context: I
  }), N = (0, f.A)({
    user: t
  }), R = (0, h.A)({
    user: t,
    groupId: T
  }), B = (0, S.A)(t.id), F = (0, D.A)(t.id), X = (0, E.A)(t.id, s), K = (0, j.A)({
    user: t
  }), W = (0, d.A)(null, t), H = (0, b.A)({
    user: t
  }), J = (0, g.A)({
    user: t
  }), Y = (0, x.A)({
    user: t
  }), q = (0, m.A)({
    user: t
  }), z = (0, O.A)({
    user: t
  }), Z = (0, u.A)({
    id: t.id,
    label: U.intl.string(U.t["/AXYnE"])
  }), Q = (0, A.A)(t), $ = t.isNonUserBot();
  return (0, r.jsxs)(i.W1t, {
    "data-menu-mixed": true,
    navId: "user-context",
    onClose: l.Z_,
    "aria-label": U.intl.string(U.t.liqwPJ),
    onSelect: C,
    onInteraction: L,
    children: [!$ && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.rXV, {
        children: Q
      }), (0, r.jsxs)(i.rXV, {
        children: [G, V, k, M, N, w ? R : null, B]
      }), a && (0, r.jsx)(i.rXV, {
        children: F
      }), (0, r.jsx)(i.rXV, {
        children: W
      }), (0, r.jsxs)(i.rXV, {
        children: [a && X, K, H, J, Y, z, q]
      })]
    }), (0, r.jsx)(i.rXV, {
      children: Z
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.USER_GENERIC_MENU])