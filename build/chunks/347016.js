/** Chunk was on web.js **/
"use strict";
n.d(t, {
  d: () => o
});
var r = n(489948),
  i = n(607070);
n(601469), n(301682);
let o = {
  init() {
    i.Z.addChangeListener(() => {
      i.Z.keyboardModeEnabled ? (r.dx.setRingsEnabled(!0), r.dx.enableAnimationTracking()) : (r.dx.setRingsEnabled(!1), r.dx.disableAnimationTracking())
    })
  }
}