/** Chunk was on 66181 **/
/** chunk id: 588126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk223143 = require("./223143.js");
let l = function(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    [n, l] = i.useState(),
    {
      categories: o,
      purchases: c
    } = (0, a.ZP)();
  return i.useEffect(() => {
    (null == n || 0 === n.size) && l(o)
  }, [o, n]), i.useMemo(() => {
    if (null != e) return e;
    if (null == n || !t) return;
    let i = (0, s.iC)(c, n).filter(e => {
      let {
        skuId: t
      } = e, n = r.Z.getProduct(t);
      return (0, s.G1)(n)
    });
    return i[Math.floor(Math.random() * i.length)]
  }, [n, e, c, t])
}