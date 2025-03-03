/** Chunk was on 50751 **/
n.d(t, {
  Df: () => d,
  S_: () => c,
  V5: () => a,
  VX: () => l,
  ZP: () => p,
  ih: () => s,
  xc: () => u
});
var i = n(972959);
let r = {
    timeToLiveMs: 5e3,
    reappearTimeMs: 1e4
  },
  o = (0, i.H)(() => r),
  l = 1e4,
  a = 2e4,
  s = 500,
  u = 1e3;

function c(e) {
  o.setState({
    timeToLiveMs: e
  })
}

function d(e) {
  o.setState({
    reappearTimeMs: e
  })
}
let p = o