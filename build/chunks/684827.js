/** Chunk was on 12581 **/
/** chunk id: 684827, original params: t,e,i (module,exports,require) **/
function s(t, e) {
  return Math.floor(Math.random() * (e - t + 1) + t)
}

function n(t, e, i, s) {
  return s.tension * (t - e) - s.friction * i
}
require.d(exports, {
  B: () => n,
  M: () => s
})