/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => p
});
var r, i = n(442837),
  o = n(570140),
  a = n(981631);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = {};

function c() {
  l = {}
}

function u() {
  delete l[a.K3D.SOUND]
}

function d(e) {
  let {
    errorMessage: t,
    errorCode: n
  } = e;
  l[a.K3D.SOUND] = {
    errorMessage: t,
    errorCode: n
  }
}
class f extends(r = i.ZP.Store) {
  getHookError(e) {
    return l[e]
  }
}
s(f, "displayName", "HookErrorStore");
let p = new f(o.Z, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: c,
  MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: u,
  MEDIA_ENGINE_SOUNDSHARE_FAILED: d
})