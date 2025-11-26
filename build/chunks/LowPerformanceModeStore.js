/** Chunk was on web.js **/
/** chunk id: 471411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends(r = Chunk442837.ZP.Store) {
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
let l = new s(Chunk570140.Z, {})