/** Chunk was on 88615 **/
/** chunk id: 793506, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk522055 = require("./522055.js"),
  Chunk6316 = require("./6316.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let t = (0, l.bG)([i.A], () => {
      var t;
      return null == (t = i.A.getStateForGuild(e)) ? true : t.entitlements
    }, [e]),
    n = (0, o.A)(e);
  return r.useMemo(() => {
    if (0 !== Object.values(null != t ? t : {}).length) return n.length > 0 ? {
      type: "expiring",
      expiringAt: n[0].ends_at
    } : {
      type: "active",
      statusText: a.intl.string(s.default.FFLkmx)
    }
  }, [n, t])
}