/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => p
});
var r, i = n(442837),
  o = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = null,
  l = !1;

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
  s = null, l = !1
}

function d() {
  l = !0
}
class f extends(r = i.ZP.Store) {
  getLastProgress() {
    return s
  }
  isRunning() {
    return l
  }
}
a(f, "displayName", "DispatchApplicationLaunchSetupStore");
let p = new f(o.Z, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: d,
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: c,
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: u
})