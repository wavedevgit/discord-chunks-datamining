/** Chunk was on web.js **/
/** chunk id: 615830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./539854.js"), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = [],
  l = false,
  c = s;

function u(e) {
  l = e.persistentCodesEnabled
}

function d(e) {
  let t = [];
  for (let n of c) {
    if (n === e.keyVersion) return;
    t.push(n)
  }
  t.push(e.keyVersion), c = t
}

function f() {
  c = s
}
class p extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t, n;
    l = null != (t = null == e ? true : e.persistentCodesEnabled) && t, c = null != (n = null == e ? true : e.uploadedKeyVersions) ? n : s
  }
  getState() {
    return {
      persistentCodesEnabled: l,
      uploadedKeyVersions: c
    }
  }
  getPersistentCodesEnabled() {
    return l
  }
  getUploadedKeyVersionsCached() {
    return c
  }
}
o(p, "displayName", "SecureFramesPersistedStore"), o(p, "persistKey", "SecureFramesPersistedStore");
let _ = new p(Chunk570140.Z, {
  SECURE_FRAMES_SETTINGS_UPDATE: u,
  SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: d,
  SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: f
})