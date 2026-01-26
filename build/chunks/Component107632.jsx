/** Chunk was on 84841 **/
/** chunk id: 107632, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => F
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk468389 = require("./468389.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk810845 = require("./810845.jsx"),
  Chunk854182 = require("./854182.jsx"),
  Chunk734337 = require("./734337.jsx"),
  Chunk855187 = require("./855187.jsx"),
  Chunk479335 = require("./479335.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk346247 = require("./346247.jsx"),
  Chunk235052 = require("./235052.jsx"),
  Chunk222311 = require("./222311.jsx"),
  Chunk237749 = require("./237749.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk803664 = require("./803664.jsx"),
  Chunk29293 = require("./29293.jsx"),
  Chunk497600 = require("./497600.jsx"),
  Chunk291247 = require("./291247.jsx"),
  Chunk773699 = require("./773699.jsx"),
  Chunk239211 = require("./239211.jsx"),
  Chunk707378 = require("./707378.jsx"),
  Chunk984894 = require("./984894.jsx"),
  Chunk399476 = require("./399476.jsx"),
  Chunk889460 = require("./889460.jsx"),
  Chunk448290 = require("./448290.jsx"),
  Chunk301541 = require("./301541.jsx"),
  Chunk252726 = require("./252726.jsx"),
  Chunk313998 = require("./313998.jsx"),
  Chunk198229 = require("./198229.jsx"),
  Chunk243949 = require("./243949.jsx"),
  Chunk180798 = require("./180798.jsx"),
  Chunk972432 = require("./972432.jsx"),
  Chunk77544 = require("./77544.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let F = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    guildId: l,
    channel: a,
    showMediaItems: c = false,
    showChatItems: u = true,
    showChannelCallItems: F = false,
    showModalItems: J = true,
    showStageChannelItems: W = false,
    context: Q,
    onSelect: Y,
    onHeightUpdate: Z,
    viewingChannelId: q,
    onInteraction: $
  } = e, z = a.id, ee = {
    page: H.liQ.GUILD_CHANNEL,
    section: H.JJy.CHAT_USERNAME,
    object: H.ZSU.CONTEXT_MENU_ITEM
  }, et = (0, L.A)({
    userId: t.id,
    guildId: l,
    channelId: z,
    showGuildProfile: true
  }), el = (0, T.A)(t, l, Q), en = (0, R.A)(t.id, Q), ei = (0, X.A)(t.id), er = (0, P.A)({
    user: t,
    context: Q
  }), eo = (0, N.A)({
    user: t,
    guildId: l,
    channelId: z,
    context: Q
  }), ea = (0, M.A)({
    user: t
  }), ec = (0, k.A)(t.id), ed = (0, B.A)(t.id), es = (0, f.u)({
    userId: t.id,
    channelId: z,
    guildId: a.getGuildId()
  }), eu = (0, y.A)({
    guildId: l,
    userId: t.id,
    analyticsLocation: ee,
    context: Q
  }), eA = (0, _.A)({
    user: t,
    guildId: l
  }), eg = (0, s.A)(null, t), ep = (0, x.A)({
    user: t
  }), eb = (0, I.A)({
    user: t,
    guildId: l,
    channelId: z,
    location: "GuildChannelUserContextMenu"
  }), ef = (0, S.A)({
    user: t,
    guildId: l,
    channelId: z,
    location: "GuildChannelUserContextMenu"
  }), eh = (0, v.A)(t, l, z), ey = (0, w.A)(t.id, l), eO = (0, D.A)(t, l), ej = (0, h.A)({
    id: t.id,
    label: K.intl.string(K.t["/AXYnE"])
  }), eC = (0, U.A)(t.id, z), eE = (0, p.A)(t.id), em = (0, g.A)(z), ex = (0, j.A)(t), eM = (0, C.A)(t, l, z), eN = (0, A.A)(z, t.id), ev = (0, i.bG)([E.A], () => null != q ? E.A.getChannel(q) : null), eG = (0, G.A)({
    commandType: d.kc.USER,
    commandTargetId: t.id,
    channel: null != ev ? ev : a,
    guildId: l,
    onHeightUpdate: Z,
    context: Q
  }), eI = (0, b.A)(t.id), eP = (0, i.bG)([m.A], () => m.A.getVoiceChannelId()), eU = (0, V.A)(t, eP), eS = (0, O.A)(t.id, a), e_ = t.isNonUserBot();
  return (0, n.jsxs)(r.W1t, {
    "data-menu-needs-review": true,
    navId: "user-context",
    onClose: o.Z_,
    "aria-label": K.intl.string(K.t.liqwPJ),
    onSelect: Y,
    onInteraction: $,
    children: [!e_ && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(r.rXV, {
        children: [ex, c && !W && eS, W && eM]
      }), (0, n.jsxs)(r.rXV, {
        children: [J && et, u && el, en, er, eU, J && eo, J && ea, ei]
      }), c && (0, n.jsx)(r.rXV, {
        children: ec
      }), (0, n.jsx)(r.rXV, {
        children: J && eg
      }), (0, n.jsxs)(r.rXV, {
        children: [c && ed, c && es, c && eC, F && eI, J && eu, eG, J && eA, ep, J && ef, J && eb]
      }), (0, n.jsxs)(r.rXV, {
        children: [ey, eO]
      }), F && (0, n.jsxs)(r.rXV, {
        children: [eN, em, eE]
      }), (0, n.jsx)(r.rXV, {
        children: eh
      })]
    }), (0, n.jsx)(r.rXV, {
      children: ej
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.GUILD_CHANNEL_USER_MENU])