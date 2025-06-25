/** Chunk was on 69796 **/
t.r(n), t.d(n, {
  ItemDetailsModal: () => v
}), t(953529), t(781311);
var l = t(255367);
t(73800);
var r = t(752843),
  a = t(442837),
  o = t(481060),
  i = t(55563),
  s = t(551428),
  c = t(73346),
  d = t(591759),
  u = t(110742),
  x = t(886253),
  m = t(680005),
  _ = t(938337),
  h = t(981631),
  p = t(388032);

function v(e) {
  var n, t, v, f;
  let {
    onClose: j,
    transitionState: g,
    skuId: k,
    appId: b,
    onHeaderTitleClick: N
  } = e, S = (0, a.e7)([s.Z], () => s.Z.getForSKU(k), [k]), I = (0, a.e7)([i.Z], () => i.Z.get(k), [k]), O = (0, u.M)(k);
  if (null == I) return null;
  let C = null != (t = I.name) ? t : "",
    y = null != (v = null == S || null == (n = S.description) ? void 0 : n.trim()) ? v : void 0,
    R = (null == S ? void 0 : S.headerBackground) != null && null != (f = d.Z.toURLSafe((0, c._W)(b, S.headerBackground, 256))) ? f : void 0,
    T = I.type === h.epS.DURABLE && O,
    B = I.type === h.epS.DURABLE ? T ? p.intl.string(p.t.bm82mp) : p.intl.string(p.t["6gprwc"]) : void 0,
    {
      price: E
    } = I;
  return null == E ? null : (0, l.jsx)(x.A, {
    appId: b,
    skuId: I.id,
    transitionState: g,
    onHeaderTitleClick: null != N ? N : j,
    onClose: j,
    footer: (0, l.jsx)(m.YG, {
      appId: b,
      sku: I
    }),
    children: (0, l.jsx)(_.i, {
      appId: b,
      skuId: I.id,
      title: C,
      description: y,
      imgSrc: R,
      tag: null != B ? (0, l.jsx)(r.V, {
        text: B
      }) : void 0,
      FallbackIcon: o.Prq
    })
  })
}