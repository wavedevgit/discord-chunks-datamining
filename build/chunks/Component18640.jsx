/** Chunk was on 4670 **/
/** chunk id: 18640, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  X: () => A
}), require("./65821.js"), require("./457529.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk890138 = require("./890138.js"),
  Chunk954571 = require("./954571.js"),
  Chunk728458 = require("./728458.js"),
  Chunk156186 = require("./156186.js"),
  Chunk602450 = require("./602450.js"),
  Chunk557571 = require("./557571.jsx"),
  Chunk652215 = require("./652215.js");
let A = () => {
  let {
    connectionStatus: e,
    setConnectionStatus: t,
    connect: i,
    disconnect: A
  } = (0, T.lV)(), S = [d.l7.CONNECTED, d.l7.INITIALIZING].includes(e), _ = (0, l.useCallback)(() => S ? (t(d.l7.DISCONNECTED), (0, r.u)(c.HAw.NITRO_WARP_TOGGLED, {
    is_connecting: false
  }), A()) : ((0, r.u)(c.HAw.NITRO_WARP_TOGGLED, {
    is_connecting: true
  }), t(d.l7.INITIALIZING), i().then(e => {
    e || t(d.l7.DISCONNECTED)
  }).catch(e => {
    u.A.captureException(e, {
      tags: {
        source: o.q.PRIVATE_BROWSING_PERK_CONNECT
      }
    }), a.default.track(c.HAw.PREMIUM_FEATURE_ERROR, {
      error_message: e instanceof Error ? e.message : JSON.stringify(e),
      error_source: o.q.PRIVATE_BROWSING_PERK_CONNECT
    }), t(d.l7.DISCONNECTED)
  })), [S, A, i, t]);
  return (0, n.jsx)("div", {
    children: (0, n.jsx)(s.dOG, {
      onChange: _,
      checked: S
    })
  })
}