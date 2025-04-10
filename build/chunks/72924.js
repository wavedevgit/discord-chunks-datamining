/** Chunk was on 84466 **/
n.d(t, {
  S: () => S
});
var r = n(200651);
n(192379);
var i = n(512722),
  l = n.n(i),
  o = n(481060),
  a = n(558381),
  s = n(821849),
  c = n(531826),
  u = n(15640),
  E = n(724870),
  d = n(87484),
  _ = n(928518),
  N = n(106976),
  I = n(689011),
  T = n(55563),
  O = n(981631);
async function S(e) {
  var t, n, i, S, A;
  let {
    applicationId: P,
    skuId: R,
    initialPlanId: p,
    analyticsLocations: C,
    analyticsLocationObject: D
  } = e, f = T.Z.get(R);
  if (null == f) {
    let e = (await (0, a.oJ)(P)).find(e => e.sku.id === R);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === O.epS.SUBSCRIPTION_GROUP && await (0, N.rx)(P, e.id)
  }
  f = null != f ? f : T.Z.get(R), l()(null != f && f.applicationId === P, "SKU must belong to application"), f.type !== O.epS.SUBSCRIPTION || (0, u.a)([f.id]) || await (0, s.GZ)(f.id);
  let m = function(e) {
    let t = (0, c.jA)({
        applicationId: e
      }),
      n = null != t ? _.Z.getWindow(t) : void 0;
    return null == n || n.closed ? o.z1l : o.u1M
  }(P);
  if (f.type !== O.epS.SUBSCRIPTION) return new Promise((e, t) => {
    (0, d.Z)({
      applicationId: P,
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
  await (t = P, n = R, i = p, S = D, A = C, (0, E.m)({
    applicationId: t,
    skuId: n,
    initialPlanId: i,
    analyticsLocationObject: S,
    analyticsLocations: A,
    renderHeader: (e, t, n) => (0, r.jsx)(I.t, {
      step: n,
      onClose: () => t(!1)
    })
  }))
}