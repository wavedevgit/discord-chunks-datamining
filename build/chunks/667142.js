/** Chunk was on 50751 **/
n.d(t, {
  Df: () => d,
  S_: () => c,
  V5: () => s,
  VX: () => l,
  ZP: () => p,
  ih: () => a,
  xc: () => u
});
var i = n(972959);
let r = {
    timeToLiveMs: 5e3,
    reappearTimeMs: 1e4
  },
  o = (0, i.H)(() => r),
  l = 1e4,
  s = 2e4,
  a = 500,
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