/** Chunk was on web.js **/
/** chunk id: 541699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => d,
  Z: () => f
}), require("./539854.js"), require("./388685.js"), require("./415506.js");
var Chunk979554 = require("./979554.js"),
  Chunk922347 = require("./922347.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js"),
  Chunk523080 = require("./523080.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = e => {
    switch (e.type) {
      case r.Z.AVATAR_DECORATION:
        return i.Z.fromServer(e);
      case r.Z.PROFILE_EFFECT:
        return o.Z.fromServer(e);
      case r.Z.NAMEPLATE:
        return a.Z.fromServer(e);
      default:
        return null
    }
  },
  d = e => e instanceof f;
class f extends Chunk523080.Z {
  static fromServer(e) {
    return new f(e)
  }
  constructor(e) {
    if (super(e), c(this, "collectiblesItem", true), c(this, "bundleItems", true), this.skuProductLine = l.POd.COLLECTIBLES, null != e.bundle_items) {
      let t = [];
      for (let n of e.bundle_items) {
        let e = u(n);
        null != e && t.push(e)
      }
      if (0 === t.length) throw Error("Bundle has no valid items");
      this.bundleItems = t
    } else if (null != e.collectibles_item) {
      let t = u(e.collectibles_item);
      if (null == t) throw Error("Collectibles item not found");
      this.collectiblesItem = t
    } else throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items")
  }
}