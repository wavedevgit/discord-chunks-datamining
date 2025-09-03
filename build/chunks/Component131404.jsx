/** Chunk was on 56826 **/
/** chunk id: 131404, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => V
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk947440 = require("./947440.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk441061 = require("./441061.jsx"),
  Chunk167675 = require("./167675.jsx"),
  Chunk737013 = require("./737013.jsx"),
  Chunk607783 = require("./607783.jsx"),
  Chunk702321 = require("./702321.js"),
  Chunk461535 = require("./461535.jsx"),
  Chunk776568 = require("./776568.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk895563 = require("./895563.jsx"),
  Chunk212205 = require("./212205.jsx"),
  Chunk62420 = require("./62420.jsx"),
  Chunk122074 = require("./122074.jsx"),
  Chunk819403 = require("./819403.jsx"),
  Chunk777658 = require("./777658.jsx"),
  Chunk858488 = require("./858488.jsx"),
  Chunk44652 = require("./44652.js"),
  Chunk185457 = require("./185457.jsx"),
  Chunk570870 = require("./570870.jsx"),
  Chunk389052 = require("./389052.jsx"),
  Chunk24311 = require("./24311.jsx"),
  Chunk794973 = require("./794973.jsx"),
  Chunk165855 = require("./165855.jsx"),
  Chunk332576 = require("./332576.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk710631 = require("./710631.jsx"),
  Chunk47091 = require("./47091.jsx"),
  Chunk558924 = require("./558924.jsx"),
  Chunk991307 = require("./991307.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk700994 = require("./700994.jsx"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let V = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: a = false,
    showMute: o = true,
    showMediaItems: u = false,
    showChannelCallItems: V = false,
    showModalItems: B = true,
    targetIsUser: z = false,
    context: K,
    onSelect: W,
    onHeightUpdate: X,
    onInteraction: q
  } = e, J = (0, G.Z)({
    userId: t.id,
    guildId: null
  }), H = (0, P.Z)({
    user: t,
    context: K
  }), $ = (0, E.Z)({
    user: t,
    channelId: n.id,
    context: K
  }), ee = (0, I.Z)({
    user: t
  }), et = (0, F.Z)(t.id), en = (0, Z.Z)(n.id, a), er = (0, D.Z)({
    user: t
  }), ei = (0, c.Z)(null, t), el = (0, L.Z)(t.id), ea = (0, w.O)(n.id, "DMUserContextMenu"), eo = (0, w.Z)(t, ea), es = (0, N.Z)({
    user: t
  }), ec = (0, m.Z)({
    user: t
  }), eu = (0, k.Z)({
    user: t
  }), ed = (0, R.Z)(t.id), ef = (0, h.B)({
    userId: t.id,
    channelId: n.id,
    guildId: n.getGuildId()
  }), eO = (0, U.Z)(t.id, n.id), eh = (0, T.Z)({
    user: t,
    location: "DMUserContextMenu"
  }), eg = (0, M.Z)({
    user: t,
    location: "DMUserContextMenu"
  }), ej = (0, b.ZP)(n), eb = (0, x.Uf)(Q.aIL, n.id, "trailing"), ep = (0, p.Z)({
    id: t.id,
    label: Y.intl.string(Y.t["/AXYnJ"])
  }), e_ = (0, p.Z)({
    id: n.id,
    label: Y.intl.string(Y.t.gFHI3t)
  }), ey = (0, j.Z)(n), ev = (0, f.Z)(t.id), ex = (0, d.Z)(n.id), eS = (0, S.Z)(t), eN = (0, O.Z)(t.id), eI = (0, C.Z)({
    commandType: s.yU.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: true,
    onHeightUpdate: X
  }), em = (0, _.l)(n), eE = (0, _.P)(n), eC = (0, y.Z)(n), eT = (0, v.Z)(n), eP = (0, A.Z)({
    channel: n
  }), eZ = n.isManaged(), eA = t.isNonUserBot();
  return (0, r.jsxs)(i.v2r, {
    navId: "user-context",
    onClose: l.Zy,
    "aria-label": Y.intl.string(Y.t.liqwPD),
    onSelect: W,
    onInteraction: q,
    children: [(0, r.jsx)(i.kSQ, {
      children: !(eA && !(0, g.Z)(n.id)) && ey
    }), (0, r.jsxs)(i.kSQ, {
      children: [em, eC, eT]
    }), (0, r.jsx)(i.kSQ, {
      children: !eA && eS
    }), (0, r.jsxs)(i.kSQ, {
      children: [!eA && (0, r.jsxs)(r.Fragment, {
        children: [B && J, H, !eZ && eo, B && $, B && ee, et]
      }), (0, g.Z)(n.id) && J, en]
    }), !eA && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.kSQ, {
        children: u && el
      }), (0, r.jsx)(i.kSQ, {
        children: B && ei
      }), (0, r.jsxs)(i.kSQ, {
        children: [u && ed, B && ef, u && eO, eI, B && er, es, ec, eu, B && eg, B && eh, u && eN]
      }), (0, r.jsxs)(i.kSQ, {
        children: [o && ej, eb]
      }), V && (0, r.jsxs)(i.kSQ, {
        children: [ex, ev]
      })]
    }), (0, g.Z)(n.id) && (0, r.jsxs)(i.kSQ, {
      children: [o && ej, eb]
    }), (0, r.jsx)(i.kSQ, {
      children: eE
    }), (0, r.jsx)(i.kSQ, {
      children: eP
    }), (0, r.jsxs)(i.kSQ, {
      children: [ep, !z && e_]
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.DM_USER_MENU])