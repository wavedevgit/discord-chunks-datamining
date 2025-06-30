/** Chunk was on 95355 **/
n.d(t, {
  t: () => r
});

function r(...e) {
  return (...t) => {
    for (let n of e) "function" == typeof n && n(...t)
  }
}