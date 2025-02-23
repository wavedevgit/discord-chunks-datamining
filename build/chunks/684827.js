/** Chunk was on 20011 (4e62380771358880.js) **/
function s(t, e) {
  return Math.floor(Math.random() * (e - t + 1) + t)
}

function n(t, e, i, s) {
  return s.tension * (t - e) - s.friction * i
}
i.d(e, {
  B: () => n,
  M: () => s
})