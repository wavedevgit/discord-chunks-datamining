/** Chunk was on web.js **/
/** chunk id: 105613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f,
  N: () => u
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk970061 = require("./970061.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
async function u() {
  if (!a.isPlatformEmbedded) returnfalse;
  let e = await o.A.hasPermission();
  return s.Ay.shouldDisplayNotifications() && e
}
class d extends Chunk439372.A {
  async handlePostConnectionOpen() {
    let e = await u();
    i.default.track(l.HAw.NOTIFICATION_PERMISSION_STATUS, {
      os_enabled: e
    })
  }
  constructor(...e) {
    super(...e), c(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    })
  }
}
let f = new d