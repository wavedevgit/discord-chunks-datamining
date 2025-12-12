/** Chunk was on web.js **/
/** chunk id: 936101, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => c,
  d: () => l
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./35282.js"), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./388685.js");
var Chunk772848 = require("./772848.js"),
  Chunk433517 = require("./433517.js"),
  Chunk70956 = require("./70956.js");
let o = "purchase_token",
  s = 60 * Chunk70956.Z.Millis.DAY;

function l() {
  let e = Chunk433517.K.get(o);
  if (null != module && module.expires >= Date.now()) return module.purchaseToken;
  let t = (0, Chunk772848.Z)();
  return Chunk433517.K.set(o, {
    purchaseToken: exports,
    expires: Date.now() + s
  }), exports
}
async function c() {
  let e = new Uint8Array(l().split("").map(e => e.charCodeAt(0)));
  return btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.digest({
    name: "SHA-256"
  }, module))))
}