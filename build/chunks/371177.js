/** Chunk was on 93594 **/
n.d(t, {
  Z: () => a
}), n(388685);
var r = n(192379),
  l = n(442837),
  i = n(902704),
  u = n(158776),
  o = n(561308),
  c = n(231338);

function a(e) {
  let t = r.useRef(new Set),
    n = r.useMemo(() => {
      let n = new Set(null == e ? void 0 : e.map(e => e.author_id));
      return (0, i.E)([...t.current], [...n]) || (t.current = n), t.current
    }, [e]),
    a = (0, l.Wu)([u.Z], () => Array.from(n).filter(e => {
      let t = u.Z.getStatus(e);
      return null !== t && [c.Sk.OFFLINE, c.Sk.INVISIBLE].includes(t)
    }));
  return r.useMemo(() => {
    let t = new Set(a);
    return null == e ? void 0 : e.filter(e => !(0, o.kr)(e) || !t.has(e.author_id))
  }, [e, a])
}