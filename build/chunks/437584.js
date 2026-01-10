/** Chunk was on web.js **/
/** chunk id: 437584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk588956 = require("./588956.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./468208.js");
class o extends Chunk147913.Z {
  constructor(...e) {
    super(...e), a(this, "actions", {
      POST_CONNECTION_OPEN: () => (0, i.Z)(),
      BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => (0, i.Z)(true)
    })
  }
}
let s = new o