/** Chunk was on 30485 **/
/** chunk id: 18640, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  X: () => S
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
let S = () => {
  let {
    connectionStatus: t,
    setConnectionStatus: e,
    connect: i,
    disconnect: S
  } = (0, T.lV)(), c = [d.l7.CONNECTED, d.l7.INITIALIZING].includes(t), E = (0, l.useCallback)(() => c ? (e(d.l7.DISCONNECTED), (0, r.u)(A.HAw.NITRO_WARP_TOGGLED, {
    is_connecting: false
  }), S()) : ((0, r.u)(A.HAw.NITRO_WARP_TOGGLED, {
    is_connecting: true
  }), e(d.l7.INITIALIZING), i().then(t => {
    t || e(d.l7.DISCONNECTED)
  }).catch(t => {
    a.A.captureException(t, {
      tags: {
        source: o.q.PRIVATE_BROWSING_PERK_CONNECT
      }
    }), u.default.track(A.HAw.PREMIUM_FEATURE_ERROR, {
      error_message: t instanceof Error ? t.message : JSON.stringify(t),
      error_source: o.q.PRIVATE_BROWSING_PERK_CONNECT
    }), e(d.l7.DISCONNECTED)
  })), [c, S, i, e]);
  return (0, n.jsx)("div", {
    children: (0, n.jsx)(s.dOG, {
      onChange: E,
      checked: c
    })
  })
}