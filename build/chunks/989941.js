/** Chunk was on 81691 **/
"use strict";
let n;
r.d(t, {
  Z: () => o
});
var l = r(145597);

function o(e, t) {
  if (__OVERLAY__) {
    let e = t.getGame(),
      r = (0, l.getPID)();
    return null == e || null == r ? null : (null == n ? void 0 : n.id) === e.id && (null == n ? void 0 : n.pid) === r ? n : n = {
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