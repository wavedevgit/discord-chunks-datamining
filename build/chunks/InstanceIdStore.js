/** Chunk was on web.js **/
/** chunk id: 6132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = 0;

function c(e) {
  let {
    port: t
  } = e;
  l = o.V6Z - t
}
class u extends(r = Chunk442837.ZP.Store) {
  getId() {
    return l
  }
}
s(u, "displayName", "InstanceIdStore");
let d = new u(Chunk570140.Z, {
  RPC_SERVER_READY: c
})