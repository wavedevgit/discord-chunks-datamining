/** Chunk was on 66711 **/
n.d(t, {
  H: () => a
}), n(47120), n(411104);
var i = n(192379),
  l = n(442837),
  r = n(821849),
  o = n(509545);

function a(e) {
  let [t, n] = i.useState(!1), a = (0, l.Wu)([o.Z], () => o.Z.getForSKU(e), [e]), u = (0, l.e7)([o.Z], () => o.Z.isFetchingForSKU(e), [e]);
  return i.useEffect(() => {
    o.Z.isFetchingForSKU(e) || (n(!1), (0, r.GZ)(e).then(() => {
      n(!1)
    }).catch(() => {
      n(!0)
    }))
  }, [e]), {
    data: a,
    isLoading: u,
    error: t ? Error("SubscriptionPlans failed to fetch") : void 0
  }
}