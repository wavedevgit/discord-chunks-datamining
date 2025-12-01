/** Chunk was on 9452 **/
/** chunk id: 584197, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  n: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594421 = require("./594421.js"),
  Chunk5900 = require("./5900.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk981631 = require("./981631.js");
let c = () => {
  let {
    connectionStatus: t,
    setConnectionStatus: e,
    connect: n,
    disconnect: c
  } = (0, Chunk773275.xf)(), d = [Chunk5900.Ij.CONNECTED, Chunk5900.Ij.INITIALIZING].includes(module), E = (0, Chunk473749.useCallback)(() => d ? (exports(Chunk5900.Ij.DISCONNECTED), (0, Chunk594421.j)(Chunk981631.rMx.NITRO_WARP_TOGGLED, {
    is_connecting: false
  }), c()) : ((0, Chunk594421.j)(Chunk981631.rMx.NITRO_WARP_TOGGLED, {
    is_connecting: true
  }), exports(Chunk5900.Ij.INITIALIZING), require().then(t => {
    t || e(s.Ij.DISCONNECTED)
  }).catch(() => {
    exports(Chunk5900.Ij.DISCONNECTED)
  })), [d, c, require, exports]);
  return (0, Chunk54381.jsx)("div", {
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      onChange: E,
      checked: d
    })
  })
}