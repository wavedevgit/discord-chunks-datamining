/** Chunk was on web.js **/
/** chunk id: 40572, original params: e,t,n (module,exports,re quire) **/
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
  constructor(e) {
    super(), a(this, "id", true), a(this, "name", true), a(this, "managed", true), a(this, "roles", true), a(this, "requiredColons", true), a(this, "user", true), a(this, "animated", true), a(this, "available", true), this.id = e.id, this.name = e.name, this.managed = e.managed, this.roles = e.roles, this.requiredColons = e.requiredColons, this.user = new i.Z(e.user), this.animated = e.animated, this.available = e.available
  }
}