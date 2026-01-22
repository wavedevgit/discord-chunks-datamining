/** Chunk was on web.js **/
/** chunk id: 825772, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk315069 = require("./315069.js"),
  Chunk427157 = require("./427157.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk315069.A {
  static createFromServer(e) {
    return new s(e)
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
    super(), a(this, "user", true), a(this, "member_type", true), a(this, "accepted_at", true), this.user = new i.A(e.user), this.member_type = e.member_type, this.accepted_at = e.accepted_at
  }
}