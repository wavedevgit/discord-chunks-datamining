/** Chunk was on 86546 **/
n.d(t, {
  Z: () => u,
  g: () => c
}), n(47120);
var r = n(192379),
  l = n(442837),
  i = n(146282),
  o = n(327220),
  a = n(959580),
  s = n(371177);

function c(e, t) {
  let {
    types: n
  } = e;
  return !!(null == n || n.has(t.content_type))
}

function u(e) {
  let {
    feed: t,
    filters: n
  } = (0, l.cj)([i.Z], () => ({
    feed: i.Z.getFeed(e),
    filters: i.Z.getFilters()
  })), u = r.useMemo(() => {
    let e = null == t ? void 0 : t.entries.map(e => e.content);
    return null != n ? null == e ? void 0 : e.filter(e => c(n, e)) : e
  }, [t, n]);
  return u = (0, o.Z)(u), u = (0, a.Z)(u), u = (0, s.Z)(u)
}