/** Chunk was on 13140 **/
/** chunk id: 199766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => i,
  T: () => l
});
var Chunk673125 = require("./673125.js");

function i(e, t, n, r, i) {
  e.save(), e.beginPath(), e.fillStyle = r, e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + i, 0, 2 * Math.PI), e.fill(), e.restore()
}

function l(e, t, n, i) {
  e.save();
  let l = r.Z.getAvatarImage(i);
  if (null == l) return;
  let a = 20 * window.devicePixelRatio;
  e.beginPath(), e.arc(t, n, a / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(l, t - a / 2, n - a / 2, a, a), e.restore()
}