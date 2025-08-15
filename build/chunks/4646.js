/** Chunk was on web.js **/
/** chunk id: 4646, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  ZP: () => s,
  k2: () => a
}), require("./388685.js");
let i = new(require("./710845.js")).Z("AssetMap");
async function a(e) {
  let t = new o,
    n = Object.entries(e).map(e => {
      let [n, r] = e;
      return t.loadRemoteImage(n, r).catch(e => i.warn("Failed to load canvas asset", e, n, r))
    });
  return await Promise.all(n), t
}
class o {
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
    r(this, "assets", {}), r(this, "fontManager", true)
  }
}
let s = o