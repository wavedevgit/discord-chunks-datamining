/** Chunk was on 77687 **/
/** chunk id: 341354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => P
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
  Chunk222311 = require("./222311.jsx"),
  Chunk803664 = require("./803664.jsx"),
  Chunk29293 = require("./29293.jsx"),
  Chunk509302 = require("./509302.js"),
  Chunk497600 = require("./497600.jsx"),
  Chunk239211 = require("./239211.jsx"),
  Chunk707378 = require("./707378.jsx"),
  Chunk399476 = require("./399476.jsx"),
  Chunk889460 = require("./889460.jsx"),
  Chunk460597 = require("./460597.js"),
  Chunk198229 = require("./198229.jsx"),
  Chunk243949 = require("./243949.jsx"),
  Chunk972432 = require("./972432.jsx"),
  Chunk77544 = require("./77544.jsx"),
  Chunk571964 = require("./571964.jsx"),
  Chunk708653 = require("./708653.jsx"),
  Chunk297460 = require("./297460.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let P = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    guildId: n,
    channelId: o,
    showMediaItems: a = false,
    mediaEngineContext: d,
    onSelect: P,
    onInteraction: w,
    appContext: k = _.BRT.OVERLAY,
    friendGroupId: M,
    showManageFriendGroupsItems: C = false,
    onMessageUser: L,
    widgetType: U
  } = e, V = (0, h.A)({
    userId: t.id,
    guildId: n,
    channelId: o
  }), R = (0, S.A)({
    kind: "DM_USER",
    userId: t.id,
    onOpenOverride: L
  }, U), {
    toggleFavoriteItem: G
  } = (0, x.As)(t.id, U), T = (0, v.A)({
    user: t
  }), F = (0, g.A)({
    user: t,
    guildId: n,
    channelId: o,
    context: k
  }), B = (0, f.A)({
    user: t
  }), H = (0, I.A)({
    user: t,
    groupId: M
  }), X = (0, D.A)(t.id), Y = (0, j.A)(t.id), W = (0, m.A)(t.id, d), K = (0, y.A)({
    user: t
  }), Z = (0, u.A)(null, t), J = (0, A.A)({
    user: t
  }), q = (0, b.A)({
    user: t
  }), $ = (0, E.A)({
    user: t
  }), z = (0, p.A)({
    user: t
  }), Q = (0, O.A)({
    user: t
  }), ee = (0, s.A)({
    id: t.id,
    label: N.intl.string(N.t["/AXYnE"])
  }), et = (0, c.A)(t), en = t.isNonUserBot();
  return (0, r.jsxs)(l.W1t, {
    navId: "overlay-user-context",
    onClose: i.Z_,
    "aria-label": N.intl.string(N.t.liqwPJ),
    onSelect: P,
    onInteraction: w,
    children: [!en && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.rXV, {
        children: et
      }), (0, r.jsxs)(l.rXV, {
        children: [V, R, G, T, F, B, C ? H : null, X]
      }), a && (0, r.jsx)(l.rXV, {
        children: Y
      }), (0, r.jsx)(l.rXV, {
        children: Z
      }), (0, r.jsxs)(l.rXV, {
        children: [a && W, K, J, q, $, Q, z]
      })]
    }), (0, r.jsx)(l.rXV, {
      children: ee
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.OVERLAY, Chunk793574.A.USER_GENERIC_MENU])