/** Chunk was on web.js **/
/** chunk id: 697951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk22007 = require("./22007.js"),
  Chunk14509 = require("./14509.js"),
  Chunk276041 = require("./276041.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk439372.A {
  async handleChannelCreate(e) {
    let {
      channel: t
    } = e;
    (0, a.TT)(t) && (await (0, a.ml)(o.$), (0, i.A)(s.BVt.CHANNEL(null, t.id)))
  }
  constructor(...e) {
    super(...e), l(this, "actions", {
      CHANNEL_CREATE: this.handleChannelCreate
    })
  }
}
let u = new c