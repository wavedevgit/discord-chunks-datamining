/** Chunk was on 9452 **/
/** chunk id: 584197, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  n: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk5900 = require("./5900.js"),
  Chunk953865 = require("./953865.jsx");
let a = () => {
  let {
    connectionStatus: t,
    setConnectionStatus: e,
    connect: n,
    disconnect: a
  } = (0, Chunk953865.xf)(), o = [Chunk5900.Ij.CONNECTED, Chunk5900.Ij.INITIALIZING].includes(module), c = (0, Chunk473749.useCallback)(() => o ? (exports(Chunk5900.Ij.DISCONNECTED), a()) : (exports(Chunk5900.Ij.INITIALIZING), require().then(t => {
    t || e(u.Ij.DISCONNECTED)
  }).catch(() => {
    exports(Chunk5900.Ij.DISCONNECTED)
  })), [o, a, require, exports]);
  return (0, Chunk54381.jsx)("div", {
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      onChange: c,
      checked: o
    })
  })
}