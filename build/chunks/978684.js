/** Chunk was on web.js **/
/** chunk id: 978684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => d,
  Z: () => p
}), require("./388685.js");
var Chunk298444 = require("./298444.js"),
  Chunk570140 = require("./570140.js"),
  Chunk447543 = require("./447543.js"),
  Chunk147913 = require("./147913.js"),
  Chunk314897 = require("./314897.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = "guestInviteToAccept";
class f extends Chunk147913.Z {
  constructor(...e) {
    super(...e), u(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
    }), u(this, "handleConnectionOpen", async () => {
      if ((0, l.isWeb)()) {
        let e = r.x.get(d);
        if (null != e && "string" == typeof e && s.default.isAuthenticated()) {
          let {
            invite: t
          } = await a.ZP.resolveInvite(e, "Desktop Modal");
          null != t && (i.Z.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: t,
            code: e,
            context: c.IlC.APP
          }), r.x.remove(d))
        }
      }
    })
  }
}
let p = new f