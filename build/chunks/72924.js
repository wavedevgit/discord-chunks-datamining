/** Chunk was on 76282 **/
n.d(t, {
  S: () => g
});
var r = n(200651);
n(192379);
var i = n(512722),
  o = n.n(i),
  l = n(481060),
  a = n(558381),
  s = n(821849),
  c = n(531826),
  u = n(15640),
  d = n(724870),
  _ = n(87484),
  p = n(928518),
  E = n(106976),
  f = n(689011),
  m = n(55563),
  h = n(981631);
async function g(e) {
  var t, n, i, g, b;
  let {
    applicationId: O,
    skuId: N,
    initialPlanId: I,
    analyticsLocations: C,
    analyticsLocationObject: T
  } = e, S = m.Z.get(N);
  if (null == S) {
    let e = (await (0, a.oJ)(O)).find(e => e.sku.id === N);
    o()(null != e, "Could not find store listing for sku"), e.sku.type === h.epS.SUBSCRIPTION_GROUP && await (0, E.rx)(O, e.id)
  }
  S = null != S ? S : m.Z.get(N), o()(null != S && S.applicationId === O, "SKU must belong to application"), S.type !== h.epS.SUBSCRIPTION || (0, u.a)([S.id]) || await (0, s.GZ)(S.id);
  let y = function(e) {
    let t = (0, c.jA)({
        applicationId: e
      }),
      n = null != t ? p.Z.getWindow(t) : void 0;
    return null == n || n.closed ? l.z1l : l.u1M
  }(O);
  if (S.type !== h.epS.SUBSCRIPTION) return new Promise((e, t) => {
    (0, _.Z)({
      applicationId: O,
      skuId: N,
      analyticsLocationObject: T,
      analyticsLocations: C,
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
  await (t = O, n = N, i = I, g = T, b = C, (0, d.m)({
    applicationId: t,
    skuId: n,
    initialPlanId: i,
    analyticsLocationObject: g,
    analyticsLocations: b,
    renderHeader: (e, t, n) => (0, r.jsx)(f.t, {
      step: n,
      onClose: () => t(!1)
    })
  }))
}