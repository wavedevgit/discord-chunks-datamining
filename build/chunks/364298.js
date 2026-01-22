/** Chunk was on 99673 **/
/** chunk id: 364298, original params: t,e,i (module,exports,require) **/
function s(t, e) {
  return Math.floor(Math.random() * (e - t + 1) + t)
}

function n(t, e, i, s) {
  return s.tension * (t - e) - s.friction * i
}
require.d(exports, {
  J: () => n,
  R: () => s
})