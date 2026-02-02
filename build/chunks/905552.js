/** Chunk was on 97246 **/
/** chunk id: 905552, original params: e,t,n (module,exports,require) **/
let l;
require.d(exports, {
  A: () => o
});
var Chunk9302 = require("./9302.js");

function o(e, t) {
  if (__OVERLAY__) {
    let e = t.getGame(),
      n = (0, r.getPID)();
    return null == e || null == n ? null : (null == l ? true : l.id) === e.id && (null == l ? true : l.pid) === n ? l : l = {
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