/** Chunk was on 69796 **/
t.r(n), t.d(n, {
  ItemDetailsModal: () => p
}), t(266796), t(566702);
var r = t(200651);
t(192379);
var l = t(752843),
  a = t(442837),
  o = t(481060),
  i = t(55563),
  s = t(551428),
  c = t(73346),
  d = t(591759),
  u = t(110742),
  x = t(886253),
  m = t(680005),
  h = t(938337),
  _ = t(981631),
  v = t(388032);

function p(e) {
  var n, t, p, j;
  let {
    onClose: f,
    transitionState: g,
    skuId: N,
    appId: k,
    onHeaderTitleClick: b
  } = e, S = (0, a.e7)([s.Z], () => s.Z.getForSKU(N), [N]), I = (0, a.e7)([i.Z], () => i.Z.get(N), [N]), y = (0, u.M)(N);
  if (null == I) return null;
  let O = null !== (t = I.name) && void 0 !== t ? t : "",
    R = null !== (p = null == S ? void 0 : null === (n = S.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== p ? p : void 0,
    C = (null == S ? void 0 : S.headerBackground) != null && null !== (j = d.Z.toURLSafe((0, c._W)(k, S.headerBackground, 256))) && void 0 !== j ? j : void 0,
    T = I.type === _.epS.DURABLE && y,
    B = I.type === _.epS.DURABLE ? T ? v.NW.string(v.t.bm82mp) : v.NW.string(v.t["6gprwc"]) : void 0,
    {
      price: E
    } = I;
  return null == E ? null : (0, r.jsx)(x.A, {
    appId: k,
    skuId: I.id,
    transitionState: g,
    onHeaderTitleClick: null != b ? b : f,
    onClose: f,
    footer: (0, r.jsx)(m.YG, {
      appId: k,
      sku: I
    }),
    children: (0, r.jsx)(h.i, {
      appId: k,
      skuId: I.id,
      title: O,
      description: R,
      imgSrc: C,
      tag: null != B ? (0, r.jsx)(l.V, {
        text: B
      }) : void 0,
      FallbackIcon: o.Prq
    })
  })
}