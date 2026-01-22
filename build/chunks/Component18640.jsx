/** Chunk was on 28979 **/
/** chunk id: 18640, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  X: () => E
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
let E = () => {
  let {
    connectionStatus: t,
    setConnectionStatus: e,
    connect: i,
    disconnect: E
  } = (0, A.lV)(), d = [T.l7.CONNECTED, T.l7.INITIALIZING].includes(t), _ = (0, l.useCallback)(() => d ? (e(T.l7.DISCONNECTED), (0, r.u)(S.HAw.NITRO_WARP_TOGGLED, {
    is_connecting: false
  }), E()) : ((0, r.u)(S.HAw.NITRO_WARP_TOGGLED, {
    is_connecting: true
  }), e(T.l7.INITIALIZING), i().then(t => {
    t || e(T.l7.DISCONNECTED)
  }).catch(t => {
    a.A.captureException(t, {
      tags: {
        source: o.q.PRIVATE_BROWSING_PERK_CONNECT
      }
    }), u.default.track(S.HAw.PREMIUM_FEATURE_ERROR, {
      error_message: t instanceof Error ? t.message : JSON.stringify(t),
      error_source: o.q.PRIVATE_BROWSING_PERK_CONNECT
    }), e(T.l7.DISCONNECTED)
  })), [d, E, i, e]);
  return (0, n.jsx)("div", {
    children: (0, n.jsx)(s.dOG, {
      onChange: _,
      checked: d
    })
  })
}