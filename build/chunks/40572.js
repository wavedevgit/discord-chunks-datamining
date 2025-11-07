/** Chunk was on 64982 **/
/** chunk id: 40572, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk81825 = require("./81825.js"),
  Chunk598077 = require("./598077.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk81825.Z {
  constructor(e) {
    super(), l(this, "id", true), l(this, "name", true), l(this, "managed", true), l(this, "roles", true), l(this, "requiredColons", true), l(this, "user", true), l(this, "animated", true), l(this, "available", true), this.id = e.id, this.name = e.name, this.managed = e.managed, this.roles = e.roles, this.requiredColons = e.requiredColons, this.user = new i.Z(e.user), this.animated = e.animated, this.available = e.available
  }
}