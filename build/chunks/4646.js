/** Chunk was on web.js **/
/** chunk id: 4646, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  ZP: () => c,
  k2: () => s
}), require("./388685.js");
var Chunk710845 = require("./710845.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
try {
  r = require(Object(function() {
    var e = Error("Cannot find module '@shopify/react-native-skia'");
    throw e.code = "MODULE_NOT_FOUND", e
  }())).Skia
} catch (e) {
  r = null
}
let o = new Chunk710845.Z("AssetMap");
async function s(e) {
  let t = new l,
    n = Object.entries(e).map(e => {
      let [n, r] = e;
      return t.loadRemoteImage(n, r).catch(e => o.warn("Failed to load canvas asset", e, n, r))
    });
  return await Promise.all(n), t
}
class l {
  loadFonts() {
    return Promise.resolve()
  }
  async loadRemoteImage(e, t) {
    let n = new Image;
    return n.src = t, n.crossOrigin = "anonymous", await n.decode(), this.assets[e] = n, Promise.resolve()
  }
  get(e) {
    return this.assets[e]
  }
  has(e) {
    return null != this.assets[e]
  }
  constructor() {
    a(this, "assets", {}), a(this, "fontManager", true)
  }
}
let c = l