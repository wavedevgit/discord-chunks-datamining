/** Chunk was on web.js **/
/** chunk id: 504518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk81825 = require("./81825.js"),
  Chunk598077 = require("./598077.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk81825.Z {
  static createFromServer(e) {
    return new a(e)
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
    super(), o(this, "user", true), o(this, "member_type", true), o(this, "accepted_at", true), this.user = new i.Z(e.user), this.member_type = e.member_type, this.accepted_at = e.accepted_at
  }
}