/** Chunk was on web.js **/
/** chunk id: 460093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk626135 = require("./626135.js"),
  Chunk591472 = require("./591472.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk147913.Z {
  constructor(...e) {
    super(...e), s(this, "actions", {
      RPC_APP_DISCONNECTED: e => {
        this.handleRPCDisconnect(e)
      }
    }), s(this, "handleRPCDisconnect", e => {
      let {
        reason: t,
        application: n
      } = e, r = n.id;
      if (null == r || null == t) return;
      let s = a.Z.getConnectedFrame();
      (null == s ? true : s.applicationId) === r && (this.leaveFrame({
        applicationId: r
      }), t.code !== o.$VG.CLOSE_NORMAL && (i.default.track(o.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
        rpc_close_code: t.code,
        rpc_message: t.message,
        application_id: r
      }), this.showRPCDisconnectErrorUI(t)))
    })
  }
}
s(l, "displayName", "FramesManager")