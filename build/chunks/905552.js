/** Chunk was on 48697 **/
/** chunk id: 905552, original params: e,t,r (module,exports,require) **/
let n;
require.d(exports, {
  A: () => a
});
var Chunk9302 = require("./9302.js");

function a(e, t) {
  if (__OVERLAY__) {
    let e = t.getGame(),
      r = (0, l.getPID)();
    return null == e || null == r ? null : (null == n ? true : n.id) === e.id && (null == n ? true : n.pid) === r ? n : n = {
      id: e.id,
      pid: r,
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