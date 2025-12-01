/** Chunk was on web.js **/
/** chunk id: 922156, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk186901 = require("./186901.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null,
  c = [Chunk186901.ff.REDISTRIBUTABLE_INSTALL_FAILED, Chunk186901.ff.POST_INSTALL_FAILED, Chunk186901.ff.POST_INSTALL_CANCELLED],
  u = [Chunk186901.ff.APPLICATION_NOT_FOUND, Chunk186901.ff.APPLICATION_LOAD_FAILED, Chunk186901.ff.INTERRUPTED, Chunk186901.ff.DESERIALIZATION_FAILED];

function d(e) {
  let {
    error: t
  } = e;
  l = null != t.code && u.includes(t.code) ? null : t
}

function f() {
  null != l && null != l.code && c.includes(l.code) && (l = null)
}
class p extends(r = Chunk442837.ZP.Store) {
  getLastError() {
    return l
  }
}
s(p, "displayName", "DispatchApplicationErrorStore");
let _ = new p(Chunk570140.Z, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: f,
  DISPATCH_APPLICATION_ERROR: d
})