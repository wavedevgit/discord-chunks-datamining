/** Chunk was on 93886 **/
n.d(t, {
  Z: () => d,
  g: () => c
}), n(47120);
var r = n(192379),
  a = n(442837),
  i = n(146282),
  l = n(327220),
  o = n(959580),
  s = n(371177);

function c(e, t) {
  let {
    types: n
  } = e;
  return !!(null == n || n.has(t.content_type))
}

function d(e) {
  let {
    feed: t,
    filters: n
  } = (0, a.cj)([i.Z], () => ({
    feed: i.Z.getFeed(e),
    filters: i.Z.getFilters()
  })), d = r.useMemo(() => {
    let e = null == t ? void 0 : t.entries.map(e => e.content);
    return null != n ? null == e ? void 0 : e.filter(e => c(n, e)) : e
  }, [t, n]);
  return d = (0, l.Z)(d), d = (0, o.Z)(d), d = (0, s.Z)(d)
}