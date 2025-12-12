/** Chunk was on web.js **/
/** chunk id: 175255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk336197 = require("./336197.js"),
  Chunk341298 = require("./341298.js"),
  Chunk558921 = require("./558921.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk147913.Z {
  async handleChannelCreate(e) {
    let {
      channel: t
    } = e;
    (0, a.tr)(t) && (await (0, a.mM)(o.y), (0, i.Z)(s.Z5c.CHANNEL(null, t.id)))
  }
  constructor(...e) {
    super(...e), l(this, "actions", {
      CHANNEL_CREATE: this.handleChannelCreate
    })
  }
}
let u = new c