/** Chunk was on web.js **/
/** chunk id: 367348, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk954571 = require("./954571.js"),
  Chunk91242 = require("./91242.js"),
  Chunk652215 = require("./652215.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk439372.A {
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
      let s = a.A.getConnectedFrame();
      (null == s ? true : s.applicationId) === r && (this.leaveFrame({
        applicationId: r
      }), t.code !== o.YI$.CLOSE_NORMAL && (i.default.track(o.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
        rpc_close_code: t.code,
        rpc_message: t.message,
        application_id: r
      }), this.showRPCDisconnectErrorUI(t)))
    })
  }
}
s(l, "displayName", "FramesManager")