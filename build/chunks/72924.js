/** Chunk was on 40247 **/
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
  O = n(55563),
  T = n(981631);
async function S(e) {
  var t, n, i, S, p;
  let {
    applicationId: P,
    skuId: A,
    initialPlanId: R,
    analyticsLocations: C,
    analyticsLocationObject: f
  } = e, m = O.Z.get(A);
  if (null == m) {
    let e = (await (0, a.oJ)(P)).find(e => e.sku.id === A);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === T.epS.SUBSCRIPTION_GROUP && await (0, N.rx)(P, e.id)
  }
  m = null != m ? m : O.Z.get(A), l()(null != m && m.applicationId === P, "SKU must belong to application"), m.type !== T.epS.SUBSCRIPTION || (0, u.a)([m.id]) || await (0, s.GZ)(m.id);
  let D = function(e) {
    let t = (0, c.jA)({
        applicationId: e
      }),
      n = null != t ? _.Z.getWindow(t) : void 0;
    return null == n || n.closed ? o.z1l : o.u1M
  }(P);
  if (m.type !== T.epS.SUBSCRIPTION) return new Promise((e, t) => {
    (0, d.Z)({
      applicationId: P,
      skuId: A,
      analyticsLocationObject: f,
      analyticsLocations: C,
      contextKey: D,
      onComplete: t => {
        var n;
        e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : [])
      },
      onClose: e => {
        e || t()
      }
    })
  });
  await (t = P, n = A, i = R, S = f, p = C, (0, E.m)({
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