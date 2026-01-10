/** Chunk was on 44799 **/
/** chunk id: 8575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk60482 = require("./60482.js"),
  Chunk447941 = require("./447941.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, i.e7)([o.Z], () => {
      var t;
      return null == (t = o.Z.getStateForGuild(e)) ? true : t.entitlements
    }, [e]),
    n = (0, l.Z)(e);
  return r.useMemo(() => {
    if (0 !== Object.values(null != t ? t : {}).length) return n.length > 0 ? {
      type: "expiring",
      expiringAt: n[0].ends_at
    } : {
      type: "active",
      statusText: s.intl.string(a.default.FFLkmx)
    }
  }, [n, t])
}