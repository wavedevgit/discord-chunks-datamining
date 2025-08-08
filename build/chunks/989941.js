/** Chunk was on 74304 **/
"use strict";
let l;
r.d(t, {
  Z: () => i
});
var n = r(145597);

function i(e, t) {
  if (__OVERLAY__) {
    let e = t.getGame(),
      r = (0, n.getPID)();
    return null == e || null == r ? null : (null == l ? void 0 : l.id) === e.id && (null == l ? void 0 : l.pid) === r ? l : l = {
      id: e.id,
      pid: r,
      pidPath: [],
      nativeProcessObserverId: 0,
      hidden: !1,
      elevated: !1,
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