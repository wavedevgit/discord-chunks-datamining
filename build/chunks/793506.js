/** Chunk was on 88615 **/
/** chunk id: 793506, original params: e,t,l (module,exports,require) **/
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
  let t = (0, n.bG)([i.A], () => {
      var t;
      return null == (t = i.A.getStateForGuild(e)) ? true : t.entitlements
    }, [e]),
    l = (0, s.A)(e);
  return r.useMemo(() => {
    if (0 !== Object.values(null != t ? t : {}).length) return l.length > 0 ? {
      type: "expiring",
      expiringAt: l[0].ends_at
    } : {
      type: "active",
      statusText: a.intl.string(o.default.FFLkmx)
    }
  }, [l, t])
}