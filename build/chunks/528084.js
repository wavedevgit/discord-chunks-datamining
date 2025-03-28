/** Chunk was on 20447 **/
n.d(t, {
  a: () => o
});
var r = n(442837),
  i = n(663389),
  s = n(996733),
  a = n(991346);

function o(e, t) {
  let n = (0, a.Gj)(t),
    o = (0, s.Z7)(),
    l = (0, r.e7)([i.Z], () => i.Z.getSubsection()),
    c = e.filter(e => null == e.predicate || e.predicate());
  if (null != n && n.size > 0) {
    let e = c.filter(e => n.has(e.setting));
    c = e.length > 0 ? e : c
  }
  if (null != o && o.length > 0 && null == l) {
    let e = c.find(e => e.title.toLowerCase() === o.toLowerCase());
    if (null != e) return {
      viewableTabs: c,
      filteredTab: e
    }
  }
  let d = c.find(e => null != e && e.setting === l);
  return {
    viewableTabs: c,
    filteredTab: d
  }
}