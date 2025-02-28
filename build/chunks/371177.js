/** Chunk was on 93886 **/
n.d(t, {
  Z: () => c
}), n(47120);
var r = n(192379),
  a = n(442837),
  l = n(902704),
  i = n(158776),
  o = n(561308),
  s = n(231338);

function c(e) {
  let t = r.useRef(new Set),
    n = r.useMemo(() => {
      let n = new Set(null == e ? void 0 : e.map(e => e.author_id));
      return (0, l.E)([...t.current], [...n]) || (t.current = n), t.current
    }, [e]),
    c = (0, a.Wu)([i.Z], () => Array.from(n).filter(e => {
      let t = i.Z.getStatus(e);
      return null !== t && [s.Sk.OFFLINE, s.Sk.INVISIBLE].includes(t)
    }));
  return r.useMemo(() => {
    let t = new Set(c);
    return null == e ? void 0 : e.filter(e => !(0, o.kr)(e) || !t.has(e.author_id))
  }, [e, c])
}