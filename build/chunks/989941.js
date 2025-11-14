/** Chunk was on 72472 **/
/** chunk id: 989941, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => l
});
var Chunk145597 = require("./145597.js");

function l(e, t) {
  if (__OVERLAY__) {
    let e = t.getGame(),
      n = (0, i.getPID)();
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