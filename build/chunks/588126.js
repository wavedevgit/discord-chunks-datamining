/** Chunk was on 10451 **/
n.d(t, {
  Z: () => o
}), n(47120);
var r = n(192379),
  i = n(597688),
  s = n(884697),
  a = n(223143);
let o = function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    [n, o] = r.useState(),
    {
      categories: l,
      purchases: c
    } = (0, a.ZP)({
      location: "useTryItOutAvatarDecoration"
    });
  return r.useEffect(() => {
    (null == n || 0 === n.size) && o(l)
  }, [l, n]), r.useMemo(() => {
    if (null != e) return e;
    if (null == n || !t) return;
    let r = (0, s.iC)(c, n).filter(e => {
      let {
        skuId: t
      } = e, n = i.Z.getProduct(t);
      return (0, s.G1)(n)
    });
    return r[Math.floor(Math.random() * r.length)]
  }, [n, e, c, t])
}