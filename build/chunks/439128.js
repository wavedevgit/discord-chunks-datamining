/** Chunk was on 99904 **/
/** chunk id: 439128, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => r
});
var Chunk81825 = require("./81825.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class r extends Chunk81825.Z {
  static fromServer(e) {
    return new r(e)
  }
  setPassword(e) {
    return this.password = e, this
  }
  constructor(e) {
    super(), i(this, "id", true), i(this, "summary", true), i(this, "userIds", true), i(this, "password", true), this.id = e.pool_id, this.summary = e.summary, this.userIds = e.user_ids
  }
}