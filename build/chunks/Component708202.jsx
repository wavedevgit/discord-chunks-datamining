/** Chunk was on 67447 **/
/** chunk id: 708202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => B
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
let B = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    guildId: n,
    channel: a,
    context: u,
    onSelect: B,
    onHeightUpdate: V
  } = e, k = a.id, X = (0, D.A)({
    userId: t.id,
    guildId: n,
    channelId: k
  }), H = (0, S.A)(t, n, u), W = (0, T.A)(t.id, u), F = (0, R.A)(t.id), K = (0, v.A)({
    user: t,
    context: u
  }), J = (0, l.bG)([m.A, p.A], () => {
    let e = m.A.getVoiceChannelId();
    return p.A.getChannel(e)
  }), {
    enabled: Z
  } = O.A.useExperiment({
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
  } = (0, A.Ay)(s.A.THREAD_USER_MENU), ee = (0, b.A)({
    guildId: n,
    userId: t.id,
    analyticsLocation: {
      page: w.liQ.GUILD_CHANNEL,
      section: w.JJy.CHAT_USERNAME,
      object: w.ZSU.CONTEXT_MENU_ITEM
    },
    analyticsLocations: z,
    context: u
  }), et = (0, C.A)({
    user: t,
    guildId: n
  }), en = (0, d.A)(null, t), er = (0, y.A)({
    user: t
  }), el = (0, h.A)({
    user: t
  }), ei = (0, G.A)({
    user: t
  }), eo = (0, x.A)({
    user: t,
    guildId: n,
    channelId: k,
    location: "ThreadUserContextMenu"
  }), ea = (0, M.A)({
    user: t,
    guildId: n,
    channelId: k,
    location: "ThreadUserContextMenu"
  }), eu = (0, _.A)(t, n, k), ec = (0, I.A)(t.id, n), ed = (0, N.A)(t, n), es = (0, g.A)({
    id: t.id,
    label: L.intl.string(L.t["/AXYnE"])
  }), eA = (0, f.A)(t), eg = (0, P.A)({
    commandType: c.kc.USER,
    commandTargetId: t.id,
    channel: a,
    guildId: n,
    onHeightUpdate: V
  }), eb = t.isNonUserBot();
  return (0, r.jsxs)(i.W1t, {
    "data-menu-mixed": true,
    navId: "user-context",
    onClose: o.Z_,
    "aria-label": L.intl.string(L.t.liqwPJ),
    onSelect: B,
    children: [!eb && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.rXV, {
        children: eA
      }), (0, r.jsxs)(i.rXV, {
        children: [X, H, W, K, Q, Y, $, F]
      }), (0, r.jsx)(i.rXV, {
        children: en
      }), (0, r.jsxs)(i.rXV, {
        children: [ee, eg, et, er, el, ei, ea, eo]
      }), (0, r.jsx)(i.rXV, {
        children: eu
      }), (0, r.jsxs)(i.rXV, {
        children: [ec, ed]
      })]
    }), (0, r.jsx)(i.rXV, {
      children: es
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.THREAD_USER_MENU])