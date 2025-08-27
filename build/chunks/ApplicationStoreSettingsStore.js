/** Chunk was on web.js **/
/** chunk id: 558314, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
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
let s = {
  matureAgree: false
};

function l() {
  s.matureAgree = true
}
class c extends(r = Chunk442837.ZP.Store) {
  get didMatureAgree() {
    return s.matureAgree
  }
}
o(c, "displayName", "ApplicationStoreSettingsStore");
let u = new c(Chunk570140.Z, {
  APPLICATION_STORE_MATURE_AGREE: l
})