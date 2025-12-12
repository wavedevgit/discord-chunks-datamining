/** Chunk was on web.js **/
/** chunk id: 23434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = null;
class l extends(r = Chunk442837.ZP.Store) {
  hasAction() {
    return null != s
  }
  getAction() {
    return s
  }
}

function c(e) {
  s = e.requiredAction
}
a(l, "displayName", "UserRequiredActionStore");
let u = new l(Chunk570140.Z, {
  CONNECTION_OPEN: c,
  USER_REQUIRED_ACTION_UPDATE: c
})