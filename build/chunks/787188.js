/** Chunk was on 44799 **/
/** chunk id: 787188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => o
});
var Chunk535396 = require("./535396.js"),
  Chunk459196 = require("./459196.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, n) {
  var o, a, s;
  return (null == (o = t.sourceEntitlement) ? true : o.ends_at) != null ? {
    type: "expiring",
    expiringAt: t.sourceEntitlement.ends_at
  } : n && null != e.storeRemovalDate ? {
    type: "removing",
    removingAt: e.storeRemovalDate
  } : t.type === r.A3.LEVEL_ACTIVATED ? {
    type: "active",
    statusText: l.intl.formatToPlainString(i.default.WRRYUT, {
      perkName: null != (s = null == (a = t.sourcePowerup) ? true : a.title) ? s : l.intl.string(l.t.BfF6ED)
    })
  } : t.type === r.A3.POWERUP_ACTIVATED ? {
    type: "active",
    statusText: l.intl.string(i.default.FFLkmx)
  } : null
}