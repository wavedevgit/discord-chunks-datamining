/** Chunk was on 80237 **/
"use strict";
let r;
n.d(t, {
  Z: () => c
});
var o = n(145597);

function c(e, t) {
  if (__OVERLAY__) {
    let e = t.getGame(),
      n = (0, o.QF)();
    return null == e || null == n ? null : (null == r ? void 0 : r.id) === e.id && (null == r ? void 0 : r.pid) === n ? r : r = {
      id: e.id,
      pid: n,
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