/** Chunk was on web.js **/
/** chunk id: 584197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk5900 = require("./5900.js"),
  Chunk953865 = require("./953865.jsx");
let l = () => {
  let {
    connectionStatus: e,
    setConnectionStatus: t,
    connect: n,
    disconnect: l
  } = (0, Chunk953865.xf)(), c = [Chunk5900.Ij.CONNECTED, Chunk5900.Ij.INITIALIZING].includes(module), u = (0, Chunk473749.useCallback)(() => c ? (exports(Chunk5900.Ij.DISCONNECTED), l()) : (exports(Chunk5900.Ij.INITIALIZING), require().then(e => {
    e || t(o.Ij.DISCONNECTED)
  }).catch(() => {
    exports(Chunk5900.Ij.DISCONNECTED)
  })), [c, l, require, exports]);
  return (0, Chunk54381.jsx)("div", {
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      onChange: u,
      checked: c
    })
  })
}