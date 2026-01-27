/** Chunk was on web.js **/
/** chunk id: 217284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  getKrispModel: () => i,
  setKrispModelOverride: () => o,
  setKrispSuppressionLevel: () => a
});
var Chunk77729 = require("./77729.js");

function i() {
  try {
    return r.A.nativeModules.requireModule("discord_krisp").getNcModelFilename()
  } catch (e) {
    return Promise.resolve(null)
  }
}

function a(e) {
  try {
    var t, n;
    null == (t = (n = r.A.nativeModules.requireModule("discord_krisp")).setSuppressionLevel) || t.call(n, e)
  } catch (e) {}
}

function o(e) {
  try {
    r.A.nativeModules.requireModule("discord_krisp").setNcModel(e)
  } catch (e) {}
}