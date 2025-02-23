/** Chunk was on 37874 (f9f84ee34eb11b63.js) **/
n.d(t, {
  Df: () => d,
  S_: () => u,
  V5: () => a,
  VX: () => l,
  ZP: () => p,
  ih: () => s,
  xc: () => c
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
  c = 1e3;

function u(e) {
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