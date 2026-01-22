/** Chunk was on 67447 **/
/** chunk id: 708202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => L
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
  Chunk688810 = require("./688810.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk346247 = require("./346247.jsx"),
  Chunk222311 = require("./222311.jsx"),
  Chunk164891 = require("./164891.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk803664 = require("./803664.jsx"),
  Chunk29293 = require("./29293.jsx"),
  Chunk509302 = require("./509302.js"),
  Chunk497600 = require("./497600.jsx"),
  Chunk773699 = require("./773699.jsx"),
  Chunk239211 = require("./239211.jsx"),
  Chunk707378 = require("./707378.jsx"),
  Chunk399476 = require("./399476.jsx"),
  Chunk889460 = require("./889460.jsx"),
  Chunk448290 = require("./448290.jsx"),
  Chunk301541 = require("./301541.jsx"),
  Chunk252726 = require("./252726.jsx"),
  Chunk460597 = require("./460597.js"),
  Chunk313998 = require("./313998.jsx"),
  Chunk146359 = require("./146359.jsx"),
  Chunk243949 = require("./243949.jsx"),
  Chunk180798 = require("./180798.jsx"),
  Chunk77544 = require("./77544.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let L = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    guildId: n,
    channel: o,
    context: u,
    onSelect: L,
    onHeightUpdate: V
  } = e, k = o.id, X = (0, I.A)({
    userId: t.id,
    guildId: n,
    channelId: k
  }), H = (0, S.A)(t, n, u), F = (0, T.A)(t.id, u), K = (0, D.A)(t.id), W = (0, v.A)({
    user: t,
    context: u
  }), J = (0, l.bG)([m.A, p.A], () => {
    let e = m.A.getVoiceChannelId();
    return p.A.getChannel(e)
  }), {
    enabled: Z
  } = f.A.useExperiment({
    guildId: null == J ? true : J.guild_id,
    location: "ThreadUserContextMenu"
  }), q = Z ? null == J ? true : J.id : null, Q = (0, U.A)(t, q), Y = (0, E.A)({
    user: t,
    guildId: n,
    channelId: k,
    context: u
  }), $ = (0, j.A)({
    user: t
  }), {
    analyticsLocations: z
  } = (0, A.Ay)(c.A.THREAD_USER_MENU), ee = (0, g.A)({
    guildId: n,
    userId: t.id,
    analyticsLocation: {
      page: R.liQ.GUILD_CHANNEL,
      section: R.JJy.CHAT_USERNAME,
      object: R.ZSU.CONTEXT_MENU_ITEM
    },
    analyticsLocations: z,
    context: u
  }), et = (0, C.A)({
    user: t,
    guildId: n
  }), en = (0, s.A)(null, t), er = (0, y.A)({
    user: t
  }), el = (0, h.A)({
    user: t
  }), ei = (0, G.A)({
    user: t
  }), ea = (0, x.A)({
    user: t,
    guildId: n,
    channelId: k,
    location: "ThreadUserContextMenu"
  }), eo = (0, M.A)({
    user: t,
    guildId: n,
    channelId: k,
    location: "ThreadUserContextMenu"
  }), eu = (0, _.A)(t, n, k), ed = (0, w.A)(t.id, n), es = (0, N.A)(t, n), ec = (0, b.A)({
    id: t.id,
    label: B.intl.string(B.t["/AXYnE"])
  }), eA = (0, O.A)(t), eb = (0, P.A)({
    commandType: d.kc.USER,
    commandTargetId: t.id,
    channel: o,
    guildId: n,
    onHeightUpdate: V
  }), eg = t.isNonUserBot();
  return (0, r.jsxs)(i.W1t, {
    navId: "user-context",
    onClose: a.Z_,
    "aria-label": B.intl.string(B.t.liqwPJ),
    onSelect: L,
    children: [!eg && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.rXV, {
        children: eA
      }), (0, r.jsxs)(i.rXV, {
        children: [X, H, F, W, Q, Y, $, K]
      }), (0, r.jsx)(i.rXV, {
        children: en
      }), (0, r.jsxs)(i.rXV, {
        children: [ee, eb, et, er, el, ei, eo, ea]
      }), (0, r.jsx)(i.rXV, {
        children: eu
      }), (0, r.jsxs)(i.rXV, {
        children: [ed, es]
      })]
    }), (0, r.jsx)(i.rXV, {
      children: ec
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.THREAD_USER_MENU])