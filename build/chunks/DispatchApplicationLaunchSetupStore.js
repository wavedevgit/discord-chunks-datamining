/** Chunk was on web.js **/
/** chunk id: 422033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = null,
  l = false;

function c(e) {
  let {
    progress: t,
    total: n,
    name: r
  } = e;
  o = {
    progress: t,
    total: n,
    name: r
  }
}

function u() {
  o = null, l = false
}

function d() {
  l = true
}
class f extends(r = Chunk311907.Ay.Store) {
  getLastProgress() {
    return o
  }
  isRunning() {
    return l
  }
}
s(f, "displayName", "DispatchApplicationLaunchSetupStore");
let p = new f(Chunk73153.h, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: d,
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: c,
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: u
})