/** Chunk was on 30243 **/
r.r(t), r.d(t, {
  ItemDetailsModal: () => m
}), r(266796), r(566702);
var n = r(200651);
r(192379);
var l = r(752843),
  i = r(442837),
  o = r(481060),
  a = r(55563),
  c = r(551428),
  s = r(73346),
  u = r(591759),
  d = r(110742),
  p = r(886253),
  b = r(680005),
  f = r(938337),
  O = r(981631),
  y = r(388032);

function m(e) {
  var t, r, m, j;
  let {
    onClose: g,
    transitionState: h,
    skuId: v,
    appId: P,
    onHeaderTitleClick: x
  } = e, w = (0, i.e7)([c.Z], () => c.Z.getForSKU(v), [v]), S = (0, i.e7)([a.Z], () => a.Z.get(v), [v]), C = (0, d.M)(v);
  if (null == S) return null;
  let E = null !== (r = S.name) && void 0 !== r ? r : "",
    N = null !== (m = null == w ? void 0 : null === (t = w.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== m ? m : void 0,
    I = (null == w ? void 0 : w.headerBackground) != null && null !== (j = u.Z.toURLSafe((0, s._W)(P, w.headerBackground, 256))) && void 0 !== j ? j : void 0,
    k = S.type === O.epS.DURABLE && C,
    Z = S.type === O.epS.DURABLE ? k ? y.NW.string(y.t.bm82mp) : y.NW.string(y.t["6gprwc"]) : void 0,
    {
      price: T
    } = S;
  return null == T ? null : (0, n.jsx)(p.A, {
    appId: P,
    skuId: S.id,
    transitionState: h,
    onHeaderTitleClick: null != x ? x : g,
    onClose: g,
    footer: (0, n.jsx)(b.YG, {
      appId: P,
      sku: S
    }),
    children: (0, n.jsx)(f.i, {
      appId: P,
      skuId: S.id,
      title: E,
      description: N,
      imgSrc: I,
      tag: null != Z ? (0, n.jsx)(l.V, {
        text: Z
      }) : void 0,
      FallbackIcon: o.Prq
    })
  })
}