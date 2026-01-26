/** Chunk was on 91042 **/
/** chunk id: 365689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => L
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
  Chunk346247 = require("./346247.jsx"),
  Chunk700210 = require("./700210.jsx"),
  Chunk803664 = require("./803664.jsx"),
  Chunk29293 = require("./29293.jsx"),
  Chunk509302 = require("./509302.js"),
  Chunk497600 = require("./497600.jsx"),
  Chunk291247 = require("./291247.jsx"),
  Chunk239211 = require("./239211.jsx"),
  Chunk707378 = require("./707378.jsx"),
  Chunk399476 = require("./399476.jsx"),
  Chunk889460 = require("./889460.jsx"),
  Chunk448290 = require("./448290.jsx"),
  Chunk301541 = require("./301541.jsx"),
  Chunk252726 = require("./252726.jsx"),
  Chunk460597 = require("./460597.js"),
  Chunk198229 = require("./198229.jsx"),
  Chunk243949 = require("./243949.jsx"),
  Chunk180798 = require("./180798.jsx"),
  Chunk972432 = require("./972432.jsx"),
  Chunk77544 = require("./77544.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let L = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    guildId: n,
    showModalItems: a = true,
    showMediaItems: o = false,
    showChatItems: d = true,
    context: L,
    onSelect: U
  } = e, N = {
    page: T.liQ.GUILD_CHANNEL,
    section: T.JJy.CHAT_USERNAME,
    object: T.ZSU.CONTEXT_MENU_ITEM
  }, G = (0, D.A)({
    userId: t.id,
    guildId: n
  }), R = (0, h.A)(t, n, L), B = (0, j.A)(t.id, L), w = (0, P.A)(t.id), V = (0, y.A)({
    user: t,
    context: L
  }), k = (0, m.A)({
    user: t,
    guildId: n,
    context: L
  }), F = (0, g.A)({
    user: t
  }), K = (0, I.A)(t.id), X = (0, M.A)(t.id), W = (0, c.A)({
    guildId: n,
    userId: t.id,
    analyticsLocation: N,
    context: L
  }), H = (0, A.A)({
    user: t,
    guildId: n
  }), Y = (0, E.A)({
    user: t,
    guildId: n
  }), J = (0, s.A)(null, t), q = (0, b.A)({
    user: t
  }), Z = (0, f.A)({
    user: t
  }), z = (0, S.A)({
    user: t
  }), $ = (0, O.A)({
    user: t,
    guildId: n,
    location: "GuildUserContextMenu"
  }), Q = (0, v.A)({
    user: t,
    guildId: n,
    location: "GuildUserContextMenu"
  }), ee = (0, p.A)(t, n), et = (0, C.A)(t.id, n), en = (0, x.A)(t, n), el = (0, u.A)({
    id: t.id,
    label: _.intl.string(_.t["/AXYnE"])
  }), er = t.isNonUserBot();
  return (0, l.jsxs)(r.W1t, {
    "data-menu-mixed": true,
    navId: "user-context",
    onClose: i.Z_,
    "aria-label": _.intl.string(_.t.liqwPJ),
    onSelect: U,
    children: [!er && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(r.rXV, {
        children: [a && G, d && R, B, V, a && k, a && F, w]
      }), o && (0, l.jsx)(r.rXV, {
        children: K
      }), (0, l.jsx)(r.rXV, {
        children: a && J
      }), (0, l.jsxs)(r.rXV, {
        children: [o && X, a && W, a && Y, q, Z, z, H, a && Q, a && $]
      }), (0, l.jsx)(r.rXV, {
        children: ee
      }), (0, l.jsxs)(r.rXV, {
        children: [et, en]
      })]
    }), (0, l.jsx)(r.rXV, {
      children: el
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.GUILD_USER_MENU])