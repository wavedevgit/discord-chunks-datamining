/** Chunk was on web.js **/
/** chunk id: 613402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk885110 = require("./885110.js");

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
    super(...e), o(this, "stores", new Map().set(a.Z, l))
  }
}

function l() {
  r.Z.dispatch({
    type: "SELF_PRESENCE_STORE_UPDATE",
    status: a.Z.getStatus(),
    activities: a.Z.getActivities(true),
    hiddenActivities: a.Z.getHiddenActivities()
  })
}
let c = new s