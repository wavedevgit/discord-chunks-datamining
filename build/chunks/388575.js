/** Chunk was on web.js **/
/** chunk id: 388575, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk11057 = require("./11057.js"),
  Chunk439372 = require("./439372.js"),
  Chunk822382 = require("./822382.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk439372.A {
  _initialize() {
    this._unsubscribeIntlLoadingStore = (0, r.I)(a.IY)
  }
  _terminate() {
    var e, t;
    null == (e = (t = this)._unsubscribeIntlLoadingStore) || e.call(t)
  }
  constructor(...e) {
    super(...e), o(this, "actions", {
      USER_SETTINGS_PROTO_UPDATE: a.IY,
      POST_CONNECTION_OPEN: a.IY
    }), o(this, "_unsubscribeIntlLoadingStore", true)
  }
}
let l = new s