/** Chunk was on 52390 **/
/** chunk id: 905552, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => i
});
var Chunk9302 = require("./9302.js");

function i(e, t) {
  if (__OVERLAY__) {
    let e = t.getGame(),
      n = (0, l.getPID)();
    return null == e || null == n ? null : (null == r ? true : r.id) === e.id && (null == r ? true : r.pid) === n ? r : r = {
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