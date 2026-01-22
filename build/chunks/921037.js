/** Chunk was on web.js **/
/** chunk id: 921037, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p,
  B: () => d
}), require("./896048.js");
var Chunk362474 = require("./362474.js"),
  Chunk73153 = require("./73153.js"),
  Chunk846293 = require("./846293.js"),
  Chunk439372 = require("./439372.js"),
  Chunk961350 = require("./961350.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = "guestInviteToAccept";
class f extends Chunk439372.A {
  constructor(...e) {
    super(...e), u(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
    }), u(this, "handleConnectionOpen", async () => {
      if ((0, l.isWeb)()) {
        let e = r.u.get(d);
        if (null != e && "string" == typeof e && o.default.isAuthenticated()) {
          let {
            invite: t
          } = await a.Ay.resolveInvite(e, "Desktop Modal");
          null != t && (i.h.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: t,
            code: e,
            context: c.BRT.APP
          }), r.u.remove(d))
        }
      }
    })
  }
}
let p = new f