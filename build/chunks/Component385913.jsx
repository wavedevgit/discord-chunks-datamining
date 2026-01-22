/** Chunk was on 39778 **/
/** chunk id: 385913, original params: e,t,n (module,exports,require) **/
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
  Chunk133238 = require("./133238.jsx"),
  Chunk795144 = require("./795144.jsx"),
  Chunk671470 = require("./671470.jsx"),
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
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let B = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: a = false,
    showMute: o = true,
    showMediaItems: c = false,
    showChannelCallItems: F = false,
    showModalItems: B = true,
    targetIsUser: W = false,
    context: J,
    onSelect: K,
    onHeightUpdate: H,
    onInteraction: q
  } = e, z = (0, G.A)({
    userId: t.id,
    guildId: null
  }), Z = (0, S.A)({
    user: t,
    context: J
  }), Q = (0, P.A)({
    user: t,
    channelId: n.id,
    context: J
  }), $ = (0, D.A)({
    user: t
  }), ee = (0, X.A)(t.id), et = (0, M.A)(n.id, a), en = (0, N.A)({
    user: t
  }), er = (0, d.A)(null, t), ei = (0, k.A)(t.id), el = (0, L.g)(n.id, "DMUserContextMenu"), ea = (0, L.A)(t, el), eo = (0, x.A)({
    user: t
  }), es = (0, E.A)({
    user: t
  }), ed = (0, V.A)({
    user: t
  }), ec = (0, R.A)(t.id), eu = (0, g.u)({
    userId: t.id,
    channelId: n.id,
    guildId: n.getGuildId()
  }), eA = (0, U.A)(t.id, n.id), ef = (0, C.A)({
    user: t,
    location: "DMUserContextMenu"
  }), eb = (0, w.A)({
    user: t,
    location: "DMUserContextMenu"
  }), eg = (0, j.Ay)(n), ep = (0, O.A)({
    id: t.id,
    label: Y.intl.string(Y.t["/AXYnE"])
  }), eh = (0, O.A)({
    id: n.id,
    label: Y.intl.string(Y.t.gFHI3k)
  }), ej = (0, h.A)(n), eO = (0, f.A)(t.id), ey = (0, A.A)(n.id), ev = (0, _.A)(t), em = (0, b.A)(t.id), e_ = (0, u.A)(n.id, t.id), ex = (0, I.A)({
    commandType: s.kc.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: true,
    onHeightUpdate: H
  }), eD = (0, y.m)(n), eE = (0, y.y)(n), eP = (0, v.A)(n), eI = (0, m.A)(n), eC = (0, T.A)({
    channel: n
  }), eS = n.isManaged(), eM = t.isNonUserBot();
  return (0, r.jsxs)(i.W1t, {
    navId: "user-context",
    onClose: l.Z_,
    "aria-label": Y.intl.string(Y.t.liqwPJ),
    onSelect: K,
    onInteraction: q,
    children: [(0, r.jsx)(i.rXV, {
      children: !(eM && !(0, p.A)(n.id)) && ej
    }), (0, r.jsxs)(i.rXV, {
      children: [eD, eP, eI]
    }), (0, r.jsx)(i.rXV, {
      children: !eM && ev
    }), (0, r.jsxs)(i.rXV, {
      children: [!eM && (0, r.jsxs)(r.Fragment, {
        children: [B && z, Z, !eS && ea, B && Q, B && $, ee]
      }), (0, p.A)(n.id) && z, et]
    }), !eM && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.rXV, {
        children: c && ei
      }), (0, r.jsx)(i.rXV, {
        children: B && er
      }), (0, r.jsxs)(i.rXV, {
        children: [c && ec, B && eu, c && eA, ex, B && en, eo, es, ed, B && eb, B && ef, c && em]
      }), (0, r.jsx)(i.rXV, {
        children: o && eg
      }), F && (0, r.jsxs)(i.rXV, {
        children: [e_, ey, eO]
      })]
    }), (0, p.A)(n.id) && (0, r.jsx)(i.rXV, {
      children: o && eg
    }), (0, r.jsx)(i.rXV, {
      children: eE
    }), (0, r.jsx)(i.rXV, {
      children: eC
    }), (0, r.jsxs)(i.rXV, {
      children: [ep, !W && eh]
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.DM_USER_MENU])