/** Chunk was on 84335 (8a7781247bbfeb16.js) **/
n.d(t, {
  M: () => r
});

function r(e, t) {
  if (null == e || "" === e) return null;
  let n = new Date(e);
  return !(n instanceof Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
    year: "numeric",
    month: "short"
  })
}