/** Chunk was on web.js **/
/** chunk id: 616810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk928801 = require("./928801.js"),
  Chunk549895 = require("./549895.js"),
  Chunk885110 = require("./885110.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk928801.Z {
  getInitialState() {
    return Chunk885110.Z.getLocalPresence()
  }
  getNextState() {
    return Chunk885110.Z.getLocalPresence()
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
    this.update({}, module), this.switchingAccounts = false
  }
  handleAccountSwitch() {
    this.switchingAccounts = true, this.reset(), this.emitPresenceUpdate(this.getState())
  }
  constructor(e) {
    super(false), a(this, "socket", true), a(this, "switchingAccounts", true), a(this, "didCommit", true), this.socket = e, this.switchingAccounts = false, this.didCommit = (0, i.Z)(5, 2e4, this.emitPresenceUpdate.bind(this))
  }
}