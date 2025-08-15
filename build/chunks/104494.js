/** Chunk was on web.js **/
/** chunk id: 104494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ng: () => _,
  Wp: () => d,
  kA: () => u,
  qm: () => f
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk594174 = require("./594174.js"),
  Chunk431 = require("./431.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js");

function u(e) {
  return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
}

function d(e, t) {
  var n;
  return null != e && new Set(null == (n = e.discount) ? true : n.plan_ids.map(e => c.GP[e].skuId)).has(t)
}

function f(e, t) {
  let n = (0, i.e7)([s.Z], () => s.Z.getUserDiscountOffer(e)),
    [d, f] = r.useState(u(n)),
    _ = (0, i.e7)([o.default], () => (0, l.I5)(o.default.getCurrentUser())),
    p = e === c.dT || e === c.dB;
  return r.useEffect(() => {
    if (null == n || null == n.expires_at) return;
    let e = new a.V7,
      t = () => {
        let r = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
        null == e || e.start(r, () => {
          !d && u(n) ? f(true) : t()
        })
      };
    return t(), () => e.stop()
  }, [d, n]), !d && (!_ || t || p) ? n : null
}

function _() {
  var e, t;
  let n = Chunk431.Z.canFractionalPremiumUserUseOffer(),
    r = f(Chunk474936.hs, require),
    i = f(Chunk474936.RU, require),
    a = f(Chunk474936.rB, require),
    o = f(Chunk474936.ih, require);
  return null != (t = null != (e = null != Chunk73800 ? Chunk73800 : Chunk442837) ? module : Chunk846519) ? exports : Chunk594174
}