/** Chunk was on 88615 **/
/** chunk id: 813847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t, n) {
  return r.useMemo(() => {
    var r, s, a;
    return (null == (r = t.sourceEntitlement) ? true : r.ends_at) != null ? {
      type: "expiring",
      expiringAt: t.sourceEntitlement.ends_at
    } : n && null != e.storeRemovalDate ? {
      type: "removing",
      removingAt: e.storeRemovalDate
    } : t.type === l.b_.LEVEL_ACTIVATED ? {
      type: "active",
      statusText: o.intl.formatToPlainString(i.default.WRRYUT, {
        perkName: null != (s = null == (a = t.sourcePowerup) ? true : a.title) ? s : o.intl.string(o.t.BfF6ED)
      })
    } : t.type !== l.b_.INACTIVE ? {
      type: "active",
      statusText: o.intl.string(i.default.FFLkmx)
    } : true
  }, [t, n, e])
}