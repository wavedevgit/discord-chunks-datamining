/** Chunk was on web.js **/
/** chunk id: 261811, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk173618 = require("./173618.js"),
  Chunk952335 = require("./952335.js"),
  Chunk461213 = require("./461213.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk173618.A {
  getInitialState() {
    return a.A.getLocalPresence()
  }
  getNextState() {
    return a.A.getLocalPresence()
  }
  shouldCommit() {
    return this.socket.isSessionEstablished()
  }
  emitPresenceUpdate(e) {
    let {
      status: t,
      since: n,
      activities: r,
      afk: i
    } = e;
    this.socket.presenceUpdate(t, n, r, i)
  }
  handleConnectionOpen() {
    let e = !this.switchingAccounts;
    this.update({}, e), this.switchingAccounts = false
  }
  handleAccountSwitch() {
    this.switchingAccounts = true, this.reset(), this.emitPresenceUpdate(this.getState())
  }
  constructor(e) {
    super(false), o(this, "socket", true), o(this, "switchingAccounts", true), o(this, "didCommit", true), this.socket = e, this.switchingAccounts = false, this.didCommit = (0, i.A)(5, 2e4, this.emitPresenceUpdate.bind(this))
  }
}