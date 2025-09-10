/** Chunk was on 44799 **/
/** chunk id: 787188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => s
});
var Chunk535396 = require("./535396.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t, n) {
  var s, l, a;
  return (null == (s = t.sourceEntitlement) ? true : s.ends_at) != null ? {
    type: "expiring",
    expiringAt: t.sourceEntitlement.ends_at
  } : n && null != e.storeRemovalDate ? {
    type: "removing",
    removingAt: e.storeRemovalDate
  } : t.type === r.A3.LEVEL_ACTIVATED ? {
    type: "active",
    statusText: o.intl.formatToPlainString(i.default.WRRYUV, {
      perkName: null != (a = null == (l = t.sourcePowerup) ? true : l.title) ? a : o.intl.string(o.t.BfF6EB)
    })
  } : t.type === r.A3.POWERUP_ACTIVATED ? {
    type: "active",
    statusText: o.intl.string(i.default.FFLkm5)
  } : null
}