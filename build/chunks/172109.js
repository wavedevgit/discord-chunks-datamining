/** Chunk was on 76030 **/
n.d(t, {
  O: () => s
}), n(47120);
var r = n(192379),
  i = n(442837),
  a = n(471518),
  o = n(370210),
  l = n(973616);

function s(e) {
  let {
    id: t,
    isDiscoverable: n
  } = e, [s, c, d] = (0, i.Wu)([o.Z], () => [o.Z.getApplication(t), o.Z.isInvalidApplication(t), o.Z.getApplicationFetchState(t)], [t]);
  return r.useEffect(() => {
    !1 === n || c || d === o.M.FETCHED || d === o.M.FETCHING || (0, a.gZ)(t)
  }, [t, d, n, c]), r.useMemo(() => null != s ? e.mergeFromApplicationUpdate(l.ZP.createFromServer(s)) : e, [e, s])
}