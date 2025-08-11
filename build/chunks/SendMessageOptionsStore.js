/** Chunk was on web.js **/
/** chunk id: 111618, original params: e,t,n (module,exports,re quire) **/
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
let s = {};

function l(e) {
  let {
    message: t,
    sendMessageOptions: n
  } = e;
  null != n && (s[t.id] = n), null != t.nonce && t.nonce in s && delete s[t.nonce]
}
class c extends(r = Chunk442837.ZP.Store) {
  getOptions(e) {
    return s[e]
  }
}
a(c, "displayName", "SendMessageOptionsStore");
let u = new c(Chunk570140.Z, {
  MESSAGE_CREATE: l
})