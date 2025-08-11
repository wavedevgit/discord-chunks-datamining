/** Chunk was on web.js **/
/** chunk id: 199766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => o,
  T: () => a
});
var Chunk673125 = require("./673125.js");
let i = 20;

function o(e, t, n, r, o) {
  e.save(), e.beginPath(), e.fillStyle = r, e.arc(t, n, Math.round(i * window.devicePixelRatio) / 2 + o, 0, 2 * Math.PI), e.fill(), e.restore()
}

function a(e, t, n, o) {
  e.save();
  let a = r.Z.getAvatarImage(o);
  if (null == a) return;
  let s = i * window.devicePixelRatio;
  e.beginPath(), e.arc(t, n, s / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(a, t - s / 2, n - s / 2, s, s), e.restore()
}