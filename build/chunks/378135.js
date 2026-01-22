/** Chunk was on web.js **/
/** chunk id: 378135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => c,
  k: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk287809 = require("./287809.js"),
  Chunk816733 = require("./816733.js"),
  Chunk927578 = require("./927578.js");

function c(e) {
  return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
}

function u(e) {
  let t = (0, i.bG)([o.A], () => o.A.getUserTrialOffer(e)),
    [n, u] = r.useState(c(t)),
    d = !(0, i.bG)([s.default], () => (0, l.TW)(s.default.getCurrentUser())) || o.A.canFractionalPremiumUserUseOffer();
  return r.useEffect(() => {
    if (null != t && null != t.expires_at) {
      let e = new a.Ep,
        r = () => {
          let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
          null == e || e.start(i, () => {
            !n && c(t) ? u(true) : r()
          })
        };
      return r(), () => e.stop()
    }
  }, [n, t]), !n && d ? t : null
}