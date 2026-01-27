/** Chunk was on web.js **/
/** chunk id: 881902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk201718 = require("./201718.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  i.P.refetch(e.user_id)
}
class s extends Chunk439372.A {
  constructor(...e) {
    super(...e), a(this, "actions", {
      USER_APPLICATION_IDENTITY_UPDATE: o,
      USER_APPLICATION_IDENTITY_REMOVE: o
    })
  }
}
let l = new s