/** Chunk was on web.js **/
/** chunk id: 786397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => c,
  w: () => u
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk594174 = require("./594174.js"),
  Chunk431 = require("./431.js"),
  Chunk74538 = require("./74538.js");

function c(e) {
  return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
}

function u(e) {
  let t = (0, i.e7)([s.Z], () => s.Z.getUserTrialOffer(e)),
    [n, u] = r.useState(c(t)),
    d = !(0, i.e7)([a.default], () => (0, l.I5)(a.default.getCurrentUser())) || s.Z.canFractionalPremiumUserUseOffer();
  return r.useEffect(() => {
    if (null != t && null != t.expires_at) {
      let e = new o.V7,
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