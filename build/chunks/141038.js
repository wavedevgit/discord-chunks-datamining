/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => l
}), n(653041), n(47120);
var r = n(512722),
  i = n.n(r),
  o = n(90757),
  a = n.n(o),
  s = n(65154);

function l(e, t, n) {
  let r = window.DiscordNative;
  i()(null != r, "Can't get desktop sources outside of native app"), t = null != t ? t : [s.vA.WINDOW, s.vA.SCREEN], n = null != n ? n : {
    width: 150,
    height: 150
  };
  let o = [];
  return t.includes(s.vA.SCREEN) && e.supports(s.AN.SCREEN_PREVIEWS) && (o.push(e.getScreenPreviews(n.width, n.height)), t = t.filter(e => e !== s.vA.SCREEN)), t.includes(s.vA.WINDOW) && e.supports(s.AN.WINDOW_PREVIEWS) && (o.push(e.getWindowPreviews(n.width, n.height)), t = t.filter(e => e !== s.vA.WINDOW)), 0 !== t.length && o.push(r.desktopCapture.getDesktopCaptureSources({
    types: t,
    thumbnailSize: n
  })), Promise.all(o).then(e => a()(e))
}