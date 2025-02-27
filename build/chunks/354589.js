/** Chunk was on 59479 **/
n.d(r, {
  default: () => R
});
var t = n(200651);
n(192379);
var i = n(481060),
  s = n(239091),
  o = n(883385),
  a = n(108843),
  d = n(911969),
  l = n(947440),
  c = n(100527),
  u = n(441061),
  m = n(167675),
  h = n(737013),
  f = n(607783),
  p = n(299206),
  b = n(819403),
  j = n(777658),
  Z = n(858488),
  v = n(44652),
  g = n(185457),
  x = n(570870),
  O = n(389052),
  _ = n(24311),
  w = n(915193),
  y = n(332576),
  N = n(158508),
  C = n(710631),
  I = n(297047),
  k = n(88966),
  P = n(47091),
  E = n(397616),
  M = n(558924),
  S = n(991307),
  T = n(37258),
  U = n(700994),
  W = n(332031),
  D = n(981631),
  Q = n(388032);
let R = (0, a.Z)((0, o.Z)(function(e) {
  var r;
  let {
    user: n,
    channel: o,
    context: a,
    showChatItems: c = !0,
    showMediaItems: D = !1,
    showChannelCallItems: R = !1,
    showModalItems: A = !0,
    onSelect: z,
    onHeightUpdate: G,
    onInteraction: L
  } = e, q = (0, T.Z)({
    userId: n.id,
    guildId: null
  }), B = (0, I.Z)(n, null, a), F = (0, M.Z)(n, o.id), J = (0, k.Z)(n.id, a), X = (0, _.Z)({
    user: n,
    context: a
  }), Y = (0, g.Z)({
    user: n,
    channelId: o.id,
    context: a
  }), H = (0, Z.Z)({
    user: n
  }), K = (0, U.Z)(n.id), V = (0, E.Z)(n.id, o.id), $ = (0, S.Z)(n.id), ee = (0, f.B)({
    userId: n.id,
    channelId: o.id,
    guildId: o.getGuildId(),
    location: "GroupDMUserContextMenu"
  }), er = (0, y.Z)(n.id, o.id), en = (0, C.Z)({
    user: n
  }), et = (0, l.Z)(null, n), ei = (0, j.Z)({
    user: n
  }), es = (0, v.Z)({
    user: n
  }), eo = (0, P.Z)({
    user: n
  }), ea = (0, O.Z)({
    user: n,
    location: "GroupDMUserContextMenu"
  }), ed = (0, N.Z)({
    user: n,
    location: "GroupDMUserContextMenu"
  }), el = (0, p.Z)({
    id: n.id,
    label: Q.NW.string(Q.t["/AXYnJ"])
  }), ec = (0, W.Z)(n.id), eu = (0, m.Z)(n.id), em = (0, u.Z)(o.id), eh = (0, b.Z)(n), ef = (0, h.Z)(n.id), ep = (0, x.Z)({
    commandType: d.yU.USER,
    commandTargetId: n.id,
    channel: o,
    guildId: void 0,
    onHeightUpdate: G
  }), eb = (0, w.Z)(n, o), ej = n.isNonUserBot(), eZ = o.isManaged(), ev = null === (r = o.recipients) || void 0 === r ? void 0 : r.includes(n.id);
  return (0, t.jsxs)(i.v2r, {
    navId: "user-context",
    onClose: s.Zy,
    "aria-label": Q.NW.string(Q.t.liqwPD),
    onSelect: z,
    onInteraction: L,
    children: [!ej && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(i.kSQ, {
        children: eh
      }), (0, t.jsxs)(i.kSQ, {
        children: [A && q, c && B, J, X, !eZ && F, A && Y, A && H, ec]
      }), D && (0, t.jsx)(i.kSQ, {
        children: K
      }), ev && (0, t.jsxs)(i.kSQ, {
        children: [!eZ && V, eb]
      }), (0, t.jsx)(i.kSQ, {
        children: A && et
      }), (0, t.jsxs)(i.kSQ, {
        children: [D && $, D && ee, D && er, ep, A && en, ei, es, eo, A && ed, A && ea, D && ef]
      }), R && (0, t.jsxs)(i.kSQ, {
        children: [em, eu]
      })]
    }), (0, t.jsx)(i.kSQ, {
      children: el
    })]
  })
}, {
  object: D.qAy.CONTEXT_MENU
}), [c.Z.CONTEXT_MENU, c.Z.GROUP_DM_USER_MENU])