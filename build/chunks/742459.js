/** Chunk was on web.js **/
/** chunk id: 742459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./321073.js"), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk656470 = require("./656470.js"),
  s = require.n(Chunk656470),
  Chunk731854 = require("./731854.js");
let l = [Chunk731854.fS.WINDOW, Chunk731854.fS.SCREEN];

function c(e, t, n) {
  var r;
  let a = window.DiscordNative;
  i()(null != a, "Can't get desktop sources outside of native app"), t = null != (r = null == t ? true : t.filter(e => l.includes(e))) ? r : l, n = null != n ? n : {
    width: 150,
    height: 150
  };
  let c = [];
  return t.includes(o.fS.SCREEN) && e.supports(o.O5.SCREEN_PREVIEWS) && (c.push(e.getScreenPreviews(n.width, n.height)), t = t.filter(e => e !== o.fS.SCREEN)), t.includes(o.fS.WINDOW) && e.supports(o.O5.WINDOW_PREVIEWS) && (c.push(e.getWindowPreviews(n.width, n.height)), t = t.filter(e => e !== o.fS.WINDOW)), 0 !== t.length && c.push(a.desktopCapture.getDesktopCaptureSources({
    types: t,
    thumbnailSize: n
  })), Promise.all(c).then(e => s()(e))
}