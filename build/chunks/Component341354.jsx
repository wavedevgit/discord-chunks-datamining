/** Chunk was on 77687 **/
/** chunk id: 341354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
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
let M = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    guildId: n,
    channelId: a,
    showMediaItems: o = false,
    mediaEngineContext: s,
    onSelect: M,
    onInteraction: P,
    appContext: w = _.BRT.OVERLAY,
    friendGroupId: k,
    showManageFriendGroupsItems: C = false,
    onMessageUser: L,
    widgetType: U
  } = e, R = (0, h.A)({
    userId: t.id,
    guildId: n,
    channelId: a
  }), V = (0, S.A)({
    kind: "DM_USER",
    userId: t.id,
    onOpenOverride: L
  }, U), {
    toggleFavoriteItem: T
  } = (0, x.As)(t.id, U), G = (0, v.A)({
    user: t
  }), F = (0, g.A)({
    user: t,
    guildId: n,
    channelId: a,
    context: w
  }), B = (0, f.A)({
    user: t
  }), H = (0, D.A)({
    user: t,
    groupId: k
  }), X = (0, I.A)(t.id), Y = (0, j.A)(t.id), W = (0, m.A)(t.id, s), K = (0, y.A)({
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
  }), ee = (0, d.A)({
    id: t.id,
    label: N.intl.string(N.t["/AXYnE"])
  }), et = (0, c.A)(t), en = t.isNonUserBot();
  return (0, r.jsxs)(i.W1t, {
    navId: "overlay-user-context",
    onClose: l.Z_,
    "aria-label": N.intl.string(N.t.liqwPJ),
    onSelect: M,
    onInteraction: P,
    children: [!en && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.rXV, {
        children: et
      }), (0, r.jsxs)(i.rXV, {
        children: [R, V, T, G, F, B, C ? H : null, X]
      }), o && (0, r.jsx)(i.rXV, {
        children: Y
      }), (0, r.jsx)(i.rXV, {
        children: Z
      }), (0, r.jsxs)(i.rXV, {
        children: [o && W, K, J, q, $, Q, z]
      })]
    }), (0, r.jsx)(i.rXV, {
      children: ee
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.OVERLAY, Chunk793574.A.USER_GENERIC_MENU])