/** Chunk was on web.js **/
/** chunk id: 141038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./539854.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk90757 = require("./90757.js"),
  o = require.n(Chunk90757),
  Chunk65154 = require("./65154.js");
let l = [Chunk65154.vA.WINDOW, Chunk65154.vA.SCREEN];

function c(e, t, n) {
  var r;
  let a = window.DiscordNative;
  i()(null != a, "Can't get desktop sources outside of native app"), t = null != (r = null == t ? true : t.filter(e => l.includes(e))) ? r : l, n = null != n ? n : {
    width: 150,
    height: 150
  };
  let c = [];
  return t.includes(s.vA.SCREEN) && e.supports(s.AN.SCREEN_PREVIEWS) && (c.push(e.getScreenPreviews(n.width, n.height)), t = t.filter(e => e !== s.vA.SCREEN)), t.includes(s.vA.WINDOW) && e.supports(s.AN.WINDOW_PREVIEWS) && (c.push(e.getWindowPreviews(n.width, n.height)), t = t.filter(e => e !== s.vA.WINDOW)), 0 !== t.length && c.push(a.desktopCapture.getDesktopCaptureSources({
    types: t,
    thumbnailSize: n
  })), Promise.all(c).then(e => o()(e))
}