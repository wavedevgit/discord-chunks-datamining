/** Chunk was on 10451 **/
n.d(t, {
  X: () => l
});
var r = n(442837),
  i = n(821849),
  s = n(509545),
  a = n(960048),
  o = n(981631);
let l = (0, r.Kb)(s.Z, {
  queryId: e => o.McO.SUBSCRIPTION_PLANS(e),
  get: e => null != e ? s.Z.getForSKU(e) : [],
  load: (e, t) => (null == t && a.Z.addBreadcrumb({
    message: "Error loading subscription plans: skuId is null"
  }), null != t ? (0, i.GZ)(t) : Promise.reject()),
  useStateHook: r.Wu
})