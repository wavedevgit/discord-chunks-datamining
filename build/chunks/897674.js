/** Chunk was on 90564 **/
n.d(t, {
  Z: () => c,
  g: () => s
}), n(388685);
var r = n(192379),
  l = n(442837),
  a = n(146282),
  i = n(327220),
  o = n(959580),
  u = n(371177);

function s(e, t) {
  let {
    types: n
  } = e;
  return null == n || !!n.has(t.content_type)
}

function c(e) {
  let {
    feed: t,
    filters: n
  } = (0, l.cj)([a.Z], () => ({
    feed: a.Z.getFeed(e),
    filters: a.Z.getFilters()
  })), c = r.useMemo(() => {
    let e = null == t ? void 0 : t.entries.map(e => e.content);
    return null != n ? null == e ? void 0 : e.filter(e => s(n, e)) : e
  }, [t, n]);
  return c = (0, i.Z)(c), c = (0, o.Z)(c), c = (0, u.Z)(c)
}