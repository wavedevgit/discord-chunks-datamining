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
    skuId: b,
    appId: N,
    onHeaderTitleClick: S
  } = e, I = (0, a.e7)([s.Z], () => s.Z.getForSKU(b), [b]), k = (0, a.e7)([i.Z], () => i.Z.get(b), [b]), O = (0, u.M)(b);
  if (null == k) return null;
  let C = null != (t = k.name) ? t : "",
    y = null != (v = null == I || null == (n = I.description) ? void 0 : n.trim()) ? v : void 0,
    R = (null == I ? void 0 : I.headerBackground) != null && null != (f = d.Z.toURLSafe((0, c._W)(N, I.headerBackground, 256))) ? f : void 0,
    T = k.type === h.epS.DURABLE && O,
    B = k.type === h.epS.DURABLE ? T ? p.intl.string(p.t.bm82mp) : p.intl.string(p.t["6gprwc"]) : void 0,
    {
      price: E
    } = k;
  return null == E ? null : (0, l.jsx)(x.A, {
    appId: N,
    skuId: k.id,
    transitionState: g,
    onHeaderTitleClick: null != S ? S : j,
    onClose: j,
    footer: (0, l.jsx)(m.YG, {
      appId: N,
      sku: k
    }),
    children: (0, l.jsx)(_.i, {
      appId: N,
      skuId: k.id,
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