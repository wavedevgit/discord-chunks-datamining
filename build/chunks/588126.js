/** Chunk was on web.js **/
/** chunk id: 588126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk223143 = require("./223143.js");
let s = function(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    [n, s] = r.useState(),
    {
      categories: l,
      purchases: c
    } = (0, o.ZP)();
  return r.useEffect(() => {
    (null == n || 0 === n.size) && s(l)
  }, [l, n]), r.useMemo(() => {
    if (null != e) return e;
    if (null == n || !t) return;
    let r = (0, a.iC)(c, n).filter(e => {
      let {
        skuId: t
      } = e, n = i.Z.getProduct(t);
      return (0, a.G1)(n)
    });
    return r[Math.floor(Math.random() * r.length)]
  }, [n, e, c, t])
}