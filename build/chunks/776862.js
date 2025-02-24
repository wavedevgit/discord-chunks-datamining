/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(358085),
  i = n(998502),
  o = n(522474);

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = o.Z.getWindow(e);
  null != n && !n.closed && (r.isPlatformEmbedded ? i.ZP.focus(e, t) : n.focus())
}