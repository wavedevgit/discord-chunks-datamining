/** Chunk was on web.js **/
/** chunk id: 473288, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk147913 = require("./147913.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  (0, r.Xf)(a.McO.USER_APPLICATION_IDENTITIES(e.user_id))
}
class l extends Chunk147913.Z {
  constructor(...e) {
    super(...e), o(this, "actions", {
      USER_APPLICATION_IDENTITY_UPDATE: s,
      USER_APPLICATION_IDENTITY_REMOVE: s
    })
  }
}
let c = new l