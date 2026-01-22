/** Chunk was on 84841 **/
/** chunk id: 107632, original params: e,t,n (module,exports,require) **/
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
    guildId: n,
    channel: d,
    showMediaItems: s = false,
    showChatItems: u = true,
    showChannelCallItems: F = false,
    showModalItems: J = true,
    showStageChannelItems: Q = false,
    context: W,
    onSelect: Y,
    onHeightUpdate: Z,
    viewingChannelId: q,
    onInteraction: $
  } = e, z = d.id, ee = {
    page: H.liQ.GUILD_CHANNEL,
    section: H.JJy.CHAT_USERNAME,
    object: H.ZSU.CONTEXT_MENU_ITEM
  }, et = (0, L.A)({
    userId: t.id,
    guildId: n,
    channelId: z,
    showGuildProfile: true
  }), en = (0, T.A)(t, n, W), el = (0, R.A)(t.id, W), ei = (0, k.A)(t.id), er = (0, v.A)({
    user: t,
    context: W
  }), ea = (0, x.A)({
    user: t,
    guildId: n,
    channelId: z,
    context: W
  }), ed = (0, N.A)({
    user: t
  }), es = (0, X.A)(t.id), ec = (0, B.A)(t.id), eo = (0, f.u)({
    userId: t.id,
    channelId: z,
    guildId: d.getGuildId()
  }), eu = (0, O.A)({
    guildId: n,
    userId: t.id,
    analyticsLocation: ee,
    context: W
  }), eA = (0, S.A)({
    user: t,
    guildId: n
  }), eg = (0, o.A)(null, t), ep = (0, M.A)({
    user: t
  }), eb = (0, I.A)({
    user: t,
    guildId: n,
    channelId: z,
    location: "GuildChannelUserContextMenu"
  }), ef = (0, _.A)({
    user: t,
    guildId: n,
    channelId: z,
    location: "GuildChannelUserContextMenu"
  }), eh = (0, G.A)(t, n, z), eO = (0, w.A)(t.id, n), ey = (0, D.A)(t, n), ej = (0, h.A)({
    id: t.id,
    label: K.intl.string(K.t["/AXYnE"])
  }), eC = (0, U.A)(t.id, z), eE = (0, p.A)(t.id), em = (0, g.A)(z), eM = (0, j.A)(t), eN = (0, C.A)(t, n, z), ex = (0, A.A)(z, t.id), eG = (0, i.bG)([E.A], () => null != q ? E.A.getChannel(q) : null), eP = (0, P.A)({
    commandType: c.kc.USER,
    commandTargetId: t.id,
    channel: null != eG ? eG : d,
    guildId: n,
    onHeightUpdate: Z,
    context: W
  }), eI = (0, b.A)(t.id), ev = (0, i.bG)([m.A], () => m.A.getVoiceChannelId()), eU = (0, V.A)(t, ev), e_ = (0, y.A)(t.id, d), eS = t.isNonUserBot();
  return (0, l.jsxs)(r.W1t, {
    navId: "user-context",
    onClose: a.Z_,
    "aria-label": K.intl.string(K.t.liqwPJ),
    onSelect: Y,
    onInteraction: $,
    children: [!eS && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(r.rXV, {
        children: [eM, s && !Q && e_, Q && eN]
      }), (0, l.jsxs)(r.rXV, {
        children: [J && et, u && en, el, er, eU, J && ea, J && ed, ei]
      }), s && (0, l.jsx)(r.rXV, {
        children: es
      }), (0, l.jsx)(r.rXV, {
        children: J && eg
      }), (0, l.jsxs)(r.rXV, {
        children: [s && ec, s && eo, s && eC, J && eu, eP, J && eA, ep, J && ef, J && eb, F && eI]
      }), (0, l.jsx)(r.rXV, {
        children: eh
      }), (0, l.jsxs)(r.rXV, {
        children: [eO, ey]
      }), F && (0, l.jsxs)(r.rXV, {
        children: [ex, em, eE]
      })]
    }), (0, l.jsx)(r.rXV, {
      children: ej
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.GUILD_CHANNEL_USER_MENU])