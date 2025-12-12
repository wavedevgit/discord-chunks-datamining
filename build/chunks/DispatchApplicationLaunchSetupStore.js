/** Chunk was on web.js **/
/** chunk id: 436181, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
let s = null,
  l = false;

function c(e) {
  let {
    progress: t,
    total: n,
    name: r
  } = e;
  s = {
    progress: t,
    total: n,
    name: r
  }
}

function u() {
  s = null, l = false
}

function d() {
  l = true
}
class f extends(r = Chunk442837.ZP.Store) {
  getLastProgress() {
    return s
  }
  isRunning() {
    return l
  }
}
a(f, "displayName", "DispatchApplicationLaunchSetupStore");
let p = new f(Chunk570140.Z, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: d,
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: c,
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: u
})