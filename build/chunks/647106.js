/** Chunk was on web.js **/
/** chunk id: 647106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk917136 = require("./917136.js"),
  Chunk976910 = require("./976910.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = false;
class d extends Chunk439372.A {
  handlePossibleCredentialFetch() {
    if (!(u || __OVERLAY__) && i.default.getLoginStatus() === l.aUe.NONE) {
      if (o.A.hasFetchedCredentials()) {
        u = true;
        return
      }
      true !== a.default.getCurrentUser() && (u = true, (0, s.JQ)())
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
    }), c(this, "stores", new Map().set(i.default, this.handlePossibleCredentialFetch).set(a.default, this.handlePossibleCredentialFetch).set(o.A, this.handlePossibleCredentialFetch))
  }
}
let f = new d