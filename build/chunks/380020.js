/** Chunk was on web.js **/
/** chunk id: 380020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk461213 = require("./461213.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk439372.A {
  constructor(...e) {
    super(...e), o(this, "stores", new Map().set(a.A, l))
  }
}

function l() {
  r.h.dispatch({
    type: "SELF_PRESENCE_STORE_UPDATE",
    status: a.A.getStatus(),
    activities: a.A.getActivities(true),
    hiddenActivities: a.A.getHiddenActivities()
  })
}
let c = new s