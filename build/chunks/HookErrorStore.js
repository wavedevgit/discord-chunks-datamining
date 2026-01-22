/** Chunk was on web.js **/
/** chunk id: 877717, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
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
  delete l[s.LU7.SOUND]
}

function d(e) {
  let {
    errorMessage: t,
    errorCode: n
  } = e;
  l[s.LU7.SOUND] = {
    errorMessage: t,
    errorCode: n
  }
}
class f extends(r = Chunk311907.Ay.Store) {
  getHookError(e) {
    return l[e]
  }
}
o(f, "displayName", "HookErrorStore");
let p = new f(Chunk73153.h, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: c,
  MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: u,
  MEDIA_ENGINE_SOUNDSHARE_FAILED: d
})