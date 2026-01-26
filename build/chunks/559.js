/** Chunk was on 65298 **/
/** chunk id: 559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => r
});
var Chunk315069 = require("./315069.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class r extends Chunk315069.A {
  static fromServer(e) {
    return new r(e)
  }
  setPassword(e) {
    return this.password = e, this
  }
  constructor(e) {
    super(), l(this, "id", true), l(this, "summary", true), l(this, "userIds", true), l(this, "password", true), this.id = e.pool_id, this.summary = e.summary, this.userIds = e.user_ids
  }
}