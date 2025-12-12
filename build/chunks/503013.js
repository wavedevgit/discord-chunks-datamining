/** Chunk was on web.js **/
/** chunk id: 503013, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk81825 = require("./81825.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk81825.Z {
  static createFromServer(e) {
    return new a({
      id: e.id,
      liveBuildId: e.live_build_id,
      name: e.name
    })
  }
  getName(e) {
    return null != this.name ? this.name : this.id === e ? i.intl.string(i.t.AHqj6c) : i.intl.string(i.t["62f4nE"])
  }
  constructor(e) {
    super(), o(this, "id", true), o(this, "liveBuildId", true), o(this, "name", true), this.id = e.id, this.liveBuildId = e.liveBuildId, this.name = e.name
  }
}