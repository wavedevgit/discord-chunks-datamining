/** Chunk was on 92917 **/
/** chunk id: 825772, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk315069 = require("./315069.js"),
  Chunk427157 = require("./427157.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk315069.A {
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
    super(), l(this, "user", true), l(this, "member_type", true), l(this, "accepted_at", true), this.user = new i.A(e.user), this.member_type = e.member_type, this.accepted_at = e.accepted_at
  }
}