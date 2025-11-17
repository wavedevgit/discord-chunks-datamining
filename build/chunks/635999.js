/** Chunk was on web.js **/
/** chunk id: 635999, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk137691 = require("./137691.js"),
  Chunk594174 = require("./594174.js"),
  Chunk431 = require("./431.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js");

function d(e, t) {
  let n = (0, i.e7)([l.Z], () => l.Z.getUserDiscountOffer(e)),
    [d, f] = r.useState((0, o.k)(n)),
    _ = (0, i.e7)([s.default], () => (0, c.I5)(s.default.getCurrentUser())),
    p = e === u.dT || e === u.dB;
  return r.useEffect(() => {
    if (null == n || null == n.expires_at) return;
    let e = new a.V7,
      t = () => {
        let r = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
        null == e || e.start(r, () => {
          !d && (0, o.k)(n) ? f(true) : t()
        })
      };
    return t(), () => e.stop()
  }, [d, n]), !d && (!_ || t || p) ? n : null
}