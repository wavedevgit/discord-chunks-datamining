/** Chunk was on 86948 **/
/** chunk id: 504518, original params: e,t,r (module,exports,require) **/
var Chunk81825 = require("./81825.js"),
  Chunk598077 = require("./598077.js");

function s(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
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
    super(), s(this, "user", true), s(this, "member_type", true), s(this, "accepted_at", true), this.user = new i.Z(e.user), this.member_type = e.member_type, this.accepted_at = e.accepted_at
  }
}