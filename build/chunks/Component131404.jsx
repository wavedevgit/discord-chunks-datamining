/** Chunk was on 56826 **/
/** chunk id: 131404, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => V
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
    user: n,
    channel: t,
    channelSelected: a = false,
    showMute: s = true,
    showMediaItems: c = false,
    showChannelCallItems: L = false,
    showModalItems: V = true,
    targetIsUser: K = false,
    context: W,
    onSelect: z,
    onHeightUpdate: B,
    onInteraction: J
  } = e, X = (0, G.Z)({
    userId: n.id,
    guildId: null
  }), q = (0, A.Z)({
    user: n,
    context: W
  }), H = (0, m.Z)({
    user: n,
    channelId: t.id,
    context: W
  }), $ = (0, P.Z)({
    user: n
  }), ee = (0, F.Z)(n.id), en = (0, C.Z)(t.id, a), et = (0, M.Z)({
    user: n
  }), ei = (0, d.Z)(null, n), er = (0, Q.Z)(n.id), el = (0, w.O)(t.id, "DMUserContextMenu"), ea = (0, w.Z)(n, el), es = (0, S.Z)({
    user: n
  }), eo = (0, N.Z)({
    user: n
  }), ed = (0, R.Z)({
    user: n
  }), ec = (0, D.Z)(n.id), eu = (0, j.B)({
    userId: n.id,
    channelId: t.id,
    guildId: t.getGuildId()
  }), ef = (0, k.Z)(n.id, t.id), eh = (0, I.Z)({
    user: n,
    location: "DMUserContextMenu"
  }), eg = (0, U.Z)({
    user: n,
    location: "DMUserContextMenu"
  }), ej = (0, O.ZP)(t), ep = (0, y.Z)({
    id: n.id,
    label: Y.intl.string(Y.t["/AXYnE"])
  }), eb = (0, y.Z)({
    id: t.id,
    label: Y.intl.string(Y.t.gFHI3k)
  }), eO = (0, b.Z)(t), ey = (0, h.Z)(n.id), ev = (0, f.Z)(t.id), eZ = (0, x.Z)(n), e_ = (0, g.Z)(n.id), ex = (0, u.Z)(t.id, n.id), eS = (0, E.Z)({
    commandType: o.yU.USER,
    commandTargetId: n.id,
    channel: t,
    guildId: true,
    onHeightUpdate: B
  }), eP = (0, v.l)(t), eN = (0, v.P)(t), em = (0, Z.Z)(t), eE = (0, _.Z)(t), eI = (0, T.Z)({
    channel: t
  }), eA = t.isManaged(), eC = n.isNonUserBot();
  return (0, i.jsxs)(r.v2r, {
    navId: "user-context",
    onClose: l.Zy,
    "aria-label": Y.intl.string(Y.t.liqwPJ),
    onSelect: z,
    onInteraction: J,
    children: [(0, i.jsx)(r.kSQ, {
      children: !(eC && !(0, p.Z)(t.id)) && eO
    }), (0, i.jsxs)(r.kSQ, {
      children: [eP, em, eE]
    }), (0, i.jsx)(r.kSQ, {
      children: !eC && eZ
    }), (0, i.jsxs)(r.kSQ, {
      children: [!eC && (0, i.jsxs)(i.Fragment, {
        children: [V && X, q, !eA && ea, V && H, V && $, ee]
      }), (0, p.Z)(t.id) && X, en]
    }), !eC && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(r.kSQ, {
        children: c && er
      }), (0, i.jsx)(r.kSQ, {
        children: V && ei
      }), (0, i.jsxs)(r.kSQ, {
        children: [c && ec, V && eu, c && ef, eS, V && et, es, eo, ed, V && eg, V && eh, c && e_]
      }), (0, i.jsx)(r.kSQ, {
        children: s && ej
      }), L && (0, i.jsxs)(r.kSQ, {
        children: [ex, ev, ey]
      })]
    }), (0, p.Z)(t.id) && (0, i.jsx)(r.kSQ, {
      children: s && ej
    }), (0, i.jsx)(r.kSQ, {
      children: eN
    }), (0, i.jsx)(r.kSQ, {
      children: eI
    }), (0, i.jsxs)(r.kSQ, {
      children: [ep, !K && eb]
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.DM_USER_MENU])