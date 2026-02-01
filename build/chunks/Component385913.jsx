/** Chunk was on 39778 **/
/** chunk id: 385913, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => J
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
let J = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    user: n,
    channel: t,
    channelSelected: c = false,
    showMute: a = true,
    showMediaItems: s = false,
    showChannelCallItems: L = false,
    showModalItems: J = true,
    targetIsUser: K = false,
    context: B,
    onSelect: z,
    onHeightUpdate: W,
    onInteraction: Z
  } = e, q = (0, Y.A)({
    userId: n.id,
    guildId: null
  }), H = (0, C.A)({
    user: n,
    context: B
  }), Q = (0, _.A)({
    user: n,
    channelId: t.id,
    context: B
  }), $ = (0, P.A)({
    user: n
  }), ee = (0, F.A)(n.id), en = (0, E.A)(t.id, c), et = (0, S.A)({
    user: n
  }), er = (0, d.A)(null, n), ei = (0, R.A)(n.id), el = (0, k.g)(t.id, "DMUserContextMenu"), ec = (0, k.A)(n, el), ea = (0, D.A)({
    user: n
  }), eo = (0, w.A)({
    user: n
  }), ed = (0, U.A)({
    user: n
  }), es = (0, T.A)(n.id), eu = (0, f.u)({
    userId: n.id,
    channelId: t.id,
    guildId: t.getGuildId()
  }), eb = (0, M.A)(n.id, t.id), ep = (0, V.A)({
    user: n,
    location: "DMUserContextMenu"
  }), eh = (0, G.A)({
    user: n,
    location: "DMUserContextMenu"
  }), ef = (0, g.Ay)(t), ej = (0, A.A)({
    id: n.id,
    label: N.intl.string(N.t["/AXYnE"])
  }), eO = (0, A.A)({
    id: t.id,
    label: N.intl.string(N.t.gFHI3k)
  }), eg = (0, O.A)(t), eA = (0, p.A)(n.id), ey = (0, b.A)(t.id), ev = (0, x.A)(n), em = (0, h.A)(n.id), ex = (0, u.A)(t.id, n.id), eD = (0, X.A)({
    commandType: o.kc.USER,
    commandTargetId: n.id,
    channel: t,
    guildId: true,
    onHeightUpdate: W
  }), eP = (0, y.m)(t), ew = (0, y.y)(t), e_ = (0, v.A)(t), eX = (0, m.A)(t), eV = (0, I.A)({
    channel: t
  }), eC = t.isManaged(), eE = n.isNonUserBot();
  return (0, r.jsxs)(i.W1t, {
    "data-menu-migrated": true,
    navId: "user-context",
    onClose: l.Z_,
    "aria-label": N.intl.string(N.t.liqwPJ),
    onSelect: z,
    onInteraction: Z,
    children: [(0, r.jsx)(i.rXV, {
      children: !(eE && !(0, j.A)(t.id)) && eg
    }), (0, r.jsxs)(i.rXV, {
      children: [eP, e_, eX]
    }), (0, r.jsx)(i.rXV, {
      children: !eE && ev
    }), (0, r.jsxs)(i.rXV, {
      children: [!eE && (0, r.jsxs)(r.Fragment, {
        children: [J && q, H, !eC && ec, J && Q, J && $, ee]
      }), (0, j.A)(t.id) && q, en]
    }), !eE && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.rXV, {
        children: s && ei
      }), (0, r.jsx)(i.rXV, {
        children: J && er
      }), (0, r.jsxs)(i.rXV, {
        children: [eD, s && em, s && es, J && eu, s && eb, J && et, ea, eo, ed, J && eh, J && ep]
      }), (0, r.jsx)(i.rXV, {
        children: a && ef
      }), L && (0, r.jsxs)(i.rXV, {
        children: [ex, ey, eA]
      })]
    }), (0, j.A)(t.id) && (0, r.jsx)(i.rXV, {
      children: a && ef
    }), (0, r.jsx)(i.rXV, {
      children: ew
    }), (0, r.jsx)(i.rXV, {
      children: eV
    }), (0, r.jsxs)(i.rXV, {
      children: [ej, !K && eO]
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.DM_USER_MENU])