/** Chunk was on 49750 **/
n.d(t, {
  S: () => g
});
var r = n(200651);
n(192379);
var i = n(512722),
  l = n.n(i),
  o = n(481060),
  s = n(558381),
  a = n(821849),
  c = n(531826),
  u = n(15640),
  d = n(724870),
  _ = n(87484),
  E = n(928518),
  p = n(106976),
  m = n(689011),
  h = n(55563),
  f = n(981631);
async function g(e) {
  var t, n, i, g, N;
  let {
    applicationId: O,
    skuId: I,
    initialPlanId: b,
    analyticsLocations: T,
    analyticsLocationObject: C
  } = e, S = h.Z.get(I);
  if (null == S) {
    let e = (await (0, s.oJ)(O)).find(e => e.sku.id === I);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === f.epS.SUBSCRIPTION_GROUP && await (0, p.rx)(O, e.id)
  }
  S = null != S ? S : h.Z.get(I), l()(null != S && S.applicationId === O, "SKU must belong to application"), S.type !== f.epS.SUBSCRIPTION || (0, u.a)([S.id]) || await (0, a.GZ)(S.id);
  let y = function(e) {
    let t = (0, c.jA)({
        applicationId: e
      }),
      n = null != t ? E.Z.getWindow(t) : void 0;
    return null == n || n.closed ? o.z1l : o.u1M
  }(O);
  if (S.type !== f.epS.SUBSCRIPTION) return new Promise((e, t) => {
    (0, _.Z)({
      applicationId: O,
      skuId: I,
      analyticsLocationObject: C,
      analyticsLocations: T,
      contextKey: y,
      onComplete: t => {
        var n;
        e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : [])
      },
      onClose: e => {
        e || t()
      }
    })
  });
  await (t = O, n = I, i = b, g = C, N = T, (0, d.m)({
    applicationId: t,
    skuId: n,
    initialPlanId: i,
    analyticsLocationObject: g,
    analyticsLocations: N,
    renderHeader: (e, t, n) => (0, r.jsx)(m.t, {
      step: n,
      onClose: () => t(!1)
    })
  }))
}