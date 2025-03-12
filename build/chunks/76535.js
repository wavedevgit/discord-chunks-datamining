/** Chunk was on 30806 **/
n.d(t, {
  H: () => u,
  R: () => a
});
var i = n(192379),
  r = n(442837),
  l = n(584825),
  s = n(17079),
  o = n(281320);

function a(e, t) {
  let n = (0, r.e7)([o.Z], () => o.Z.getPriceTiersForGuildAndType(e, t)),
    l = (0, r.e7)([o.Z], () => o.Z.getPriceTiersFetchStateForGuildAndType(e, t));
  return i.useEffect(() => {
    l === o.M.NOT_FETCHED && (0, s.T)(e, t)
  }, [e, l, t]), {
    loading: l === o.M.FETCHING,
    priceTiers: n
  }
}

function u(e) {
  let {
    fetchSubscriptionsSettings: t,
    loading: n,
    error: r
  } = (0, l.JH)();
  i.useEffect(() => {
    t(e)
  }, [t, e]);
  let s = (0, l.YB)(e);
  return {
    loaded: null != s && !n,
    subscriptionsSettings: s,
    loading: n,
    error: r
  }
}