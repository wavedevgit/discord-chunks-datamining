/** Chunk was on web.js **/
/** chunk id: 714763, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./321073.js"), require("./896048.js");
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
let o = [],
  l = false,
  c = o;

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
  c = o
}
class p extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t, n;
    l = null != (t = null == e ? true : e.persistentCodesEnabled) && t, c = null != (n = null == e ? true : e.uploadedKeyVersions) ? n : o
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
s(p, "displayName", "SecureFramesPersistedStore"), s(p, "persistKey", "SecureFramesPersistedStore");
let _ = new p(Chunk73153.h, {
  SECURE_FRAMES_SETTINGS_UPDATE: u,
  SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: d,
  SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: f
})