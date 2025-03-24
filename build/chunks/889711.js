/** Chunk was on 32249 **/
function r(e) {
  return new ResizeObserver(e)
}

function o(e, t) {
  e.observe(t)
}

function l(e, t) {
  e.unobserve(t)
}
n.d(t, {
  UC: () => l,
  YP: () => o,
  pP: () => r
})