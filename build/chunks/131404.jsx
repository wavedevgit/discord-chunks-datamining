/** Chunk was on 56826 **/
/** chunk id: 131404, original params: t,n,e (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => K
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk947440 = require("./947440.js"),
  Chunk100527 = require("./100527.js"),
  Chunk441061 = require("./441061.js"),
  Chunk167675 = require("./167675.js"),
  Chunk737013 = require("./737013.js"),
  Chunk607783 = require("./607783.js"),
  Chunk702321 = require("./702321.js"),
  Chunk461535 = require("./461535.js"),
  Chunk776568 = require("./776568.js"),
  Chunk658138 = require("./658138.js"),
  Chunk299206 = require("./299206.js"),
  Chunk895563 = require("./895563.js"),
  Chunk212205 = require("./212205.js"),
  Chunk62420 = require("./62420.jsx"),
  Chunk122074 = require("./122074.jsx"),
  Chunk819403 = require("./819403.js"),
  Chunk777658 = require("./777658.js"),
  Chunk858488 = require("./858488.js"),
  Chunk44652 = require("./44652.js"),
  Chunk185457 = require("./185457.js"),
  Chunk570870 = require("./570870.js"),
  Chunk389052 = require("./389052.js"),
  Chunk24311 = require("./24311.jsx"),
  Chunk794973 = require("./794973.js"),
  Chunk165855 = require("./165855.js"),
  Chunk332576 = require("./332576.js"),
  Chunk158508 = require("./158508.js"),
  Chunk710631 = require("./710631.js"),
  Chunk47091 = require("./47091.jsx"),
  Chunk558924 = require("./558924.js"),
  Chunk991307 = require("./991307.js"),
  Chunk37258 = require("./37258.jsx"),
  Chunk700994 = require("./700994.js"),
  Chunk332031 = require("./332031.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");
let K = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(t) {
  let {
    user: n,
    channel: e,
    channelSelected: s = false,
    showMute: a = true,
    showMediaItems: o = false,
    showChannelCallItems: K = false,
    showModalItems: L = true,
    targetIsUser: z = false,
    context: B,
    onSelect: q,
    onHeightUpdate: J,
    onInteraction: X
  } = t, H = (0, V.Z)({
    userId: n.id,
    guildId: null
  }), $ = (0, A.Z)({
    user: n,
    context: B
  }), tt = (0, E.Z)({
    user: n,
    channelId: e.id,
    context: B
  }), tn = (0, y.Z)({
    user: n
  }), te = (0, F.Z)(n.id), ti = (0, C.Z)(e.id, s), tr = (0, U.Z)({
    user: n
  }), tl = (0, u.Z)(null, n), ts = (0, W.Z)(n.id), ta = (0, w.O)(e.id, "DMUserContextMenu"), td = (0, w.Z)(n, ta), tu = (0, N.Z)({
    user: n
  }), to = (0, m.Z)({
    user: n
  }), tc = (0, D.Z)({
    user: n
  }), tf = (0, Q.Z)(n.id), tg = (0, h.B)({
    userId: n.id,
    channelId: e.id,
    guildId: e.getGuildId()
  }), th = (0, M.Z)(n.id, e.id), tj = (0, P.Z)({
    user: n,
    location: "DMUserContextMenu"
  }), tp = (0, R.Z)({
    user: n,
    location: "DMUserContextMenu"
  }), tx = (0, x.ZP)(e), tv = (0, b.Uf)(Y.aIL, e.id, "trailing"), tZ = (0, Z.Z)({
    id: n.id,
    label: G.intl.string(G.t["/AXYnJ"])
  }), tS = (0, Z.Z)({
    id: e.id,
    label: G.intl.string(G.t.gFHI3t)
  }), tI = (0, p.Z)(e), t_ = (0, f.Z)(n.id), tb = (0, c.Z)(e.id), tO = (0, O.Z)(n), tN = (0, g.Z)(n.id), ty = (0, k.Z)({
    commandType: d.yU.USER,
    commandTargetId: n.id,
    channel: e,
    guildId: true,
    onHeightUpdate: J
  }), tm = (0, S.l)(e), tE = (0, S.P)(e), tk = (0, I.Z)(e), tP = (0, _.Z)(e), tA = (0, T.Z)({
    channel: e
  }), tC = (0, v.D)(e), tT = e.isManaged(), tM = n.isNonUserBot();
  return <r.v2r navId={"user-context"} onClose={l.Zy} aria-label={G.intl.string(G.t.liqwPD)} onSelect={q} onInteraction={X}>{<r.kSQ>{!(tM && !(0, j.Z)(e.id)) && tI}</r.kSQ>}{<r.kSQ>{tm}{tk}{tP}{tC}</r.kSQ>}{<r.kSQ>{!tM && tO}</r.kSQ>}{<r.kSQ>{!tM && <i.Fragment>{L && H}{$}{!tT && td}{L && tt}{L && tn}{te}</i.Fragment>}{(0, j.Z)(e.id) && H}{ti}</r.kSQ>}{!tM && <i.Fragment>{<r.kSQ>{o && ts}</r.kSQ>}{<r.kSQ>{L && tl}</r.kSQ>}{<r.kSQ>{o && tf}{L && tg}{o && th}{ty}{L && tr}{tu}{to}{tc}{L && tp}{L && tj}{o && tN}</r.kSQ>}{<r.kSQ>{a && tx}{tv}</r.kSQ>}{K && <r.kSQ>{tb}{t_}</r.kSQ>}</i.Fragment>}{(0, j.Z)(e.id) && <r.kSQ>{a && tx}{tv}</r.kSQ>}{<r.kSQ>{tE}</r.kSQ>}{<r.kSQ>{tA}</r.kSQ>}{<r.kSQ>{tZ}{!z && tS}</r.kSQ>}</r.v2r>
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.DM_USER_MENU])