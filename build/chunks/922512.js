/** Chunk was on web.js **/
/** chunk id: 922512, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk315069 = require("./315069.js"),
  Chunk985018 = require("./985018.jsx");

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
    return new s({
      id: e.id,
      liveBuildId: e.live_build_id,
      name: e.name
    })
  }
  getName(e) {
    return null != this.name ? this.name : this.id === e ? i.intl.string(i.t.AHqj6c) : i.intl.string(i.t["62f4nE"])
  }
  constructor(e) {
    super(), a(this, "id", true), a(this, "liveBuildId", true), a(this, "name", true), this.id = e.id, this.liveBuildId = e.liveBuildId, this.name = e.name
  }
}