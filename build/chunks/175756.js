/** Chunk was on 20447 **/
n.d(t, {
  Z: () => o
}), n(47120);
var r = n(192379),
  i = n(597688),
  s = n(884697),
  a = n(223143);
let o = e => {
  let [t, n] = r.useState(), {
    categories: o
  } = (0, a.ZP)({
    location: "useTryItOutProfileEffectId"
  });
  return r.useEffect(() => {
    (null == t || 0 === t.size) && n(o)
  }, [o, t]), r.useMemo(() => {
    if (null != e) return e;
    if (null == t) return;
    let n = (0, s.XS)(t).filter(e => {
      let {
        skuId: t
      } = e, n = i.Z.getProduct(t);
      return (0, s.G1)(n)
    }).map(e => e.id);
    return n[Math.floor(Math.random() * n.length)]
  }, [t, e])
}