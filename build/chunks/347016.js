/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  d: () => o
});
var r = n(489948),
  i = n(607070);
n(83366), n(601792);
let o = {
  init() {
    i.Z.addChangeListener(() => {
      i.Z.keyboardModeEnabled ? (r.dx.setRingsEnabled(!0), r.dx.enableAnimationTracking()) : (r.dx.setRingsEnabled(!1), r.dx.disableAnimationTracking())
    })
  }
}