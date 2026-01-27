/** Chunk was on web.js **/
/** chunk id: 262737, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk979286 = require("./979286.js"),
  Chunk590180 = require("./590180.js"),
  Chunk4227 = require("./4227.js"),
  Chunk203632 = require("./203632.js"),
  Chunk259248 = require("./259248.js");
let u = e => {
  let t = (0, i.bG)([c.A], () => c.A.getProfileEffect(e)),
    n = (0, i.bG)([o.A, s.A], () => {
      if (null == e) return;
      let t = o.A.getProduct(e);
      if ((0, l.C)(null == t ? true : t.items[0])) return t.items[0];
      let n = s.A.getPurchase(e);
      if ((0, l.C)(null == n ? true : n.items[0])) return n.items[0]
    }),
    u = r.useMemo(() => null != n ? {
      skuId: n.skuId,
      config: n
    } : t, [n, t]),
    d = null != e && null == u;
  return r.useEffect(() => {
    d && (0, a.RE)(e)
  }, [d, e]), u
}