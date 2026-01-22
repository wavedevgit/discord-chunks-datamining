/** Chunk was on web.js **/
/** chunk id: 432779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk579364 = require("./579364.js"),
  Chunk287809 = require("./287809.js"),
  Chunk816733 = require("./816733.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js");

function d(e, t) {
  let n = (0, i.bG)([l.A], () => l.A.getUserDiscountOffer(e)),
    [d, f] = r.useState((0, s.w)(n)),
    p = (0, i.bG)([o.default], () => (0, c.TW)(o.default.getCurrentUser())),
    _ = e === u.q || e === u.EG;
  return r.useEffect(() => {
    if (null == n || null == n.expires_at) return;
    let e = new a.Ep,
      t = () => {
        let r = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
        null == e || e.start(r, () => {
          !d && (0, s.w)(n) ? f(true) : t()
        })
      };
    return t(), () => e.stop()
  }, [d, n]), !d && (!p || t || _) ? n : null
}