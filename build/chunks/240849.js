/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => u
});
var r = n(703656),
  i = n(556296),
  o = n(358085),
  a = n(998502),
  s = n(981631);

function l(e, t) {
  return !(e === s.MAM.BROWSER && i.ZP.hasKeybind(s.MoX.MOUSE_BUTTON, t))
}
class c {
  initialize() {
    (0, o.isDesktop)() && (a.ZP.on("NAVIGATE_BACK", (e, t) => {
      l(t, s.qXD.Back) && (0, r.op)()
    }), a.ZP.on("NAVIGATE_FORWARD", (e, t) => {
      l(t, s.qXD.Forward) && (0, r.eH)()
    }))
  }
}
let u = new c