/** Chunk was on 56826 **/
/** chunk id: 131404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk947440 = require("./947440.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk434500 = require("./434500.jsx"),
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
  Chunk47091 = require("./47091.js"),
  Chunk558924 = require("./558924.jsx"),
  Chunk991307 = require("./991307.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk700994 = require("./700994.jsx"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let Y = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: a = false,
    showMute: o = true,
    showMediaItems: u = false,
    showChannelCallItems: G = false,
    showModalItems: Y = true,
    targetIsUser: B = false,
    context: K,
    onSelect: W,
    onHeightUpdate: z,
    onInteraction: J
  } = e, X = (0, R.Z)({
    userId: t.id,
    guildId: null
  }), q = (0, A.Z)({
    user: t,
    context: K
  }), H = (0, N.Z)({
    user: t,
    channelId: n.id,
    context: K
  }), $ = (0, S.Z)({
    user: t
  }), ee = (0, F.Z)(t.id), et = (0, C.Z)(n.id, a), en = (0, U.Z)({
    user: t
  }), ei = (0, d.Z)(null, t), er = (0, V.Z)(t.id), el = (0, w.O)(n.id, "DMUserContextMenu"), ea = (0, w.Z)(t, el), eo = (0, P.Z)({
    user: t
  }), es = (0, x.Z)({
    user: t
  }), ed = (0, k.Z)({
    user: t
  }), eu = (0, L.Z)(t.id), ec = (0, b.B)({
    userId: t.id,
    channelId: n.id,
    guildId: n.getGuildId()
  }), ef = (0, D.Z)(t.id, n.id), eg = (0, I.Z)({
    user: t,
    location: "DMUserContextMenu"
  }), eh = (0, T.Z)({
    user: t,
    location: "DMUserContextMenu"
  }), eb = (0, Z.ZP)(n), ep = (0, O.Z)({
    id: t.id,
    label: Q.intl.string(Q.t["/AXYnE"])
  }), ej = (0, O.Z)({
    id: n.id,
    label: Q.intl.string(Q.t.gFHI3k)
  }), eZ = (0, j.Z)(n), eO = (0, g.Z)(t.id), ev = (0, f.Z)(n.id), ey = (0, _.Z)(t), em = (0, h.Z)(t.id), e_ = (0, c.Z)(n.id, t.id), eP = (0, E.Z)({
    commandType: s.yU.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: true,
    onHeightUpdate: z
  }), eS = (0, v.l)(n), ex = (0, v.P)(n), eN = (0, y.Z)(n), eE = (0, m.Z)(n), eI = (0, M.Z)({
    channel: n
  }), eA = n.isManaged(), eC = t.isNonUserBot();
  return (0, i.jsxs)(r.v2r, {
    navId: "user-context",
    onClose: l.Zy,
    "aria-label": Q.intl.string(Q.t.liqwPJ),
    onSelect: W,
    onInteraction: J,
    children: [(0, i.jsx)(r.kSQ, {
      children: !(eC && !(0, p.Z)(n.id)) && eZ
    }), (0, i.jsxs)(r.kSQ, {
      children: [eS, eN, eE]
    }), (0, i.jsx)(r.kSQ, {
      children: !eC && ey
    }), (0, i.jsxs)(r.kSQ, {
      children: [!eC && (0, i.jsxs)(i.Fragment, {
        children: [Y && X, q, !eA && ea, Y && H, Y && $, ee]
      }), (0, p.Z)(n.id) && X, et]
    }), !eC && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(r.kSQ, {
        children: u && er
      }), (0, i.jsx)(r.kSQ, {
        children: Y && ei
      }), (0, i.jsxs)(r.kSQ, {
        children: [u && eu, Y && ec, u && ef, eP, Y && en, eo, es, ed, Y && eh, Y && eg, u && em]
      }), (0, i.jsx)(r.kSQ, {
        children: o && eb
      }), G && (0, i.jsxs)(r.kSQ, {
        children: [e_, ev, eO]
      })]
    }), (0, p.Z)(n.id) && (0, i.jsx)(r.kSQ, {
      children: o && eb
    }), (0, i.jsx)(r.kSQ, {
      children: ex
    }), (0, i.jsx)(r.kSQ, {
      children: eI
    }), (0, i.jsxs)(r.kSQ, {
      children: [ep, !B && ej]
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.DM_USER_MENU])