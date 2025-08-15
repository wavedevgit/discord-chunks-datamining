/** Chunk was on web.js **/
/** chunk id: 580506, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk2818 = require("./2818.js"),
  Chunk192720 = require("./192720.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s() {
  Chunk2818.Z.getCurrentConfig({
    location: "saved_messages_manager"
  }, {
    autoTrackExposure: false
  }).enabled && (0, Chunk192720.sE)()
}
class l extends Chunk147913.Z {
  constructor(...e) {
    super(...e), o(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), o(this, "handlePostConnectionOpen", () => {
      s()
    })
  }
}
let c = new l