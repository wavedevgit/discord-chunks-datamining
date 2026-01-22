/** Chunk was on web.js **/
/** chunk id: 107351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => c,
  r: () => l
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./747238.js"), require("./801460.js"), require("./508300.js"), require("./650828.js"), require("./896048.js");
var Chunk835245 = require("./835245.js"),
  Chunk506774 = require("./506774.js"),
  Chunk927813 = require("./927813.js");
let s = "purchase_token",
  o = 60 * Chunk927813.A.Millis.DAY;

function l() {
  let e = i.w.get(s);
  if (null != e && e.expires >= Date.now()) return e.purchaseToken;
  let t = (0, r.A)();
  return i.w.set(s, {
    purchaseToken: t,
    expires: Date.now() + o
  }), t
}
async function c() {
  let e = new Uint8Array(l().split("").map(e => e.charCodeAt(0)));
  return btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.digest({
    name: "SHA-256"
  }, e))))
}