/** Chunk was on web.js **/
/** chunk id: 872472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f,
  L: () => d
}), require("./321073.js"), require("./896048.js"), require("./65821.js");
var Chunk575593 = require("./575593.js"),
  Chunk898461 = require("./898461.js"),
  Chunk837015 = require("./837015.js"),
  Chunk203632 = require("./203632.js"),
  Chunk520606 = require("./520606.js"),
  Chunk652215 = require("./652215.js");

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
      case r.R.AVATAR_DECORATION:
        return i.A.fromServer(e);
      case r.R.PROFILE_EFFECT:
        return s.A.fromServer(e);
      case r.R.NAMEPLATE:
        return a.A.fromServer(e);
      default:
        return null
    }
  },
  d = e => e instanceof f;
class f extends Chunk520606.A {
  static fromServer(e) {
    return new f(e)
  }
  constructor(e) {
    if (super(e), c(this, "collectiblesItem", true), c(this, "bundleItems", true), this.skuProductLine = l.EZt.COLLECTIBLES, null != e.bundle_items) {
      const t = [];
      for (const n of e.bundle_items) {
        const e = u(n);
        null != e && t.push(e)
      }
      if (0 === t.length) throw Error("Bundle has no valid items");
      this.bundleItems = t
    } else if (null != e.collectibles_item) {
      const t = u(e.collectibles_item);
      if (null == t) throw Error("Collectibles item not found");
      this.collectiblesItem = t
    } else throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items")
  }
}