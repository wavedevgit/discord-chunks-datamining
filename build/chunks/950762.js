/** Chunk was on 76443 **/
/** chunk id: 950762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk315069 = require("./315069.js"),
  Chunk427157 = require("./427157.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk315069.A {
  constructor(e) {
    super(), i(this, "id", true), i(this, "name", true), i(this, "managed", true), i(this, "roles", true), i(this, "requiredColons", true), i(this, "user", true), i(this, "animated", true), i(this, "available", true), this.id = e.id, this.name = e.name, this.managed = e.managed, this.roles = e.roles, this.requiredColons = e.requiredColons, this.user = new r.A(e.user), this.animated = e.animated, this.available = e.available
  }
}