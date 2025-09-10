/** Chunk was on 39159 **/
/** chunk id: 985862, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  K: () => a,
  Z: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk183369 = require("./183369.jsx");

function a(e, n, t) {
  var i;
  let r = () => {
    var n, i;
    return null != (i = null == t || null == (n = t.plans.find(n => n.id === e)) ? true : n.cost) ? i : 0
  };
  return null == n ? r() : r() - (null != (i = n.plan.cost) ? i : 0)
}

function l() {
  let {
    planId: e,
    portkeyInstance: n,
    currentGame: t
  } = (0, Chunk183369.aj)();
  return Chunk647438.useMemo(() => a(module, exports, require), [module, exports, require])
}