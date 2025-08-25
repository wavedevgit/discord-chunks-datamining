/** Chunk was on web.js **/
/** chunk id: 417626, original params: e,t,n (module,exports,re quire) **/
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
let s = false;

function l(e) {
  s = true
}
class c extends(r = Chunk442837.ZP.Store) {
  get blockedByProxy() {
    return s
  }
}
a(c, "displayName", "ProxyBlockStore");
let u = new c(Chunk570140.Z, {
  PROXY_BLOCKED_REQUEST: l
})