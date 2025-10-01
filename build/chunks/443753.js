/** Chunk was on web.js **/
/** chunk id: 443753, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk223143 = require("./223143.js");
let s = e => {
  let [t, n] = r.useState(), {
    categories: s
  } = (0, o.ZP)();
  return r.useEffect(() => {
    (null == t || 0 === t.size) && n(s)
  }, [s, t]), r.useMemo(() => {
    if (null != e) return e;
    if (null == t) return;
    let n = (0, a.XS)(t).filter(e => {
      let {
        skuId: t
      } = e, n = i.Z.getProduct(t);
      return (0, a.G1)(n)
    });
    return n[Math.floor(Math.random() * n.length)]
  }, [t, e])
}