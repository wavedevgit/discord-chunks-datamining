/** Chunk was on 89311 **/
r.d(t, {
  Z: () => u,
  g: () => c
}), r(388685);
var n = r(192379),
  a = r(442837),
  i = r(146282),
  l = r(327220),
  s = r(959580),
  o = r(371177);

function c(e, t) {
  let {
    types: r
  } = e;
  return null == r || !!r.has(t.content_type)
}

function u(e) {
  let {
    feed: t,
    filters: r
  } = (0, a.cj)([i.Z], () => ({
    feed: i.Z.getFeed(e),
    filters: i.Z.getFilters()
  })), u = n.useMemo(() => {
    let e = null == t ? void 0 : t.entries.map(e => e.content);
    return null != r ? null == e ? void 0 : e.filter(e => c(r, e)) : e
  }, [t, r]);
  return u = (0, l.Z)(u), u = (0, s.Z)(u), u = (0, o.Z)(u)
}