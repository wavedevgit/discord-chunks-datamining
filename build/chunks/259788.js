/** Chunk was on 71447 **/
/** chunk id: 259788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => p,
  GI: () => c,
  J5: () => o,
  g_: () => d,
  jc: () => s,
  nj: () => u,
  nl: () => a
});
var Chunk839214 = require("./839214.js");
let r = {
    timeToLiveMs: 5e3,
    reappearTimeMs: 1e4
  },
  l = (0, Chunk839214.D)(() => r),
  a = 1e4,
  o = 2e4,
  s = 500,
  c = 1e3;

function u(e) {
  l.setState({
    timeToLiveMs: e
  })
}

function d(e) {
  l.setState({
    reappearTimeMs: e
  })
}
let p = l