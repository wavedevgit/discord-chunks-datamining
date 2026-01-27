/** Chunk was on web.js **/
/** chunk id: 31056, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
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
class s extends(r = Chunk311907.Ay.Store) {
  getState() {
    return {
      enabled: false,
      optedOut: false
    }
  }
  get optedOut() {
    returnfalse
  }
  get enabled() {
    returnfalse
  }
  get visible() {
    returnfalse
  }
  get active() {
    returnfalse
  }
}
o(s, "displayName", "LowPerformanceModeStore");
let l = new s(Chunk73153.h, {})