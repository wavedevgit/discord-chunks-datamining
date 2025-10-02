/** Chunk was on 88614 **/
/** chunk id: 541699, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Q: () => c,
  Z: () => d
}), require("./415506.js");
var Chunk979554 = require("./979554.js"),
  Chunk922347 = require("./922347.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js"),
  Chunk523080 = require("./523080.js"),
  Chunk981631 = require("./981631.js");
let c = e => e instanceof d;
class d extends Chunk523080.Z {
  static fromServer(e) {
    return new d(e)
  }
  constructor(e) {
    super(e),
      function(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      }(this, "collectiblesItem", true), this.skuProductLine = s.POd.COLLECTIBLES;
    let t = (e => {
      switch (e.type) {
        case n.Z.AVATAR_DECORATION:
          return i.Z.fromServer(e);
        case n.Z.PROFILE_EFFECT:
          return l.Z.fromServer(e);
        case n.Z.NAMEPLATE:
          return a.Z.fromServer(e);
        default:
          return null
      }
    })(e.collectibles_item);
    if (null == t) throw Error("Collectibles item not found");
    this.collectiblesItem = t
  }
}