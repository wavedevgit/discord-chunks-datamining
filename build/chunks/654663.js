/** Chunk was on 70675 **/
n.d(t, {
  default: () => M
});
var l = n(200651);
n(192379);
var r = n(442837),
  i = n(481060),
  a = n(239091),
  o = n(883385),
  u = n(108843),
  s = n(911969),
  c = n(947440),
  d = n(100527),
  g = n(299206),
  Z = n(976192),
  b = n(819403),
  f = n(163612),
  p = n(592125),
  O = n(944486),
  m = n(777658),
  N = n(858488),
  h = n(44652),
  j = n(185457),
  P = n(570870),
  x = n(389052),
  v = n(24311),
  y = n(158508),
  E = n(710631),
  _ = n(297047),
  C = n(88966),
  I = n(712301),
  S = n(47091),
  T = n(558924),
  W = n(520063),
  A = n(37258),
  U = n(931617),
  w = n(332031),
  R = n(981631),
  k = n(388032);
let M = (0, u.Z)((0, o.Z)(function(e) {
  let {
    user: t,
    guildId: n,
    channel: o,
    context: u,
    onSelect: d,
    onHeightUpdate: M
  } = e, D = o.id, G = (0, A.Z)({
    userId: t.id,
    guildId: n,
    channelId: D
  }), L = (0, _.Z)(t, n, u), V = (0, C.Z)(t.id, u), q = (0, w.Z)(t.id), H = (0, v.Z)({
    user: t,
    context: u
  }), B = (0, r.e7)([O.Z, p.Z], () => {
    let e = O.Z.getVoiceChannelId();
    return p.Z.getChannel(e)
  }), {
    enabled: F
  } = f.Z.useExperiment({
    guildId: null == B ? void 0 : B.guild_id,
    location: "ThreadUserContextMenu"
  }), K = F ? null == B ? void 0 : B.id : null, Q = (0, T.Z)(t, K), Y = (0, j.Z)({
    user: t,
    guildId: n,
    channelId: D,
    context: u
  }), X = (0, N.Z)({
    user: t
  }), z = (0, Z.Z)({
    guildId: n,
    userId: t.id,
    analyticsLocation: {
      page: R.ZY5.GUILD_CHANNEL,
      section: R.jXE.CHAT_USERNAME,
      object: R.qAy.CONTEXT_MENU_ITEM
    },
    context: u
  }), J = (0, E.Z)({
    user: t,
    guildId: n
  }), $ = (0, c.Z)(null, t), ee = (0, m.Z)({
    user: t
  }), et = (0, h.Z)({
    user: t
  }), en = (0, S.Z)({
    user: t
  }), el = (0, x.Z)({
    user: t,
    guildId: n,
    channelId: D,
    location: "ThreadUserContextMenu"
  }), er = (0, y.Z)({
    user: t,
    guildId: n,
    channelId: D,
    location: "ThreadUserContextMenu"
  }), ei = (0, W.Z)(t, n, D), ea = (0, U.Z)(t.id, n), eo = (0, I.Z)(t, n), eu = (0, g.Z)({
    id: t.id,
    label: k.NW.string(k.t["/AXYnJ"])
  }), es = (0, b.Z)(t), ec = (0, P.Z)({
    commandType: s.yU.USER,
    commandTargetId: t.id,
    channel: o,
    guildId: n,
    onHeightUpdate: M
  }), ed = t.isNonUserBot();
  return (0, l.jsxs)(i.v2r, {
    navId: "user-context",
    onClose: a.Zy,
    "aria-label": k.NW.string(k.t.liqwPD),
    onSelect: d,
    children: [!ed && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.kSQ, {
        children: es
      }), (0, l.jsxs)(i.kSQ, {
        children: [G, L, V, H, Q, Y, X, q]
      }), (0, l.jsx)(i.kSQ, {
        children: $
      }), (0, l.jsxs)(i.kSQ, {
        children: [z, ec, J, ee, et, en, er, el]
      }), (0, l.jsx)(i.kSQ, {
        children: ei
      }), (0, l.jsxs)(i.kSQ, {
        children: [ea, eo]
      })]
    }), (0, l.jsx)(i.kSQ, {
      children: eu
    })]
  })
}, {
  object: R.qAy.CONTEXT_MENU
}), [d.Z.CONTEXT_MENU, d.Z.THREAD_USER_MENU])