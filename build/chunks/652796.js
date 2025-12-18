/** Chunk was on web.js **/
/** chunk id: 652796, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk594174 = require("./594174.js"),
  Chunk627097 = require("./627097.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk147913.Z {
  constructor(...e) {
    super(...e), o(this, "actions", {
      HAVEN_DISCONNECT: e => this.handleHavenDisconnect(e)
    }), o(this, "handleHavenDisconnect", e => {
      let t = i.default.getCurrentUser();
      e.userId === (null == t ? true : t.id) && a.O.getState().resetPlayback()
    })
  }
}
let l = new s