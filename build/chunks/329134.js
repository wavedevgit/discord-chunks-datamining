/** Chunk was on 44799 **/
/** chunk id: 329134, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk535396 = require("./535396.js"),
  Chunk265397 = require("./265397.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t, n) {
  return r.useMemo(() => {
    var r, a, s;
    return (null == (r = t.sourceEntitlement) ? true : r.ends_at) != null ? {
      type: "expiring",
      expiringAt: t.sourceEntitlement.ends_at
    } : n && null != e.storeRemovalDate ? {
      type: "removing",
      removingAt: e.storeRemovalDate
    } : t.type === i.A3.LEVEL_ACTIVATED ? {
      type: "active",
      statusText: o.intl.formatToPlainString(l.default.WRRYUT, {
        perkName: null != (s = null == (a = t.sourcePowerup) ? true : a.title) ? s : o.intl.string(o.t.BfF6ED)
      })
    } : t.type === i.A3.POWERUP_ACTIVATED ? {
      type: "active",
      statusText: o.intl.string(l.default.FFLkmx)
    } : true
  }, [t, n, e])
}