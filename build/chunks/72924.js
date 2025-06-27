/** Chunk was on 74739 **/
n.d(t, {
  S: () => S
});
var r = n(255367);
n(73800);
var i = n(512722),
  l = n.n(i),
  o = n(481060),
  a = n(558381),
  c = n(821849),
  s = n(531826),
  u = n(15640),
  E = n(724870),
  d = n(87484),
  _ = n(928518),
  O = n(106976),
  I = n(689011),
  T = n(55563),
  N = n(981631);
async function S(e) {
  var t, n, i, S, p;
  let {
    applicationId: A,
    skuId: R,
    initialPlanId: P,
    analyticsLocations: C,
    analyticsLocationObject: D
  } = e, f = T.Z.get(R);
  if (null == f) {
    let e = (await (0, a.oJ)(A)).find(e => e.sku.id === R);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === N.epS.SUBSCRIPTION_GROUP && await (0, O.rx)(A, e.id)
  }
  f = null != f ? f : T.Z.get(R), l()(null != f && f.applicationId === A, "SKU must belong to application"), f.type !== N.epS.SUBSCRIPTION || (0, u.a)([f.id]) || await (0, c.GZ)(f.id);
  let m = function(e) {
    let t = (0, s.jA)({
        applicationId: e
      }),
      n = null != t ? _.Z.getWindow(t) : void 0;
    return null == n || n.closed ? o.z1l : o.u1M
  }(A);
  if (f.type !== N.epS.SUBSCRIPTION) return new Promise((e, t) => {
    (0, d.Z)({
      applicationId: A,
      skuId: R,
      analyticsLocationObject: D,
      analyticsLocations: C,
      contextKey: m,
      onComplete: t => {
        var n;
        e(null != (n = null == t ? void 0 : t.entitlements) ? n : [])
      },
      onClose: e => {
        e || t()
      }
    })
  });
  await (t = A, n = R, i = P, S = D, p = C, (0, E.m)({
    applicationId: t,
    skuId: n,
    initialPlanId: i,
    analyticsLocationObject: S,
    analyticsLocations: p,
    renderHeader: (e, t, n) => (0, r.jsx)(I.t, {
      step: n,
      onClose: () => t(!1)
    })
  }))
}