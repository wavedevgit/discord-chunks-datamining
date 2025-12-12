/** Chunk was on web.js **/
/** chunk id: 239088, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk475941 = require("./475941.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk147913.Z {
  constructor(...e) {
    super(...e), o(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), o(this, "handlePostConnectionOpen", () => {
      (0, i.G)()
    })
  }
}
let s = new a