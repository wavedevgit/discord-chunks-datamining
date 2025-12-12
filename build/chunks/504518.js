/** Chunk was on web.js **/
/** chunk id: 504518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk81825 = require("./81825.js"),
  Chunk598077 = require("./598077.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk81825.Z {
  static createFromServer(e) {
    return new o(e)
  }
  isPrimary() {
    return 1 === this.member_type
  }
  isMember() {
    return 2 === this.member_type && null != this.accepted_at
  }
  isInvited() {
    return 2 === this.member_type && null == this.accepted_at
  }
  constructor(e) {
    super(), a(this, "user", true), a(this, "member_type", true), a(this, "accepted_at", true), this.user = new i.Z(e.user), this.member_type = e.member_type, this.accepted_at = e.accepted_at
  }
}