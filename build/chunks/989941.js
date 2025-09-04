/** Chunk was on 93886 **/
/** chunk id: 989941, original params: e,t,n (module,exports,require) **/
let a;
require.d(exports, {
  Z: () => l
});
var Chunk145597 = require("./145597.js");

function l(e, t) {
  if (__OVERLAY__) {
    let e = t.getGame(),
      n = (0, r.getPID)();
    return null == e || null == n ? null : (null == a ? true : a.id) === e.id && (null == a ? true : a.pid) === n ? a : a = {
      id: e.id,
      pid: n,
      pidPath: [],
      nativeProcessObserverId: 0,
      hidden: false,
      elevated: false,
      name: e.name,
      lastFocused: 0,
      exePath: "",
      exeName: "",
      cmdLine: "",
      processName: "",
      distributor: null,
      windowHandle: null,
      fullscreenType: 0
    }
  }
  return e.getVisibleGame()
}