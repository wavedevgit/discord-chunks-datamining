/** Chunk was on 98977 **/
n.d(e, {
  Z: () => c,
  g: () => o
}), n(47120);
var r = n(192379),
  s = n(442837),
  i = n(146282),
  l = n(327220),
  a = n(959580),
  u = n(371177);

function o(t, e) {
  let {
    types: n
  } = t;
  return !!(null == n || n.has(e.content_type))
}

function c(t) {
  let {
    feed: e,
    filters: n
  } = (0, s.cj)([i.Z], () => ({
    feed: i.Z.getFeed(t),
    filters: i.Z.getFilters()
  })), c = r.useMemo(() => {
    let t = null == e ? void 0 : e.entries.map(t => t.content);
    return null != n ? null == t ? void 0 : t.filter(t => o(n, t)) : t
  }, [e, n]);
  return c = (0, l.Z)(c), c = (0, a.Z)(c), c = (0, u.Z)(c)
}