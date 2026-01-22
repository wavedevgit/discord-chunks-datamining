/** Chunk was on web.js **/
/** chunk id: 755439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk613057 = require("./613057.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null,
  c = [Chunk613057.Hi.REDISTRIBUTABLE_INSTALL_FAILED, Chunk613057.Hi.POST_INSTALL_FAILED, Chunk613057.Hi.POST_INSTALL_CANCELLED],
  u = [Chunk613057.Hi.APPLICATION_NOT_FOUND, Chunk613057.Hi.APPLICATION_LOAD_FAILED, Chunk613057.Hi.INTERRUPTED, Chunk613057.Hi.DESERIALIZATION_FAILED];

function d(e) {
  let {
    error: t
  } = e;
  l = null != t.code && u.includes(t.code) ? null : t
}

function f() {
  null != l && null != l.code && c.includes(l.code) && (l = null)
}
class p extends(r = Chunk311907.Ay.Store) {
  getLastError() {
    return l
  }
}
o(p, "displayName", "DispatchApplicationErrorStore");
let _ = new p(Chunk73153.h, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: f,
  DISPATCH_APPLICATION_ERROR: d
})