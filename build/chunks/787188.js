/** Chunk was on 44799 **/
/** chunk id: 787188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => l
});
var Chunk535396 = require("./535396.js"),
  Chunk130231 = require("./130231.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n) {
  var l, a, s;
  return (null == (l = t.sourceEntitlement) ? true : l.ends_at) != null ? {
    type: "expiring",
    expiringAt: t.sourceEntitlement.ends_at
  } : n && null != e.storeRemovalDate ? {
    type: "removing",
    removingAt: e.storeRemovalDate
  } : t.type === r.A3.LEVEL_ACTIVATED ? {
    type: "active",
    statusText: o.intl.formatToPlainString(i.default.WRRYUT, {
      perkName: null != (s = null == (a = t.sourcePowerup) ? true : a.title) ? s : o.intl.string(o.t.BfF6ED)
    })
  } : t.type === r.A3.POWERUP_ACTIVATED ? {
    type: "active",
    statusText: o.intl.string(i.default.FFLkmx)
  } : null
}