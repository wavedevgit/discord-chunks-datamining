/** Chunk was on 69813 **/
/** chunk id: 199766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => l,
  T: () => i
});
var Chunk673125 = require("./673125.js");

function l(e, t, n, r, l) {
  e.save(), e.beginPath(), e.fillStyle = r, e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + l, 0, 2 * Math.PI), e.fill(), e.restore()
}

function i(e, t, n, l) {
  e.save();
  let i = r.Z.getAvatarImage(l);
  if (null == i) return;
  let a = 20 * window.devicePixelRatio;
  e.beginPath(), e.arc(t, n, a / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(i, t - a / 2, n - a / 2, a, a), e.restore()
}