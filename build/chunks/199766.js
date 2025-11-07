/** Chunk was on 86642 **/
/** chunk id: 199766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => r,
  T: () => l
});
var Chunk673125 = require("./673125.js");

function r(e, t, n, i, r) {
  e.save(), e.beginPath(), e.fillStyle = i, e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + r, 0, 2 * Math.PI), e.fill(), e.restore()
}

function l(e, t, n, r) {
  e.save();
  let l = i.Z.getAvatarImage(r);
  if (null == l) return;
  let a = 20 * window.devicePixelRatio;
  e.beginPath(), e.arc(t, n, a / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(l, t - a / 2, n - a / 2, a, a), e.restore()
}