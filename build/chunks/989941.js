/** Chunk was on 93886 **/
/** chunk id: 989941, original params: e,n,t (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => l
});
var Chunk145597 = require("./145597.js");

function l(e, n) {
  if (__OVERLAY__) {
    let e = n.getGame(),
      t = (0, i.getPID)();
    return null == e || null == t ? null : (null == r ? true : r.id) === e.id && (null == r ? true : r.pid) === t ? r : r = {
      id: e.id,
      pid: t,
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