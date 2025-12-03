/** Chunk was on 50751 **/
/** chunk id: 667142, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Df: () => d,
  S_: () => c,
  V5: () => a,
  VX: () => o,
  ZP: () => h,
  ih: () => s,
  xc: () => u
});
var Chunk972959 = require("./972959.js");
let r = {
    timeToLiveMs: 5e3,
    reappearTimeMs: 1e4
  },
  l = (0, Chunk972959.H)(() => r),
  o = 1e4,
  a = 2e4,
  s = 500,
  u = 1e3;

function c(e) {
  l.setState({
    timeToLiveMs: e
  })
}

function d(e) {
  l.setState({
    reappearTimeMs: e
  })
}
let h = l