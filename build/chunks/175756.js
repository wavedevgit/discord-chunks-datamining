/** Chunk was on 7384 **/
/** chunk id: 175756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk223143 = require("./223143.js");
let l = e => {
  let [t, n] = i.useState(), {
    categories: l
  } = (0, a.ZP)();
  return i.useEffect(() => {
    (null == t || 0 === t.size) && n(l)
  }, [l, t]), i.useMemo(() => {
    if (null != e) return e;
    if (null == t) return;
    let n = (0, s.XS)(t).filter(e => {
      let {
        skuId: t
      } = e, n = r.Z.getProduct(t);
      return (0, s.G1)(n)
    }).map(e => e.id);
    return n[Math.floor(Math.random() * n.length)]
  }, [t, e])
}