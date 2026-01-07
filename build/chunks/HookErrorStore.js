/** Chunk was on web.js **/
/** chunk id: 858340, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
let l = {};

function c() {
  l = {}
}

function u() {
  delete l[o.K3D.SOUND]
}

function d(e) {
  let {
    errorMessage: t,
    errorCode: n
  } = e;
  l[o.K3D.SOUND] = {
    errorMessage: t,
    errorCode: n
  }
}
class f extends(r = Chunk442837.ZP.Store) {
  getHookError(e) {
    return l[e]
  }
}
s(f, "displayName", "HookErrorStore");
let p = new f(Chunk570140.Z, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: c,
  MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: u,
  MEDIA_ENGINE_SOUNDSHARE_FAILED: d
})