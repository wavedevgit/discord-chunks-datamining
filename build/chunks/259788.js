/** Chunk was on 71447 **/
/** chunk id: 259788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => h,
  GI: () => u,
  J5: () => s,
  g_: () => d,
  jc: () => o,
  nj: () => c,
  nl: () => a
});
var Chunk839214 = require("./839214.js");
let r = {
    timeToLiveMs: 5e3,
    reappearTimeMs: 1e4
  },
  l = (0, Chunk839214.D)(() => r),
  a = 1e4,
  s = 2e4,
  o = 500,
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