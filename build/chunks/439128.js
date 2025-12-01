/** Chunk was on 837 **/
/** chunk id: 439128, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => l
});
var Chunk81825 = require("./81825.js");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk81825.Z {
  static fromServer(e) {
    return new l(e)
  }
  setPassword(e) {
    return this.password = e, this
  }
  constructor(e) {
    super(), r(this, "id", true), r(this, "summary", true), r(this, "userIds", true), r(this, "password", true), this.id = e.pool_id, this.summary = e.summary, this.userIds = e.user_ids
  }
}