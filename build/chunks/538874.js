/** Chunk was on web.js **/
/** chunk id: 538874, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk241601 = require("./241601.js"),
  Chunk147913 = require("./147913.js"),
  Chunk607802 = require("./607802.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk147913.Z {
  _initialize() {
    this._unsubscribeIntlLoadingStore = (0, Chunk241601.Ql)(Chunk607802.Pe)
  }
  _terminate() {
    var e, t;
    null == (e = (t = this)._unsubscribeIntlLoadingStore) || module.call(exports)
  }
  constructor(...e) {
    super(...e), o(this, "actions", {
      USER_SETTINGS_PROTO_UPDATE: a.Pe,
      POST_CONNECTION_OPEN: a.Pe
    }), o(this, "_unsubscribeIntlLoadingStore", true)
  }
}
let l = new s