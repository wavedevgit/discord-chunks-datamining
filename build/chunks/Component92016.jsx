/** Chunk was on 25339 **/
/** chunk id: 92016, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => B
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
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
  Chunk343328 = require("./343328.js"),
  Chunk848977 = require("./848977.jsx"),
  Chunk995102 = require("./995102.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk222311 = require("./222311.jsx"),
  Chunk803664 = require("./803664.jsx"),
  Chunk29293 = require("./29293.jsx"),
  Chunk509302 = require("./509302.js"),
  Chunk497600 = require("./497600.jsx"),
  Chunk773699 = require("./773699.jsx"),
  Chunk239211 = require("./239211.jsx"),
  Chunk707378 = require("./707378.jsx"),
  Chunk486524 = require("./486524.jsx"),
  Chunk631637 = require("./631637.jsx"),
  Chunk984894 = require("./984894.jsx"),
  Chunk399476 = require("./399476.jsx"),
  Chunk889460 = require("./889460.jsx"),
  Chunk460597 = require("./460597.js"),
  Chunk313998 = require("./313998.jsx"),
  Chunk198229 = require("./198229.jsx"),
  Chunk243949 = require("./243949.jsx"),
  Chunk972432 = require("./972432.jsx"),
  Chunk77544 = require("./77544.jsx"),
  Chunk571964 = require("./571964.jsx"),
  Chunk708653 = require("./708653.jsx"),
  Chunk297460 = require("./297460.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let B = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    channel: r,
    channelSelected: o = false,
    showMute: a = true,
    showMediaItems: s = false,
    showChannelCallItems: G = false,
    showModalItems: B = true,
    targetIsUser: Y = false,
    context: Z,
    onSelect: W,
    onHeightUpdate: K,
    onInteraction: $,
    widgetType: z
  } = e, q = (0, X.A)({
    kind: "DM_USER",
    userId: t.id
  }, z), J = (0, V.A)({
    userId: t.id,
    guildId: null
  }), Q = (0, D.A)({
    user: t,
    context: Z
  }), ee = (0, S.A)({
    user: t,
    channelId: r.id,
    context: Z
  }), et = (0, j.A)({
    user: t
  }), er = (0, U.A)(t.id), en = (0, w.A)(r.id, o), ei = (0, _.A)({
    user: t
  }), el = (0, d.A)(null, t), eo = (0, F.A)(t.id), ea = (0, C.g)(r.id, "OverlayDMUserContextMenu"), ec = (0, C.A)(t, ea), ed = (0, h.A)({
    user: t
  }), es = (0, I.A)({
    user: t
  }), eu = (0, k.A)({
    user: t
  }), eA = (0, L.A)({
    user: t
  }), ef = (0, R.A)(t.id), ep = (0, b.u)({
    userId: t.id,
    channelId: r.id,
    guildId: r.getGuildId()
  }), eb = (0, P.A)(t.id, r.id), eg = (0, x.A)({
    user: t,
    location: "OverlayDMUserContextMenu"
  }), ey = (0, N.A)({
    user: t,
    location: "OverlayDMUserContextMenu"
  }), eO = (0, O.Ay)(r), ev = (0, v.A)({
    id: t.id,
    label: H.intl.string(H.t["/AXYnE"])
  }), eE = (0, v.A)({
    id: r.id,
    label: H.intl.string(H.t.gFHI3k)
  }), eh = (0, y.A)(r), ej = (0, f.A)(t.id), eI = (0, A.A)(r.id), eS = (0, E.A)(t), em = (0, p.A)(t.id), ex = (0, u.A)(r.id, t.id), eD = (0, m.A)({
    commandType: c.kc.USER,
    commandTargetId: t.id,
    channel: r,
    guildId: true,
    onHeightUpdate: K
  }), {
    toggleFavoriteItem: ew
  } = (0, T.As)(t.id, z), eM = (0, M.A)({
    channel: r
  }), eP = r.isManaged(), eN = t.isNonUserBot();
  return (0, n.jsxs)(i.W1t, {
    navId: "overlay-user-context",
    onClose: l.Z_,
    "aria-label": H.intl.string(H.t.liqwPJ),
    onSelect: W,
    onInteraction: $,
    children: [(0, n.jsxs)(i.rXV, {
      children: [!(eN && !(0, g.A)(r.id)) && eh, q, ew]
    }), (0, n.jsx)(i.rXV, {
      children: !eN && eS
    }), (0, n.jsxs)(i.rXV, {
      children: [!eN && (0, n.jsxs)(n.Fragment, {
        children: [B && J, Q, !eP && ec, B && ee, B && et, eA, er]
      }), en]
    }), !eN && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(i.rXV, {
        children: s && eo
      }), (0, n.jsx)(i.rXV, {
        children: B && el
      }), (0, n.jsxs)(i.rXV, {
        children: [s && ef, B && ep, s && eb, eD, B && ei, ed, es, eu, B && ey, B && eg, s && em]
      }), (0, n.jsx)(i.rXV, {
        children: a && eO
      }), G && (0, n.jsxs)(i.rXV, {
        children: [ex, eI, ej]
      })]
    }), (0, g.A)(r.id) && (0, n.jsx)(i.rXV, {
      children: a && eO
    }), (0, n.jsx)(i.rXV, {
      children: eM
    }), (0, n.jsxs)(i.rXV, {
      children: [ev, !Y && eE]
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.OVERLAY, Chunk793574.A.DM_USER_MENU])