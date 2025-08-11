/** Chunk was on web.js **/
/** chunk id: 961869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  getKrispModel: () => i,
  setKrispModelOverride: () => a,
  setKrispSuppressionLevel: () => o
});
var Chunk579806 = require("./579806.js");

function i() {
  try {
    return Chunk579806.Z.nativeModules.requireModule("discord_krisp").getNcModelFilename()
  } catch (e) {
    return Promise.resolve(null)
  }
}

function o(e) {
  try {
    var t, n;
    null == (t = (n = r.Z.nativeModules.requireModule("discord_krisp")).setSuppressionLevel) || t.call(n, e)
  } catch (e) {}
}

function a(e) {
  try {
    r.Z.nativeModules.requireModule("discord_krisp").setNcModel(e)
  } catch (e) {}
}