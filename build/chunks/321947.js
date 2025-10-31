/** Chunk was on web.js **/
/** chunk id: 321947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => s,
  Z: () => l
}), require("./415506.js");
var Chunk659181 = require("./659181.js"),
  Chunk523080 = require("./523080.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = e => e instanceof l;
class l extends Chunk523080.Z {
  static fromServer(e) {
    return new l(e)
  }
  constructor(e) {
    super(e), o(this, "sku", true), this.skuProductLine = a.POd.SOCIAL_LAYER_GAME_ITEM;
    let t = r.Z.createFromServer(e.sku);
    if (null == t) throw Error("SKU not found");
    this.sku = t
  }
}