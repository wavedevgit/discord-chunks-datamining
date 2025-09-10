/** Chunk was on 39159 **/
/** chunk id: 985862, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  K: () => a,
  Z: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk183369 = require("./183369.jsx");

function a(e, n, t) {
  var r;
  let i = () => {
    var n, r;
    return null != (r = null == t || null == (n = t.plans.find(n => n.id === e)) ? true : n.cost) ? r : 0
  };
  return null == n ? i() : i() - (null != (r = n.plan.cost) ? r : 0)
}

function l() {
  let {
    planId: e,
    portkeyInstance: n,
    currentGame: t
  } = (0, Chunk183369.aj)();
  return Chunk647438.useMemo(() => a(module, exports, require), [module, exports, require])
}