/** Chunk was on 77069 **/
/** chunk id: 584197, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  n: () => S
}), require("./415506.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594421 = require("./594421.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk323183 = require("./323183.js"),
  Chunk5900 = require("./5900.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk981631 = require("./981631.js");
let S = () => {
  let {
    connectionStatus: t,
    setConnectionStatus: e,
    connect: n,
    disconnect: S
  } = (0, Chunk773275.xf)(), g = [Chunk5900.Ij.CONNECTED, Chunk5900.Ij.INITIALIZING].includes(module), I = (0, Chunk473749.useCallback)(() => g ? (exports(Chunk5900.Ij.DISCONNECTED), (0, Chunk594421.j)(Chunk981631.rMx.NITRO_WARP_TOGGLED, {
    is_connecting: false
  }), S()) : ((0, Chunk594421.j)(Chunk981631.rMx.NITRO_WARP_TOGGLED, {
    is_connecting: true
  }), exports(Chunk5900.Ij.INITIALIZING), require().then(t => {
    t || e(c.Ij.DISCONNECTED)
  }).catch(t => {
    a.Z.captureException(t, {
      tags: {
        source: o.D.PRIVATE_BROWSING_PERK_CONNECT
      }
    }), u.default.track(T.rMx.PREMIUM_FEATURE_ERROR, {
      error_message: t instanceof Error ? t.message : JSON.stringify(t),
      error_source: o.D.PRIVATE_BROWSING_PERK_CONNECT
    }), e(c.Ij.DISCONNECTED)
  })), [g, S, require, exports]);
  return (0, Chunk54381.jsx)("div", {
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      onChange: I,
      checked: g
    })
  })
}