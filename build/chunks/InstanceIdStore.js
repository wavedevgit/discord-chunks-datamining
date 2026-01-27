/** Chunk was on web.js **/
/** chunk id: 648484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

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
  l = o.xEi - t
}
class u extends(r = Chunk311907.Ay.Store) {
  getId() {
    return l
  }
}
s(u, "displayName", "InstanceIdStore");
let d = new u(Chunk73153.h, {
  RPC_SERVER_READY: c
})