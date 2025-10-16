/** Chunk was on web.js **/
/** chunk id: 541699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => d,
  Z: () => f
}), require("./415506.js");
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
    super(e), c(this, "collectiblesItem", true), this.skuProductLine = l.POd.COLLECTIBLES;
    let t = u(e.collectibles_item);
    if (null == t) throw Error("Collectibles item not found");
    this.collectiblesItem = t
  }
}