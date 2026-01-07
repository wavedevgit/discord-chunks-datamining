/** Chunk was on web.js **/
/** chunk id: 268194, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk365007 = require("./365007.js"),
  Chunk15980 = require("./15980.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = false;
class d extends Chunk147913.Z {
  handlePossibleCredentialFetch() {
    if (!(u || __OVERLAY__) && i.default.getLoginStatus() === l.u34.NONE) {
      if (s.Z.hasFetchedCredentials()) {
        u = true;
        return
      }
      true !== a.default.getCurrentUser() && (u = true, (0, o.hL)())
    }
  }
  handleLogout() {
    u = false
  }
  constructor(...e) {
    super(...e), c(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePossibleCredentialFetch,
      LOGIN_RESET: this.handleLogout,
      LOGOUT: this.handleLogout
    }), c(this, "stores", new Map().set(i.default, this.handlePossibleCredentialFetch).set(a.default, this.handlePossibleCredentialFetch).set(s.Z, this.handlePossibleCredentialFetch))
  }
}
let f = new d