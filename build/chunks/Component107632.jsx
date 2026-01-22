/** Chunk was on 84841 **/
/** chunk id: 107632, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => Y
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
let Y = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    guildId: l,
    channel: d,
    showMediaItems: s = false,
    showChatItems: u = true,
    showChannelCallItems: Y = false,
    showModalItems: F = true,
    showStageChannelItems: J = false,
    context: W,
    onSelect: Q,
    onHeightUpdate: Z,
    viewingChannelId: q,
    onInteraction: $
  } = e, z = d.id, ee = {
    page: H.liQ.GUILD_CHANNEL,
    section: H.JJy.CHAT_USERNAME,
    object: H.ZSU.CONTEXT_MENU_ITEM
  }, et = (0, L.A)({
    userId: t.id,
    guildId: l,
    channelId: z,
    showGuildProfile: true
  }), el = (0, T.A)(t, l, W), en = (0, R.A)(t.id, W), ei = (0, X.A)(t.id), er = (0, v.A)({
    user: t,
    context: W
  }), ea = (0, M.A)({
    user: t,
    guildId: l,
    channelId: z,
    context: W
  }), ed = (0, N.A)({
    user: t
  }), es = (0, w.A)(t.id), ec = (0, B.A)(t.id), eo = (0, h.u)({
    userId: t.id,
    channelId: z,
    guildId: d.getGuildId()
  }), eu = (0, O.A)({
    guildId: l,
    userId: t.id,
    analyticsLocation: ee,
    context: W
  }), eA = (0, _.A)({
    user: t,
    guildId: l
  }), eg = (0, o.A)(null, t), ep = (0, x.A)({
    user: t
  }), eb = (0, P.A)({
    user: t,
    guildId: l,
    channelId: z,
    location: "GuildChannelUserContextMenu"
  }), eh = (0, S.A)({
    user: t,
    guildId: l,
    channelId: z,
    location: "GuildChannelUserContextMenu"
  }), ef = (0, G.A)(t, l, z), eO = (0, k.A)(t.id, l), ej = (0, D.A)(t, l), em = (0, f.A)({
    id: t.id,
    label: K.intl.string(K.t["/AXYnE"])
  }), ey = (0, U.A)(t.id, z), eC = (0, p.A)(t.id), eE = (0, g.A)(z), ex = (0, m.A)(t), eN = (0, y.A)(t, l, z), eM = (0, A.A)(z, t.id), eG = (0, i.bG)([C.A], () => null != q ? C.A.getChannel(q) : null), eI = (0, I.A)({
    commandType: c.kc.USER,
    commandTargetId: t.id,
    channel: null != eG ? eG : d,
    guildId: l,
    onHeightUpdate: Z,
    context: W
  }), eP = (0, b.A)(t.id), ev = (0, i.bG)([E.A], () => E.A.getVoiceChannelId()), eU = (0, V.A)(t, ev), eS = (0, j.A)(t.id, d), e_ = t.isNonUserBot();
  return (0, n.jsxs)(r.W1t, {
    navId: "user-context",
    onClose: a.Z_,
    "aria-label": K.intl.string(K.t.liqwPJ),
    onSelect: Q,
    onInteraction: $,
    children: [!e_ && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(r.rXV, {
        children: [ex, s && !J && eS, J && eN]
      }), (0, n.jsxs)(r.rXV, {
        children: [F && et, u && el, en, er, eU, F && ea, F && ed, ei]
      }), s && (0, n.jsx)(r.rXV, {
        children: es
      }), (0, n.jsx)(r.rXV, {
        children: F && eg
      }), (0, n.jsxs)(r.rXV, {
        children: [s && ec, s && eo, s && ey, F && eu, eI, F && eA, ep, F && eh, F && eb, Y && eP]
      }), (0, n.jsx)(r.rXV, {
        children: ef
      }), (0, n.jsxs)(r.rXV, {
        children: [eO, ej]
      }), Y && (0, n.jsxs)(r.rXV, {
        children: [eM, eE, eC]
      })]
    }), (0, n.jsx)(r.rXV, {
      children: em
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.GUILD_CHANNEL_USER_MENU])