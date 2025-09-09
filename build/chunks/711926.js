/** Chunk was on web.js **/
/** chunk id: 711926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk765504 = require("./765504.js"),
  Chunk648358 = require("./648358.js"),
  Chunk865066 = require("./865066.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk147913.Z {
  handlePostConnectionOpen() {
    (0, Chunk648358.J)();
    let {
      enabled: e
    } = Chunk765504.Z.getConfig({
      location: "can-install"
    });
    module && (0, Chunk865066.Yz)("startup")
  }
  handleLogout() {
    (0, Chunk865066.wt)()
  }
  constructor(...e) {
    super(...e), s(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      LOGOUT: this.handleLogout
    })
  }
}
let c = new l