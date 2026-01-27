/** Chunk was on web.js **/
/** chunk id: 154049, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ES: () => s,
  Ek: () => o,
  kk: () => a
});
var Chunk73153 = require("./73153.js");
let i = new(require("./626584.js")).A("TryLoad");
async function a(e) {
  try {
    return await e()
  } catch (e) {
    return i.log("database load failed.", e), null
  }
}

function o(e, t, n) {
  try {
    return t()
  } catch (t) {
    return i.log("".concat(e, ": exception thrown, resetting socket."), t, t.stack), r.h.dispatch({
      type: "RESET_SOCKET",
      args: {
        error: t,
        action: "tryLoadOrResetCacheGateway (".concat(e, ")"),
        metricAction: "tryLoadOrResetCacheGateway (".concat(null != n ? n : e, ")"),
        clearCache: true
      }
    }), null
  }
}
async function s(e, t, n) {
  try {
    return await t()
  } catch (t) {
    return i.log("".concat(e, ": exception thrown, resetting socket."), t, t.stack), r.h.dispatch({
      type: "RESET_SOCKET",
      args: {
        error: t,
        action: "tryLoadOrResetCacheGatewayAsync (".concat(e, ")"),
        metricAction: "tryLoadOrResetCacheGatewayAsync (".concat(null != n ? n : e, ")"),
        clearCache: true
      }
    }), null
  }
}