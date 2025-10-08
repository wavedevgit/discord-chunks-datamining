/** Chunk was on 18539 **/
/** chunk id: 541699, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  Q: () => l,
  Z: () => c
}), require("./415506.js");
var Chunk979554 = require("./979554.js"),
  Chunk922347 = require("./922347.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js"),
  Chunk523080 = require("./523080.js"),
  Chunk981631 = require("./981631.js");
let l = t => t instanceof c;
class c extends Chunk523080.Z {
  static fromServer(t) {
    return new c(t)
  }
  constructor(t) {
    super(t),
      function(t, e, r) {
        e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = r
      }(this, "collectiblesItem", true), this.skuProductLine = a.POd.COLLECTIBLES;
    let e = (t => {
      switch (t.type) {
        case n.Z.AVATAR_DECORATION:
          return i.Z.fromServer(t);
        case n.Z.PROFILE_EFFECT:
          return o.Z.fromServer(t);
        case n.Z.NAMEPLATE:
          return s.Z.fromServer(t);
        default:
          return null
      }
    })(t.collectibles_item);
    if (null == e) throw Error("Collectibles item not found");
    this.collectiblesItem = e
  }
}