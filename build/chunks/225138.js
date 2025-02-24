/** Chunk was on 37220 **/
n.d(t, {
  S: () => F,
  default: () => U
});
var r = n(200651);
n(192379);
var i = n(374470),
  l = n(481060),
  a = n(239091),
  o = n(911969),
  s = n(299206),
  c = n(26737),
  u = n(29264),
  d = n(905041),
  f = n(89013),
  g = n(988500),
  m = n(570870),
  b = n(786095),
  p = n(268623),
  h = n(986240),
  v = n(667922),
  y = n(941389),
  N = n(449751),
  O = n(749339),
  E = n(601184),
  j = n(6148),
  S = n(519110),
  P = n(759875),
  Z = n(168405),
  I = n(536639),
  x = n(720904),
  _ = n(88791),
  T = n(385302),
  M = n(873699),
  w = n(134323),
  A = n(429260),
  D = n(1626),
  C = n(279329),
  W = n(627938),
  L = n(512303),
  k = n(481300),
  R = n(975368),
  G = n(388032);

function U(e) {
  var t, n;
  let r, l, o, s, {
      channel: c,
      message: u,
      target: d,
      mediaItem: f,
      shouldHideMediaOptions: g,
      onSelect: m,
      onHeightUpdate: b
    } = e,
    p = d,
    h = d.getAttribute("data-type"),
    v = d.getAttribute("data-id"),
    y = d.getAttribute("data-name");
  if (null != f) l = r = o = f.url;
  else
    for (;
      (0, i.k)(p);)(0, i.k)(p, HTMLImageElement) && null != p.src && (l = p.src), (0, i.k)(p, HTMLAnchorElement) && null != p.href && (r = p.href, s = p.textContent, null == l && "img" === p.getAttribute("data-role") && (l = r, p.hasAttribute("data-safe-src") && "" !== p.getAttribute("data-safe-src") && (o = p.getAttribute("data-safe-src")))), p = p.parentNode;
  return F({
    message: u,
    channel: c,
    mediaItem: f,
    textSelection: null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "",
    favoriteableType: h,
    favoriteableId: v,
    favoriteableName: y,
    itemHref: r,
    itemSrc: l,
    itemSafeSrc: o,
    itemTextContent: s,
    canReport: !0,
    onHeightUpdate: b,
    onSelect: m,
    onClose: a.Zy,
    navId: "message",
    ariaLabel: G.NW.string(G.t.ChPNkJ),
    shouldHideMediaOptions: g
  })
}

function F(e) {
  let {
    message: t,
    channel: n,
    mediaItem: i,
    textSelection: a,
    favoriteableType: U,
    favoriteableId: F,
    favoriteableName: H,
    itemHref: K,
    itemSrc: z,
    itemSafeSrc: B,
    itemTextContent: X,
    canReport: q,
    onHeightUpdate: J,
    onSelect: Q,
    onClose: V,
    navId: Y,
    ariaLabel: $,
    shouldHideMediaOptions: ee = !1
  } = e, et = (0, c.Z)(a), en = (0, f.Z)(a), er = (0, x.Z)(t, n), ei = (0, v.Z)(t, n), el = (0, j.Z)(t, n), ea = (0, I.Z)(t, n), eo = (0, S.Z)({
    type: U,
    id: F,
    name: H
  }), es = (0, D.Z)(t, n), ec = (0, Z.Z)(t, n), eu = (0, _.Z)(t), ed = (0, y.Z)(t, n), ef = (0, N.Z)(t, n), eg = (0, T.Z)(t, n), em = (0, M.Z)(t, n), eb = (0, E.Z)(t, n), ep = (0, A.Z)(t), eh = (0, A.e)(t), ev = (0, C.Z)(t, n), ey = (0, d.Z)(null != K ? K : z, X, t, {
    shouldHideMediaOptions: ee
  }), eN = (0, u.Z)(B, t, {
    shouldHideMediaOptions: ee
  }), eO = (0, k.Z)(t, i), eE = (0, s.Z)({
    id: t.id,
    label: G.NW.string(G.t.zBoHlZ),
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), ej = (0, w.Z)(t, n), eS = (0, P.Z)(t, n), eP = (0, W.Z)(t, n), eZ = (0, b.Z)(a, n.getGuildId()), eI = (0, p.Z)(t), ex = (0, O.Z)(t), e_ = (0, R.Z)(t), eT = (0, h.Z)(t, n), eM = (0, m.Z)({
    commandType: o.yU.MESSAGE,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: J
  }), ew = (0, L.Z)(t), eA = (0, g.Z)(t);
  return (0, r.jsxs)(l.v2r, {
    navId: Y,
    onClose: V,
    "aria-label": $,
    onSelect: Q,
    children: [(0, r.jsx)(l.kSQ, {
      children: et
    }), (0, r.jsx)(l.kSQ, {
      children: en
    }), (0, r.jsxs)(l.kSQ, {
      children: ["" === a ? er : null, ei, eu, eT]
    }), (0, r.jsxs)(l.kSQ, {
      children: [el, ej, eS, eP]
    }), (0, r.jsxs)(l.kSQ, {
      children: [ex, ea, eI, eM, es, ec, ed, ef, ev, eA, ew]
    }), (0, r.jsxs)(l.kSQ, {
      children: [em, eg, eb, q && ep, q && eh]
    }), (0, r.jsxs)(l.kSQ, {
      children: [eo, eZ, eN, eO, e_]
    }), (0, r.jsx)(l.kSQ, {
      children: ey
    }), (0, r.jsx)(l.kSQ, {
      children: eE
    })]
  })
}