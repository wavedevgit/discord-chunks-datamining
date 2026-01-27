/** Chunk was on web.js **/
/** chunk id: 870570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = null;
class l extends(r = Chunk311907.Ay.Store) {
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
o(l, "displayName", "UserRequiredActionStore");
let u = new l(Chunk73153.h, {
  CONNECTION_OPEN: c,
  USER_REQUIRED_ACTION_UPDATE: c
})