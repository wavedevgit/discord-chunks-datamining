/** Chunk was on 56826 **/
/** chunk id: 131404, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => Y
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
let Y = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: n,
    channel: t,
    channelSelected: a = false,
    showMute: s = true,
    showMediaItems: c = false,
    showChannelCallItems: F = false,
    showModalItems: Y = true,
    targetIsUser: V = false,
    context: W,
    onSelect: z,
    onHeightUpdate: K,
    onInteraction: B
  } = e, X = (0, w.Z)({
    userId: n.id,
    guildId: null
  }), q = (0, E.Z)({
    user: n,
    context: W
  }), J = (0, P.Z)({
    user: n,
    channelId: t.id,
    context: W
  }), H = (0, S.Z)({
    user: n
  }), $ = (0, G.Z)(n.id), ee = (0, A.Z)(t.id, a), en = (0, U.Z)({
    user: n
  }), et = (0, d.Z)(null, n), ei = (0, Q.Z)(n.id), er = (0, R.O)(t.id, "DMUserContextMenu"), el = (0, R.Z)(n, er), ea = (0, x.Z)({
    user: n
  }), es = (0, N.Z)({
    user: n
  }), eo = (0, M.Z)({
    user: n
  }), ed = (0, D.Z)(n.id), ec = (0, g.B)({
    userId: n.id,
    channelId: t.id,
    guildId: t.getGuildId()
  }), eu = (0, k.Z)(n.id, t.id), ef = (0, I.Z)({
    user: n,
    location: "DMUserContextMenu"
  }), eh = (0, T.Z)({
    user: n,
    location: "DMUserContextMenu"
  }), eg = (0, b.ZP)(t), ej = (0, O.Z)({
    id: n.id,
    label: L.intl.string(L.t["/AXYnJ"])
  }), ep = (0, O.Z)({
    id: t.id,
    label: L.intl.string(L.t.gFHI3t)
  }), eb = (0, p.Z)(t), eO = (0, f.Z)(n.id), ev = (0, u.Z)(t.id), eZ = (0, _.Z)(n), ey = (0, h.Z)(n.id), e_ = (0, m.Z)({
    commandType: o.yU.USER,
    commandTargetId: n.id,
    channel: t,
    guildId: true,
    onHeightUpdate: K
  }), ex = (0, v.l)(t), eS = (0, v.P)(t), eN = (0, Z.Z)(t), eP = (0, y.Z)(t), em = (0, C.Z)({
    channel: t
  }), eI = t.isManaged(), eE = n.isNonUserBot();
  return (0, i.jsxs)(r.v2r, {
    navId: "user-context",
    onClose: l.Zy,
    "aria-label": L.intl.string(L.t.liqwPD),
    onSelect: z,
    onInteraction: B,
    children: [(0, i.jsx)(r.kSQ, {
      children: !(eE && !(0, j.Z)(t.id)) && eb
    }), (0, i.jsxs)(r.kSQ, {
      children: [ex, eN, eP]
    }), (0, i.jsx)(r.kSQ, {
      children: !eE && eZ
    }), (0, i.jsxs)(r.kSQ, {
      children: [!eE && (0, i.jsxs)(i.Fragment, {
        children: [Y && X, q, !eI && el, Y && J, Y && H, $]
      }), (0, j.Z)(t.id) && X, ee]
    }), !eE && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(r.kSQ, {
        children: c && ei
      }), (0, i.jsx)(r.kSQ, {
        children: Y && et
      }), (0, i.jsxs)(r.kSQ, {
        children: [c && ed, Y && ec, c && eu, e_, Y && en, ea, es, eo, Y && eh, Y && ef, c && ey]
      }), (0, i.jsx)(r.kSQ, {
        children: s && eg
      }), F && (0, i.jsxs)(r.kSQ, {
        children: [ev, eO]
      })]
    }), (0, j.Z)(t.id) && (0, i.jsx)(r.kSQ, {
      children: s && eg
    }), (0, i.jsx)(r.kSQ, {
      children: eS
    }), (0, i.jsx)(r.kSQ, {
      children: em
    }), (0, i.jsxs)(r.kSQ, {
      children: [ej, !V && ep]
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.DM_USER_MENU])