/** Chunk was on web.js **/
/** chunk id: 473288, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk929677 = require("./929677.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  i.O.refetch(e.user_id)
}
class s extends Chunk147913.Z {
  constructor(...e) {
    super(...e), o(this, "actions", {
      USER_APPLICATION_IDENTITY_UPDATE: a,
      USER_APPLICATION_IDENTITY_REMOVE: a
    })
  }
}
let l = new s