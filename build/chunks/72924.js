/** Chunk was on 53469 **/
n.d(t, {
  S: () => b
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
  h = n(55563),
  m = n(981631);
async function b(e) {
  var t, n, i, b, O;
  let {
    applicationId: g,
    skuId: N,
    initialPlanId: I,
    analyticsLocations: T,
    analyticsLocationObject: C
  } = e, S = h.Z.get(N);
  if (null == S) {
    let e = (await (0, a.oJ)(g)).find(e => e.sku.id === N);
    o()(null != e, "Could not find store listing for sku"), e.sku.type === m.epS.SUBSCRIPTION_GROUP && await (0, E.rx)(g, e.id)
  }
  S = null != S ? S : h.Z.get(N), o()(null != S && S.applicationId === g, "SKU must belong to application"), S.type !== m.epS.SUBSCRIPTION || (0, u.a)([S.id]) || await (0, s.GZ)(S.id);
  let y = function(e) {
    let t = (0, c.jA)({
        applicationId: e
      }),
      n = null != t ? p.Z.getWindow(t) : void 0;
    return null == n || n.closed ? l.z1l : l.u1M
  }(g);
  if (S.type !== m.epS.SUBSCRIPTION) return new Promise((e, t) => {
    (0, _.Z)({
      applicationId: g,
      skuId: N,
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
  await (t = g, n = N, i = I, b = C, O = T, (0, d.m)({
    applicationId: t,
    skuId: n,
    initialPlanId: i,
    analyticsLocationObject: b,
    analyticsLocations: O,
    renderHeader: (e, t, n) => (0, r.jsx)(f.t, {
      step: n,
      onClose: () => t(!1)
    })
  }))
}