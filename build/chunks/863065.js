/** Chunk was on web.js **/
/** chunk id: 863065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => u,
  Z: () => f
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk654769 = require("./654769.js"),
  Chunk981631 = require("./981631.js");

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
  let e = await s.Z.hasPermission();
  return o.ZP.shouldDisplayNotifications() && e
}
class d extends Chunk147913.Z {
  async handlePostConnectionOpen() {
    let e = await u();
    i.default.track(l.rMx.NOTIFICATION_PERMISSION_STATUS, {
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