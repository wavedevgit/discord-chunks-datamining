/** Chunk was on web.js **/
/** chunk id: 729303, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
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
let s = new Map;

function l(e) {
  let {
    userId: t,
    key: n
  } = e, r = new Uint8Array(n);
  s.set(t, r)
}

function c(e) {
  let {
    userId: t
  } = e;
  return s.delete(t)
}

function u() {
  s.clear()
}
class d extends(r = Chunk442837.ZP.Store) {
  getUsers() {
    return s
  }
  isKeyVerified(e, t) {
    let n = s.get(e);
    if (null == t || null == n || n.length !== t.length) returnfalse;
    for (let e = 0; e < t.length; e++)
      if (t[e] !== n[e]) returnfalse;
    returntrue
  }
}
a(d, "displayName", "TransientKeyStore");
let f = new d(Chunk570140.Z, {
  CONNECTION_OPEN: u,
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: l,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: c
})