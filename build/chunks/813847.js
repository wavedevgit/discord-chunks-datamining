/** Chunk was on 88615 **/
/** chunk id: 813847, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  e: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t, l) {
  return r.useMemo(() => {
    var r, o, a;
    return (null == (r = t.sourceEntitlement) ? true : r.ends_at) != null ? {
      type: "expiring",
      expiringAt: t.sourceEntitlement.ends_at
    } : l && null != e.storeRemovalDate ? {
      type: "removing",
      removingAt: e.storeRemovalDate
    } : t.type === n.b_.LEVEL_ACTIVATED ? {
      type: "active",
      statusText: s.intl.formatToPlainString(i.default.WRRYUT, {
        perkName: null != (o = null == (a = t.sourcePowerup) ? true : a.title) ? o : s.intl.string(s.t.BfF6ED)
      })
    } : t.type !== n.b_.INACTIVE ? {
      type: "active",
      statusText: s.intl.string(i.default.FFLkmx)
    } : true
  }, [t, l, e])
}